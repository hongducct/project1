import React from "react";
import logo from "/logo.png";
const Hero = () => {
  return (
    <div className="bg-blue-200 h-96 flex flex-col items-center">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Hello</h1>
          <p>cbmy</p>
        </div>
        <p>Shopee 가 당신의 부의 길을 열어줍니다</p>
      </div>
        <img src={logo} alt="" className="max-w-60 max-h-60" />
    </div>
  );
};

export default Hero;
