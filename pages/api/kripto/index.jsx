import ApiData from "@/models/ApiDatas";
import dbConnect from "@/libs/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const apiData = await ApiData.findOne({}).select("-__v");

        res.status(200).json({ success: true, data: apiData });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Geçersiz istek metodu." });
      break;
  }
}
