import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
const SubHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed shadow items-center top-0 bg-gradient-to-r from-purple-500 to-pink-500 w-full h-14 flex justify-between">
      <div
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center ml-5"
      >
        <IoIosArrowBack className="size-6 text-white" />
      </div>
      <h1 className="text-white text-lG">{title}</h1>
      <Link to={"/contact"}>
        <img src={"/kefu.png"} alt="" />
      </Link>
    </div>
  );
};

export default SubHeader;
