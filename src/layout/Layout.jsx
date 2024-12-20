import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-14 mb-20 bg-gray-100">{children}</main>
      <NavBar />
    </div>
  );
};

export default Layout;
