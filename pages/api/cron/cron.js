import ApiData from "@/models/ApiDatas";
import dbConnect from "@/libs/dbConnect";
import axios from "axios";

var cron = require("node-cron");

async function fetchDataAndStoreInDatabase() {
  await dbConnect();
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/global");

    const totalMarketCap = response.data.data.total_market_cap;

    const totalMarketCapData = await ApiData.countDocuments({});
    if (totalMarketCapData > 0) {
      await ApiData.findOneAndUpdate(
        {},
        {
          totalMarketCap: totalMarketCap,
        },
        { new: true }
      );
    } else {
      await ApiData.create({
        totalMarketCap: totalMarketCap,
      });
    }
  } catch (error) {
    console.error("Verileri MongoDB'ye kaydetme hatası:", error);
  }
}

cron.schedule("*/10 * * * * *", async () => {
  await fetchDataAndStoreInDatabase();
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: "Veriler MongoDB'ye kaydedildi." });
  } else {
    res.status(400).json({ message: "Geçersiz istek metodu." });
  }
}
