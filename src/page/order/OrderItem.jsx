import React from "react";
import { Badge } from "@/components/ui/badge";

const OrderItem = () => {
  return (
    <div className="bg-white rounded-md p-6 flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-sm">2024-12-18 18:17:14</p>
        <Badge className="bg-yellow-400 text-black font-light">거래 완료</Badge>
      </div>
      <div className="flex gap-4">
        <img src={"/public/recharge.png"} className="size-14" alt="" />
        <p className="text-xs font-medium text-gray-500">
          Kenneth Cole REACTION Chelsea Women's V-Quilted 15" Laptop and Tablet
          Stylish Travel Backpack, Black//White, Chelsea Women's Backpack 15"
          Laptop Bag for Work, College, Nursing, Travel Backpack Purse Backpack
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <p>총 주문 수:</p>
        <p className=" place-self-end">$ 1.68</p>
        <p>커미션:</p>
        <p className=" place-self-end">$ 1.68</p>
        <p>차액</p>
        <p className=" place-self-end">$ 1.68</p>
      </div>
    </div>
  );
};

export default OrderItem;
