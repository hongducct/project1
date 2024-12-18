import React from "react";

const Balance_card = () => {
  return (
    <div className="bg-[url('/bg-balance.png')] my-10 bg-cover w-2/3 rounded-[40px] mx-auto text-white flex flex-col gap-5 p-10">
      <div>
        <p>내 균형</p>
        <p>$ 520.80</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="border-r-2 border-gray-300">
          <p>20.80</p>
          <p>총이자 소득( $ )</p>
        </div>
        <div className="text-end border-l-2 border-gray-300">
          <p>14.11</p>
          <p>오늘의 커미션( $ )</p>
        </div>
      </div>
    </div>
  );
};

export default Balance_card;
