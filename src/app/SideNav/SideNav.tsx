"use client";

import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineMail } from "react-icons/ai";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const SideNav = () => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const options = [
    { name: "Home", icon: <AiOutlineHome className="h-6 w-6 md:h-9 md:w-9" />, id: 1 },
    { name: "Analytics", icon: <GrAnalytics className="h-6 w-6 md:h-9 md:w-9" />, id: 2 },
    { name: "Trends", icon: <FaMoneyBillTrendUp className="h-6 w-6 md:h-9 md:w-9" />, id: 3 },
    { name: "Forms", icon: <SiGoogleforms className="h-6 w-6 md:h-9 md:w-9" />, id: 4 },
    { name: "Settings", icon: <AiOutlineSetting className="h-6 w-6 md:h-9 md:w-9" />, id: 5 },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleOnMouseOver = (selectedOption: any) => {
    setHoveredOption(selectedOption);
  };

  const handleOnMouseOut = () => {
    setHoveredOption(null);
  };

  return (
    <>
      <HamburgerMenu options={options} drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <div className="hidden md:flex flex-col h-screen w-20 bg-white text-black">
        <div className="hidden md:flex items-center justify-center h-20 cursor-pointer">
          <FaReact className="h-10 w-10" />
        </div>
        <div className="mt-10 hidden md:block">
          {options.map((option: any) => (
            <div
              key={option.id}
              className="flex items-center justify-center relative h-20 cursor-pointer"
            >
              <div
                onMouseEnter={() => handleOnMouseOver(option.name)}
                onMouseLeave={handleOnMouseOut}
              >
                <Link href={`${option.name === "Forms" ? "/forms" : "/about"}`}>{option.icon}</Link>
              </div>
              {hoveredOption === option.name && (
                <span className="absolute left-[88px] w-fit px-3 py-2.5 bg-gray-600 text-white rounded-lg text-sm">
                  {option.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideNav;
