import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-500">
        Crypto Tracker
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/coins">Coins</Link>
      </div>
    </nav>
  );
}

export default Navbar;