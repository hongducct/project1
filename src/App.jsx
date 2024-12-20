import React from "react";
import Home from "./page/home/Home";
import { Route ,Routes} from "react-router-dom";
import Order from "./page/order/Order";
import Contact from "./page/contact/Contact";
import Acount from "./page/account/Acount";
import Rot_order from "./page/rot_order/Rot_order";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Acount />} />
        <Route path="/rot_order" element={<Rot_order />} />
      </Routes>
    </div>
  );
}

export default App;
