import Orders from "@/models/Orders";
import dbConnect from "@/libs/dbConnect";
import notAdmin from "@/helpers/notAdmin";

export default async function handler(req, res) {
  await notAdmin(req, res);
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const orders = await Orders.find({})
          .sort({ createdAt: -1 })
          .populate("user", "username image");

        res.status(200).json({ success: true, data: orders });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
