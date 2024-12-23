import SubLayout from "@/layout/SubLayout";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TeamReport = () => {
  return (
    <SubLayout title={"Báo cáo nhóm"}>
      <Tabs defaultValue="all" className="px-32">
        <TabsList className="w-full flex gap-10 mx-auto">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="today">Hôm nay</TabsTrigger>
          <TabsTrigger value="yesterday">Hôm qua</TabsTrigger>
          <TabsTrigger value="week">Tuần</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between">
              <h2 className="font-semibold">Mọi dữ liệu</h2>
              <p className="text-blue-600">0</p>
            </div>
            <div className="flex justify-between border-t mt-5 pt-5">
              <div className="">
                <p>2</p>
                <p className="text-sm text-gray-500">Số nhóm</p>
              </div>
              <div>
                <p className="text-end">0</p>
                <p className="text-sm text-gray-500">Hội đồng trật tự (USDT)</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </SubLayout>
  );
};

export default TeamReport;
