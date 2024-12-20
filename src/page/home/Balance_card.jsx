import React from "react";

const Balance_card = () => {
  return (
    <div className="bg-[url('/bg-balance.png')] my-10 bg-cover rounded-[40px] mx-auto text-white flex flex-col gap-5 p-10">
      <div>
        <p>Số dư của tôi</p>
        <p>$ 520.80</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="border-r-2 border-gray-300">
          <p>20.80</p>
          <p>Lợi ích nhiệm vụ( $ )</p>
        </div>
        <div className="text-end border-l-2 border-gray-300">
          <p>14.11</p>
          <p>Hoa hồng hôm nay( $ )</p>
        </div>
      </div>
    </div>
  );
};

export default Balance_card;
