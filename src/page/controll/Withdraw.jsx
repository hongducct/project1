import SubLayout from '@/layout/SubLayout';
import React from 'react'
import { Link } from 'react-router-dom';

const Withdraw = () => {
    const withdraw = [
        {
          title: "Rút tiền mặt",
          icon: "/usdt.png",
        },
        {
          title: "Rút tiền về thẻ ngân hàng",
          icon: "/bind_card1.png",
        },
      ];
      return (
        <SubLayout title={"Rút tiền"}>
          <div className="lg:px-52 px-5 h-screen py-5">
            <div className="bg-white">
              {withdraw.map((item, index) => (
                <Link
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
}

export default Withdraw