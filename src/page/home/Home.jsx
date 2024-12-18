import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Balance_card from "./Balance_card";
import Taplist from "./Taplist";
import RockList from "./RockList";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <div className="mt-14 bg-gray-100">
        <Hero />
        <Balance_card/>
        <Taplist/>
        <RockList/>
      </div>
    </div>
  );
};

export default Home;
