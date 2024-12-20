import Layout from "@/layout/Layout";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItem from "./OrderItem";

const Order = () => {
  const taps = ["Còn lại", "Chưa giải quyết", "Hoàn thành", "Đã hủy"];
  return (
    <Layout>
      <Tabs defaultValue="Còn lại" className="w-full lg:px-52 px-10 bg-gray-100">
        <TabsList className="w-full flex lg:gap-20 gap-10 mx-auto">
          {taps.map((tap) => (
            <TabsTrigger value={tap}>{tap}</TabsTrigger>
          ))}
        </TabsList>
        {taps.map((tap) => (
          <TabsContent value={tap} className="flex flex-col gap-3">
            <OrderItem />
            <OrderItem />
          </TabsContent>
        ))}
      </Tabs>
    </Layout>
  );
};

export default Order;
