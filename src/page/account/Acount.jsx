import Layout from "@/layout/Layout";
import React from "react";
import { Link } from "react-router-dom";
import { IoGiftOutline } from "react-icons/io5";
const Acount = () => {
  const account = [
    {
      title: "Rút",
      url: "/ctrl/withdraw",
      icon: "/withdraw.png",
    },
    {
      title: "Lịch sử nạp tiền",
      url: "/ctrl/recharge_record",
      icon: "/recharge_record.png",
    },
    {
      title: "Lịch sử rút tiền",
      url: "/ctrl/withdraw_record",
      icon: "/withdraw_record.png",
    },
    {
      title: "Thông tin của tôi",
      icon: "/account_detail.png",
      url: "/account/info",
    },
    {
      title: "Ví của tôi",
      icon: "/bind_card.png",
      url: "/account/wallet",
    },
    {
      title: "Đổi mật khẩu",
      url: "/ctrl/changepwd",
      icon: "/change_pwd.png",
    },
    {
      title: "Thay đổi mật khẩu thanh toán",
      url: "/ctrl/changepaymentpwd",
      icon: "/chanhe_pay_pwd.png",
    },
    {
      title: "Chọn ngôn ngữ",
      icon: "/language.png",
    },
    {
      title: "Thoát",
      icon: "/exit.png",
    },
  ];
  return (
    <Layout>
      <div className="lg:mx-52 mx-5">
        <div className="bg-gradient-to-r shadow-xl from-purple-500 to-pink-500 lg:px-20 px-5 py-5 rounded-2xl">
          <div className="flex justify-between">
            <img src={"/invite.png"} className="size-14 rounded-full" alt="" />
            <div className="text-white flex flex-col gap-2">
              <h5 className="font-bold">
                cbmy{" "}
                <span className="ml-2 font-normal text-gray-300">VIP 1</span>
              </h5>
              <div className="text-gray-300 text-sm flex gap-4 items-center">
                <p>
                  Mã mở rộng <b>FYRS2Q</b>
                </p>
                <Link to="/account/invite">
                  <IoGiftOutline />
                </Link>
              </div>
              <div className="text-gray-300 text-sm flex gap-4">
                <p>Điểm tín dụng</p>
                <b>100</b>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="">
              <h3 className="text-4xl text-yellow-400"> $ 522.48</h3>
              <p className="text-yellow-500">Số dư của tôi</p>
            </div>
            <div>
              <Link>
                <img src={"/recharge_record.png"} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-2xl  px-5 py-5 shadow-xl bg-white">
          <div className="flex flex-col border-r items-center">
            <p className="text-green-500">$ 22.42</p>
            <p>Lợi ích của nhiệm vụ</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-red-500">$ 22.42</p>
            <p>Giá trị băng</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 bg-white rounded-2xl p-5 mt-10 shadow-xl place-items-stretch">
          {account.map((item) => (
            <Link to={item.url} className="flex hover:underline text-sm flex-col hover:bg-gray-100 items-center">
              <img src={item.icon} alt="" />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Acount;
