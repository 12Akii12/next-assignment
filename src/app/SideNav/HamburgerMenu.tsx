import React from "react";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

interface props {
  options: any;
  drawerOpen: boolean;
  toggleDrawer: Function;
}

const HamburgerMenu: React.FC<props> = ({ options, drawerOpen, toggleDrawer }) => {
  return (
    <div className="">
      <div className={`flex ${!drawerOpen && "py-4 px-4"} md:hidden cursor-pointer`}>
        {!drawerOpen && <FaBars className="h-10 w-10 " onClick={() => toggleDrawer()} />}
      </div>
      {drawerOpen && (
        <div className="flex flex-col h-screen w-80 bg-white text-black">
          <div className="flex items-center justify-between mx-4 h-20 cursor-pointer">
            <FaReact className="h-10 w-10" />
            <FaTimes className="h-8 w-8 " onClick={() => toggleDrawer()} />
          </div>
          <div className="mt-10 block">
            {options.map((option: any) => (
              <div
                key={option.id}
                className="flex items-center justify-start relative px-4 h-14 cursor-pointer"
              >
                <Link href={`${option.name === "Forms" ? "/forms" : "/about"}`}>
                  <div className="flex items-center justify-between w-40">
                    <span className="text-sm">{option.name}</span>
                    <span>{option.icon}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
