import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="py-8 px-5 sm:px-10 md:px-15 lg:px-32 min-h-screen text-white"
      style={{
        backgroundImage: `radial-gradient(white 1px, transparent 1px), linear-gradient(to bottom right, #04030e, #1a0ea1, #050511)`,
        backgroundSize: "30px 30px, cover",
      }}>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>

    </div>
  );
};

export default App;
