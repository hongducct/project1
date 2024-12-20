import React from "react";
import Hero from "./Hero";
import Balance_card from "./Balance_card";
import Taplist from "./Taplist";
import RockList from "./RockList";
import Layout from "@/layout/Layout";

const Home = () => {
  return (
    <div className="relative">
      <Layout>
        <Hero />
        <div className="p-2 lg:px-20 bg-gray-100">
          <Balance_card />
          <Taplist />
          <RockList />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
