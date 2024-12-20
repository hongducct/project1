import React from "react";
import { Link } from "react-router-dom";

const Taplist = () => {
  const list = [
    {
      img: "/recharge.png",
      title: "Nạp",
    },
    {
      img: "/withdraw.png",

      title: "Rút",
    },
    {
      img: "/invite.png ",

      title: "Mời",
    },
    {
      img: "/team_report.png",

      title: "Báo cáo nhóm",
    },
    {
      img: "/withdraw_record.png",

      title: "Lịch sử rút tiền",
    },
    {
      img: "/recharge_record.png",

      title: "Lịch sử nạp tiền",
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
