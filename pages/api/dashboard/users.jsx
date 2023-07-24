import dbConnect from "@/libs/dbConnect";
import User from "@/models/Users";
import notAdmin from "@/helpers/notAdmin";

export default async (req, res) => {
  await notAdmin(req, res);
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const userDeleted = await User.deleteOne({ _id: req.query.id });
        if (!userDeleted) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {}

      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
