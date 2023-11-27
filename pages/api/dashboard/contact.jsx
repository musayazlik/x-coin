import dbConnect from "@/libs/dbConnect";
import Message from "@/models/Messages";
import sanitizeHtml from 'sanitize-html';
import notAdmin from "@helpers/notAdmin";

export default async function handler(req, res) {
  await notAdmin(req, res);
  const {method} = req;

  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const messages = await Message.find({isDeleted: false}).sort({createdAt: -1});
        res.status(200).json({success: true, data: messages});
      } catch (error) {
        res.status(400).json({success: false, message: error.message});
      }
      break;
    case "POST":
      try {
        const data = {
          name: sanitizeHtml(req.body.name),
          lastname: sanitizeHtml(req.body.lastname),
          email: sanitizeHtml(req.body.email),
          message: sanitizeHtml(req.body.message),
        }
        const message = await Message.create(data);
        res.status(201).json({success: true, data: message});
      } catch (error) {
        res.status(400).json({success: false, message: error.message});
      }
      break;

    case "DELETE":
      try {
        const message = await Message.findById(req.query.id);
        if (!message) {
          return res.status(400).json({
            success: false,
            message: "Mesaj bulunamadı"
          });
        }
        message.isDeleted = true;
        await message.save();
        res.status(200).json({success: true, data: message});
      } catch (error) {
        res.status(400).json({success: false, message: error.message});
      }
    default:
      res.status(400).json({message: "Method not allowed"});
      break;
  }
}
