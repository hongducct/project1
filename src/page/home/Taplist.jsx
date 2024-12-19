import React from "react";
import { Link } from "react-router-dom";

const Taplist = () => {
  const list = [
    {
      img: "/recharge.png",
      title: "입금",
    },
    {
      img: "/invite.png",

      title: "출금",
    },
    {
      img: "/public/team_report.png",

      title: "이체",
    },
    {
      img: "/public/withdraw.png",

      title: "이체",
    },
    {
      img: "/public/withdraw_record.png",

      title: "이체",
    },
    {
      img: "/public/recharge_record.png",

      title: "이체",
    },
  ];
  return (
    <div className="bg-white rounded-[40px] mx-auto">
      <ul className="grid grid-cols-3 p-10 gap-5">
        {list.map((item) => (
          <Link className="flex flex-col items-center hover:underline ">
            <img src={item.img} alt="" />
            <p className="text-sm ">{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Taplist;
