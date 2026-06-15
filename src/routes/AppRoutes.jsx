import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Coins from "../pages/Coins.jsx";
import CoinDetails from "../pages/CoinDetails.jsx"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/coins" element={<Coins/>}/>
            <Route path="/coin/:id" element={<CoinDetails/>}></Route>
        </Routes>
    )
}