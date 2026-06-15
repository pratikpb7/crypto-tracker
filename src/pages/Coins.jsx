import { useState, useEffect } from "react";
import { getCoins } from "../services/coinService";
export default function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading,setLoading]=useState(true)
  const [error, setError] = useState("");
  const fetchCoins = async () => {
    try {
      const data = await getCoins();
      setCoins(data);
    } catch (error) {
      setError("Failed to fetch coins");
    }
    finally {
    setLoading(false);
  }
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  if (loading) {
  return <h1>Loading...</h1>;
}

if (error) {
  return <h1>{error}</h1>;
}
  return (
    <div className="p-4">
      {coins.map((coin) => (
        <div key={coin.id} className="border p-4 rounded-lg mb-4 shadow">
          <h2 className="text-xl font-bold">{coin.name}</h2>

          <p>{coin.symbol.toUpperCase()}</p>

          <p>${coin.current_price}</p>
        </div>
      ))}
    </div>
  );
}
