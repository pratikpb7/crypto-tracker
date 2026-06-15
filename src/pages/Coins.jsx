import { useState,useEffect } from "react";
import { getCoins } from "../services/coinService";
export default function Coins() {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try {
      const data = await getCoins();
      setCoins(data);
    } catch (error) {
      console.error("Failed to fetch coins", error);
    }
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
   <div className="p-4">
  {coins.map((coin) => (
    <div
      key={coin.id}
      className="border p-4 rounded-lg mb-4 shadow"
    >
      <h2 className="text-xl font-bold">
        {coin.name}
      </h2>

      <p>{coin.symbol.toUpperCase()}</p>

      <p>${coin.current_price}</p>
    </div>
  ))}
</div>
  );
}
