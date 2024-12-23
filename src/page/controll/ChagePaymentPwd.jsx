import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SubLayout from "@/layout/SubLayout";
import React from "react";
const ChagePaymentPwd = () => {
  return (
    <SubLayout title={"Đổi mật khẩu thanh toán"}>
      <form action="" className="flex items-center gap-4 pt-20 flex-col lg:w-1/3 h-screen px-5 mx-auto">
        <h1 className="font-semibold text-2xl">Đổi mật khẩu thanh toán</h1>
        <Input placeholder="Mật khẩu cũ" />
        <Input placeholder="Mật khẩu mới" />
        <Input placeholder="Xác nhận mật khẩu" />
        <Button>Bước kế tiếp</Button>
        <p className="text-center">
          Hãy nhớ mật khẩu. Nếu bạn quên mật khẩu, hãy liên lạc với dịch vụ
          khách hàng.
        </p>
      </form>
    </SubLayout>
  )
}

export default ChagePaymentPwd