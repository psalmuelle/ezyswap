import axios from "axios";

const coinGecko = axios.create({
  baseURL: `https://api.coingecko.com/api/v3`,
});

export const getMarketPairs = async ({ baseAsset }) => {
  try {
    const response = await coinGecko.get(`/coins/markets`, {
      params: {
        vs_currency: "usd",
        ids: baseAsset,
        sparkline: true,
        price_change_percentage: "1h",
        locale: "en",
        precision: "4",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch Data");
  }
};

export const getCryptoPrices = async () => {
  try {
    const response = await coinGecko.get("/exchange_rates");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
