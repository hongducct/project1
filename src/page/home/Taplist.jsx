import React from "react";
import { Link } from "react-router-dom";

const Taplist = () => {
  const list = [
    {
      img: "/recharge.png",
      title: "Nạp",
      url: "/ctrl/recharge",
    },
    {
      img: "/withdraw.png",
      url: "/ctrl/withdraw",
      title: "Rút",
    },
    {
      img: "/invite.png ",
      url: "/account/invite",
      title: "Mời",
    },
    {
      img: "/team_report.png",
      url: "/ctrl/teamreport",
      title: "Báo cáo nhóm",
    },
    {
      img: "/withdraw_record.png",
      url: "/ctrl/withdraw_record",
      title: "Lịch sử rút tiền",
    },
    {
      img: "/recharge_record.png",
      url: "/ctrl/recharge_record",
      title: "Lịch sử nạp tiền",
    },
  ];
  return (
    <div className="bg-white rounded-[40px] mx-auto">
      <ul className="grid grid-cols-3 p-10 gap-5">
        {list.map((item) => (
          <Link to={item.url} className="flex flex-col items-center hover:underline ">
            <img src={item.img} alt="" />
            <p className="text-sm ">{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Taplist;
