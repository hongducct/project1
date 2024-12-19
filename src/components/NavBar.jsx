import React from "react";
import { FiHome } from "react-icons/fi";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegHandPointer } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const nav = [
    {
      icon: <FiHome size={25} />,
      title: "홈페지",
      url: "/",
    },
    {
      icon: <CgShoppingBag size={25}/>,
      title: "주문 변호",
      url: "/order",
    },
    {
      icon: <FaRegHandPointer size={25}/>,
      title: "Grap",
      url: "/d",
    },
    {
      icon: <IoChatboxEllipsesOutline size={25}/>,
      title: "고객 서비스",
      url: "/contact",
    },
    {
      icon: <FaRegUser size={25}/>,
      title: "개연 중심",
      url: "/w",
    },
  ];
  return (
      <ul className="flex justify-between lg:px-32 px-7 py-3 shadow-xl fixed bottom-0 w-full bg-white">
        {nav.map((item) => {
          return (
            <NavLink className={({ isActive })=>("flex items-center justify-center flex-col size-16 rounded-full" + (isActive ? " bg-blue-500 text-white" : "") )} to={item.url}>
              <i>{item.icon}</i>
              <p className="text-[10px]">{item.title}</p>
            </NavLink>
          );
        })}
      </ul>
  );
};

export default NavBar;