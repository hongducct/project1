import { Badge } from "@/components/ui/badge";
import SubLayout from "@/layout/SubLayout";
import React from "react";

const DetailAcc = () => {
  return (
    <SubLayout title={"CHI TIẾT TÀI KHOẢN"}>
      <div className="lg:px-52 px-5 h-screen py-5">
        <h1 className="font-semibold mb-5 px-5">CHI TIẾT TÀI KHOẢN</h1>
        <div className="bg-white">
          <div className="flex justify-between border-t p-5 items-center">
            <div>
              <p>2024-12-18 18:17:18</p>
              <Badge>Gói trả lại sau khi nhận</Badge>
            </div>
            <p className="font-semibold text-green-500">$ 1.68</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default DetailAcc;
