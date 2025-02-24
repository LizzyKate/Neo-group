"use client";

import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import Button from "../ui/Button";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";

const Navigation: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } py-4 px-6 fixed w-full top-0 z-50 shadow-md`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Image src={Logo} width={120} height={120} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <Button variant="primary" className="hidden md:block">
            Login
          </Button>
          <Button variant="gradient">Register Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
