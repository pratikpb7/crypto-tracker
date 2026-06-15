import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoins = async () => {
  const response = await axios.get(
    `${BASE_URL}/coins/markets?vs_currency=usd`
  );

  return response.data;
};