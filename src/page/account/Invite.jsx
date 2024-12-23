import SubLayout from "@/layout/SubLayout";
import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
const Invite = () => {
  return (
    <SubLayout title="Mời">
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <img src="/banner.6e3d838.png" className="mx-auto lg:size-1/3 size-full" alt="" />
      </div>
      <div className="flex flex-col p-5 lg:p-10 bg-white lg:mx-52 mx-5 shadow-xl gap-5 items-center">
        <div className="flex items-center justify-center  w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-500 rounded-full">
          <AiFillDollarCircle />
          <AiFillDollarCircle />
          <AiFillDollarCircle size={20} />
        </div>
        <p className="text-center">
          Sự kiện mới : Khách hàng mở tài khoản cặp đôi ngay bây giờ . Người
          dùng mới khi đạt cấp độ VIP1 nhận được phần thưởng là 28 đô la Mỹ và
          các cặp đôi đạt cấp độ VIP2 nhận được phần thưởng là 52 đô la Mỹ...!
        </p>
        <p>
          Mã giới thiệu <b>FYRS2Q</b>
        </p>
      </div>
    </SubLayout>
  );
};

export default Invite;
