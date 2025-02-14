import dbConnect from "@/libs/dbConnect";
import User from "@/models/Users";
import notAdmin from "@/helpers/notAdmin";

export default async (req, res) => {
  await notAdmin(req, res);
  await dbConnect();

  const {method} = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find(
          {
            isDeleted: false,
          },
          {
            password: 0,
            __v: 0,
          }
        ); /* find all the data in our database */
        res.status(200).json({success: true, data: users});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case "POST":
      try {
        const user = await User.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({success: true, data: user});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;

    case "PATCH":
      try {

        if (req.query.status === "isActive") {
          const user = await User.findByIdAndUpdate(
            req.query.id,
            {isActive: req.query.isActive},
            {
              new: true,
              runValidators: true,
            }
          )
          if (!user) {
            return res.status(400).json({
              success: false,
              message: "Kullanıcı bulunamadı"
            });
          }
          res.status(200).json({success: true, data: user});
        }

        if (req.query.status === "isAdmin") {
          const user = await User.findByIdAndUpdate(
            req.query.id,
            {role: req.query.role},
            {
              new: true,
              runValidators: true,
            }
          )
          if (!user) {
            return res.status(400).json({
              success: false,
              message: "Kullanıcı bulunamadı"
            });
          }
          res.status(200).json({success: true, data: user});
        }
      } catch (error) {
        res.status(400).json({success: false, message: error});
      }
      break;

    case "DELETE":
      try {
        const userDeleted = await User.findUpdate(
          {_id: req.query.id},
          {isDeleted: true}
        );

        if (!userDeleted) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: {}});
      } catch (error) {
      }

      break;
    default:
      res.status(400).json({success: false});
      break;
  }
};
