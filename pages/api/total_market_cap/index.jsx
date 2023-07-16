import axios from "axios";

export default async (req, res) => {
  const response = await axios.get("https://api.coingecko.com/api/v3/global");
  const totalMarketCap = response.data.data.total_market_cap;
  res.status(200).json({
    totalMarketCap,
  });
};
