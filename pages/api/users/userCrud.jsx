import User from "@/models/Users";
import Order from "@/models/Orders";
import dbConnect from "@/libs/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

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

    default:
      res.status(400).json({ success: false });
      break;
  }
}
