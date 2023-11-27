import dbConnect from "@/libs/dbConnect";
import Message from "@/models/Messages";
import sanitizeHtml from 'sanitize-html';

export default async function handler(req, res) {
  const {method} = req;
  await dbConnect();

  switch (method) {
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
    default:
      res.status(400).json({message: "Method not allowed"});
      break;
  }
}
