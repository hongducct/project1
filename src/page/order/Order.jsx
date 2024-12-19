import Layout from "@/layout/Layout";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItem from "./OrderItem";

const Order = () => {
  const taps = ["잉여", "보류 중", "완료", "겨울 왕국"];
  return (
    <Layout>
      <Tabs defaultValue="잉여" className="w-screen lg:px-52 px-10 bg-gray-100">
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
