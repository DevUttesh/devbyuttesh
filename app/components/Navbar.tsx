"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { ModeToggle } from "./ModeToggle";
import { MenuSquare, XSquare } from "lucide-react";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { ImBlogger2 } from "react-icons/im";
import { RiContactsBookLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { FileText } from "lucide-react";

const Navbar = () => {
 
  return (
    <nav className="container relative z-10 m-0 mx-auto mt-3 flex w-[90%] items-center justify-between rounded-full border-b-2 border-b-green-400 bg-gradient-to-b from-green-900 to-green-500 p-2  bg-blend-overlay shadow-xl shadow-green-800 dark:border-b-green-800 dark:shadow-green-300 sm:mx-auto sm:mt-0 sm:py-2">
      {/* site name  */}
      <Link href="/" className=" hidden flex-1 justify-center sm:flex ">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          DEVBY
          <span className="rounded-xl bg-gradient-to-b from-green-900 to-green-500 p-1 shadow-xl shadow-green-300 transition-colors duration-75 ease-in-out hover:bg-gradient-to-t hover:from-green-900 hover:to-green-500 dark:shadow-green-950 ">
            UTTESH
          </span>
        </h1>
      </Link>

      {/* logo  */}
      <Link className=" flex flex-1 justify-center " href="/">
        <Image
          className="h-14 w-14 rounded-full shadow-xl shadow-green-300 dark:shadow-green-950 sm:h-16 sm:w-16 "
          src={logo}
          alt="logo"
        />
      </Link>

      <div className="flex flex-1 items-center justify-center  gap-2">
        {/* mode toggler  */}
        <div className="flex items-center justify-center">
          {/* theme toggler  */}
          <ModeToggle />
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
