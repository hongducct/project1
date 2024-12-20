import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const RockList = () => {
  return (
    <div>
      <Tabs defaultValue="소득 목록" className="mt-10">
        <TabsList className="w-2/3 flex  gap-10  mx-auto mb-10">
          <TabsTrigger className="w-1/2 p-3 font-bold" value="소득 목록">
            <img src="/recharge_list.png" alt="" /> Danh sách nạp tiền
          </TabsTrigger>
          <TabsTrigger className="w-1/2 p-3 font-bold" value="인출 목록">
            <img src="/latest_recharge.png" alt="" /> Nạp tiền gần nhất
          </TabsTrigger>
        </TabsList>
        <TabsContent value="소득 목록">
          <ScrollArea className="w-full h-80 rounded-md border">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="flex items-center gap-5 p-5">
                <img
                  src={"/recharge.png"}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <p className="font-semibold">Chúc mừng *****940699</p>
                  <p className="text-xs">Đạt được $ 947.29 nhiệm vụ</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </TabsContent>
        <TabsContent value="인출 목록">
          <ScrollArea className="w-full h-80 rounded-md border">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="flex items-center gap-5 p-5">
                <img
                  src={"/recharge.png"}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <p className="font-semibold"> *****940699</p>
                  <p className="text-xs">Nạp tiền đến $ 947.00</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RockList;
