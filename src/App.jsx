import React from "react";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router-dom";
import Order from "./page/order/Order";
import Contact from "./page/contact/Contact";
import Acount from "./page/account/Acount";
import Rot_order from "./page/rot_order/Rot_order";
import DetailAcc from "./page/account/DetailAcc";
import Wallet from "./page/account/Wallet";
import Invite from "./page/account/Invite";
import Recharge from "./page/controll/Recharge";
import Withdraw from "./page/controll/Withdraw";
import RechargeRecord from "./page/controll/RechargeRecord";
import WithdrawRecord from "./page/controll/WithdrawRecord";
import ChagePwd from "./page/controll/ChagePwd";
import ChagePaymentPwd from "./page/controll/ChagePaymentPwd";
import TeamReport from "./page/controll/TeamReport";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rot_order" element={<Rot_order />} />

        <Route path="/account" element={<Acount />} />
        <Route path="/account/info" element={<DetailAcc />} />
        <Route path="/account/wallet" element={<Wallet />} />
        <Route path="/account/invite" element={<Invite />} />

        <Route path="/ctrl/recharge" element={<Recharge />} />
        <Route path="/ctrl/withdraw" element={<Withdraw />} />
        <Route path="/ctrl/recharge_record" element={<RechargeRecord />} />
        <Route path="/ctrl/recharge_record" element={<RechargeRecord />} />
        <Route path="/ctrl/withdraw_record" element={<WithdrawRecord />} />
        <Route path="/ctrl/changepwd" element={<ChagePwd />} />
        <Route path="/ctrl/changepaymentpwd" element={<ChagePaymentPwd />} />
        <Route path="/ctrl/teamreport" element={<TeamReport />} />

      </Routes>
    </div>
  );
}

export default App;
