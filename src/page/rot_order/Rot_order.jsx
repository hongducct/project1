import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import React from "react";

const Rot_order = () => {
  return (
    <Layout>
      <div className=" lg:mx-40 mx-5 py-10">
        <div className="flex justify-between">
          <div className="">
            <h3 className="text-4xl">$ 500.00</h3>
            <p className="text-gray-500">Số dư của tôi</p>
          </div>
          <img src="/recharge.png" alt="" />
        </div>
        <div className="flex justify-between my-10 lg:mx-40 mx-5">
          <img
            src="/slot1.jpg"
            className="size-24 border border-blue-900"
            alt=""
          />
          <img
            src="/slot1.jpg"
            className="size-24 border border-blue-900"
            alt=""
          />
          <img
            src="/slot1.jpg"
            className="size-24 border border-blue-900"
            alt=""
          />
        </div>
        <div className="bg-gradient-to-r lg:px-10 px-5 py-5 rounded-2xl text-white font-semibold from-violet-500 to-fuchsia-500">
          <div className="flex gap-10">
            <p className="pr-10 border-r-2">hoa hồng 0.6%</p>
            <p>11 đơn hàng</p>
          </div>
          <div className="flex justify-between lg:px-20">
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl">1</p>
              <p>Hoàn thành</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl">1</p>
              <p>Còn lại</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl">1</p>
              <p>Chưa hoàn thành</p>
            </div>
          </div>
        </div>
        <div className="bg-white lg:px-10 px-3 lg:mt-0 mt-10 py-5 rounded-2xl shadow-xl">
            <div className="flex justify-between pb-3  mb-3 border-b">
                <div className="flex flex-col items-center">
                    <p>$22.00</p>
                    <p className="text-gray-500 text-center">Nhận hoa hồng</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>$22.00</p>
                    <p className="text-gray-500 text-center">Số tiền chênh lệch</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>$22.00</p>
                    <p className="text-gray-500 text-center">Hoa hồng hôm nay</p>
                </div>
            </div>
            <Button className="bg-blue-500 w-full py-6 text-xl text-white rounded-2xl">Bắt đầu nhận hóa đơn</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Rot_order;
