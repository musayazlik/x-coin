import dbConnect from "@/libs/dbConnect";
import User from "@/models/Users";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  const { name, surname, username, email, password, walletAddress } = req.body;

  await dbConnect();

  const { method } = req;

  switch (method) {
    case "POST":
      try {
        if (!name || !surname || !username || !email || !password) {
          return res
            .status(400)
            .json({ success: false, msg: "Please provide all fields..." });
        }

        const isEmail = await User.findOne({ email: email });

        if (isEmail) {
          return res
            .status(400)
            .json({ success: false, msg: "Email already exists..." });
        }

        const hashedPassword = await hash(password, 12);

        const user = await User.create({
          name,
          surname,
          username,
          email,
          password: hashedPassword,
          walletAddress,
        });

        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, msg: "Method not allowed" });
      break;
  }
}
