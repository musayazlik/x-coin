import ApiData from "@/models/ApiDatas";
import dbConnect from "@/libs/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const limit = 20;
        const page = req.query.page;
        if (req.query.value === "totalmc") {
          const apiData = await ApiData.findOne({}).select("totalMarketCap");

          res.status(200).json({ success: true, data: apiData });
        }

        if (req.query.value === "subcoinmix") {
          const apiData = await ApiData.findOne({}).select("subcoinmix");

          console.log(apiData);
          res.status(200).json({ success: true, data: apiData });
        }
        res.status(200).json({ success: false, message: "Bad Request" });
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
