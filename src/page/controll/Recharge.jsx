import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubLayout from "@/layout/SubLayout";
import React, { useState } from "react";

const Recharge = () => {
  const recharge = [
    10, 30, 50, 100, 300, 500, 1000, 2000, 3000, 5000, 10000, 50000,
  ];
  
  const [amount, setAmount] = useState('');

  const handleButtonClick = (value) => {
    setAmount(value);
  };

  return (
    <SubLayout title="NẠP">
      <div className="mx-5 mt-20">
        <div className="bg-blue-500 text-white p-3 rounded-xl flex flex-col gap-5 ">
          <p>Số dư của tôi</p>
          <h2 className="text-xl font-semibold text-center">$ 520.80</h2>
          <div className="grid grid-cols-2 place-items-center">
            <div>
              <p>Đang nạp tiền</p>
              <p className="font-semibold text-lg">$ 520.80</p>
            </div>
            <div>
              <p>Nạp tiền tích lũy</p>
              <p className="font-semibold text-lg">$ 0</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Label htmlFor="price">Số tiền</Label>
          <Input 
            type="number" 
            id="price" 
            placeholder="Số tiền" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {recharge.map((item) => (
            <Button 
              key={item} 
              className="bg-blue-500" 
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </Button>
          ))}
          <Button className="bg-blue-500 col-span-4" >Nạp</Button>
        </div>
        <div className="text-sm text-gray-500 shadow p-5 bg-white mt-5 rounded-xl">
          <p>
            1. Số tiền thanh toán phải bằng số tiền đơn hàng, nếu không sẽ không
            tự động ghi vào tài khoản
          </p>
          <p>
            2. Nếu không nhận được nạp tiền, vui lòng liên hệ với dịch vụ hỗ trợ
            trực tuyến của nền tảng
          </p>
        </div>
      </div>
    </SubLayout>
  );
};

export default Recharge;
