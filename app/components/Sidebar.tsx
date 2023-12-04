import React from "react";
import profile from "../public/uttesh-gradient-bg.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <section className="mt-40 md:container sm:top-44 sm:mt-44 md:mt-[25%]  md:w-full lg:mt-40 ">
      <nav className=" container relative flex h-max w-full flex-col items-center rounded-3xl border-2 border-primary bg-white text-black shadow-xl  shadow-green-800 dark:bg-slate-950 dark:text-white dark:shadow-green-300 lg:relative lg:float-left lg:w-2/6">
        <Image
          src={profile}
          alt="profile"
          width={230}
          className="absolute left-[50%] -mt-[140px] h-[240px] w-[240px] mx-auto -translate-x-[50%] transform rounded-[20px] border-2 border-primary shadow-xl shadow-green-800 drop-shadow-xl transition delay-75 duration-75 ease-in-out hover:scale-110 dark:shadow-green-300 sm:absolute sm:left-[50%] sm:mx-auto sm:-mt-[140px] sm:h-[240px] sm:w-[240px] sm:-translate-x-[50%] "
          // className="rounded-3xl relative z-10"
        />

        <div className="flex flex-col items-center pt-32 ">
          <h1 className="text-2xl font-bold">
            Suthar{" "}
            <span className="hover:rounded-lg hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:p-1 hover:text-white dark:hover:text-white">
              Uttesh
            </span>
          </h1>
          <h1 className="my-3 rounded-md bg-gray-200 px-5 py-2 text-[15px] font-semibold text-slate-600 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white">
            Web Developer
          </h1>

          {/* social icons */}
          <div className="flex gap-2">
            <Link
              className="rounded-xl bg-gray-200 p-3 text-orange-500 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-slate-800 "
              href="https://www.instagram.com/developeruttesh/"
            >
              <FaInstagram />
            </Link>
            <Link
              className="rounded-xl bg-gray-200 p-3 text-green-500 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-slate-800 "
              href="https://www.facebook.com/people/Developer-Uttesh/100092568759262/"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="rounded-xl bg-gray-200 p-3 text-blue-500 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-slate-800 "
              href="https://twitter.com/DeveloperUttesh"
            >
              <IoLogoTwitter />
            </Link>
            <Link
              className="rounded-xl bg-gray-200 p-3 text-red-500 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-slate-800 "
              href="https://www.youtube.com/channel/UCeWZ4rHSwYqujPEM2736XEg"
            >
              <FaYoutube />
            </Link>
            <Link
              className="rounded-xl bg-gray-200 p-3 text-violet-500 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-slate-800 "
              href="https://github.com/DevUttesh"
            >
              <FaGithub />
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 w-11/12 rounded-xl bg-gray-200 p-5 dark:bg-slate-800 ">
          <div className="mb-2 flex items-center border-b border-b-slate-300 pb-2 dark:border-b-slate-600 ">
            <div className="me-3 flex h-5 w-5  items-center justify-center rounded-lg bg-white p-5 text-xl text-red-500 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-black  ">
              <Link href={`tel:+91 8128134195`}>
                <IoIosPhonePortrait />
              </Link>
            </div>
            <div>
              <small className="text-slate-600 dark:text-slate-400">
                Phone
              </small>
              <h1 className="break-all lg:text-sm xl:text-lg">
                +91 8128134195
              </h1>
            </div>
          </div>
          <div className="mb-2 flex items-center border-b border-b-slate-300 pb-2 dark:border-b-slate-600 ">
            <div className=" me-3 flex h-5 w-5 items-center justify-center rounded-lg bg-white p-5 text-xl text-blue-600 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-black ">
              <Link href={`tel:+91 8128134195`}>
                <FiMapPin />
              </Link>
            </div>
            <div>
              <small className="text-slate-600 dark:text-slate-400">
                Location
              </small>
              <h1 className=" break-all lg:text-sm xl:text-lg">
                Vadodara,Gujarat,India
              </h1>
            </div>
          </div>
          <div className="mb-2 flex items-center border-b border-b-slate-300 pb-2 dark:border-b-slate-600 lg:break-words ">
            <div className=" me-3 flex h-5 w-5 items-center justify-center rounded-lg bg-white p-5 text-xl text-yellow-500 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-black ">
              <Link href={`tel:+91 8128134195`}>
                <MdOutlineMailOutline />
              </Link>
            </div>
            <div>
              <small className="text-slate-600 dark:text-slate-400">
                Email
              </small>
              <h1 className=" break-all lg:text-sm xl:text-lg ">
                developeruttesh@gmail.com
              </h1>
            </div>
          </div>
          <div className="mb-2 flex items-center pb-2 ">
            <div className="me-3 flex h-5 w-5 items-center justify-center rounded-lg bg-white p-5 text-xl text-green-700 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:bg-black">
              <Link href={`tel:+91 8128134195`}>
                <LuCalendarDays />
              </Link>
            </div>
            <div>
              <small className="text-slate-600 dark:text-slate-400  ">
                Birthdate
              </small>
              <h1 className="break-all lg:text-sm xl:text-lg">31 Aug 2002</h1>
            </div>
          </div>
        </div>

      </nav>
    </section>
  );
};

export default Sidebar;
