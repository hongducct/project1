import React from "react";
import Home from "./page/home/Home";
import { Route ,Routes} from "react-router-dom";
import Order from "./page/order/Order";
import Contact from "./page/contact/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
