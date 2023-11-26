import axios from "axios";

const coinApi = axios.create({
  baseURL: `https://rest.coinapi.io/v1`,
});

export const getMarketPairs = async ({
  baseAsset,
  quoteAsset,
  timeStart,
  timeEnd,
}) => {
  try {
    const response = await coinApi.get(
      `/exchangerate/${baseAsset}/${quoteAsset}/history`,
      {
        headers: {
          Accept: "application/json",
          "X-CoinAPI-Key": process.env.REACT_APP_API_KEY,
        },
        params: {
          period_id: "1HRS",
          time_start: timeStart,
          time_end: timeEnd,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to Fetch Data");
  }
};
