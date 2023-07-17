import User from "@/models/Users";
import Order from "@/models/Orders";
import dbConnect from "@/libs/dbConnect";
import { hash } from "bcryptjs";
var cloudinary = require("cloudinary");

export default async function handler(req, res) {
  await dbConnect();

  cloudinary.config({
    cloud_name: "dkizgxxpa",
    api_key: "166939866178215",
    api_secret: "CM6lDm0_9fSIF7saJY9AVtMjLik",
  });

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({
          _id: req.query.id,
        }).select("-password");
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PATCH":
      try {
        if (req.query.status === "password") {
          const { password } = req.body;

          const hashedPassword = await hash(password, 12);

          console.log(hashedPassword);

          await User.findOneAndUpdate(
            { _id: req.query.id },
            { password: hashedPassword },
            { new: true }
          );
        } else if (req.query.status === "profile") {
          const { name, surname, username, walletAddress, email } = req.body;

          const isUsername = await User.find({ username: username }).where({
            _id: { $ne: req.query.id },
          });
          const isEmail = await User.find({ email: email }).where({
            _id: { $ne: req.query.id },
          });
          const isWalletAddress = await User.find({
            walletAddress: walletAddress,
          }).where({
            _id: { $ne: req.query.id },
          });

          if (isUsername.length > 0 && username !== "") {
            res.status(400).json({
              success: false,
              message: "Bu kullanıcı adı daha önce alınmış.",
            });
            return;
          }

          if (isEmail.length > 0 && email !== "") {
            res.status(400).json({
              success: false,
              message: "Bu e-posta adresi daha önce alınmış.",
            });
            return;
          }

          if (isWalletAddress.length > 0 && walletAddress !== "") {
            res.status(400).json({
              success: false,
              message: "Bu cüzdan adresi daha önce alınmış.",
            });
            return;
          }

          await User.findOneAndUpdate(
            { _id: req.query.id },
            {
              name: name,
              surname: surname,
              username: username,
              walletAddress: walletAddress,
              email: email,
            },
            { new: true }
          );
        } else if (req.query.status === "avatar") {
          const { avatar } = req.body;

          console.log(avatar);

          cloudinary.upload(
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
            { public_id: "olympic_flag" },
            function (error, result) {
              console.log(result);
            }
          );
        }

        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
