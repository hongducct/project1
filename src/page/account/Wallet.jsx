import SubLayout from "@/layout/SubLayout";
import React from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  const wallet = [
    {
      title: "Địa chỉ ví liên kết USDT",
      url: "/account/wallet/usdt",
      icon: "/usdt.png",
    },
    {
      title: "Ràng buộc thẻ ngân hàng",
      url: "/account/wallet/bind-card",
      icon: "/bind_card1.png",
    },
  ];
  return (
    <SubLayout title={"VÍ CỦA TÔI"}>
      <div className="lg:px-52 px-5 h-screen py-5">
        <div className="bg-white">
          {wallet.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              className="hover:bg-gray-50 flex border-t gap-5 p-5 items-center"
            >
              <img
                src={item.icon}
                className="size-12 shadow rounded-xl"
                alt=""
              />
              <p className="font-semibold text-blue-800">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </SubLayout>
  );
};

export default Wallet;
