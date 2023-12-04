"use client";
import React, { Component } from "react";
import Image from "next/image";
import what_i_do_1 from "./public/frontend.jpg";
import Footer from "@/app/components/Footer";
import { Progress } from "@/components/ui/progress";
import { BookOpenCheck, GraduationCap, ThumbsUp, UserCircleIcon, Wrench, } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="container lg:absolute lg:top-[117px] lg:right-0 mb-3 mr-0 lg:mr-5  mt-5 lg:mt-0 float-right min-h-max scroll-auto rounded-xl border-2 border-primary bg-white px-0 pt-10 text-black shadow-xl shadow-green-800 dark:bg-gray-950 dark:text-white dark:shadow-green-300 md:w-full lg:w-[63%]">
        <div className="grid columns-1 gap-y-5 px-2 sm:px-10">

          {/* about me  */}
          <div className="grid">
            <div className="mb-5 flex items-center gap-2">
              <h1 className=" mb-0 flex gap-3 items-center justify-center text-4xl font-bold after:ms-5 ">
                <UserCircleIcon className="text-primary" size={35} />About Me
              </h1>
              <div className=" h-1 w-1/4 rounded-full bg-gradient-to-r from-green-900 to-green-500 "></div>
            </div>
            <p className="text-lg font-semibold leading-7 text-slate-600 dark:text-slate-400">
              My name is <b>Suthar Uttesh</b>. I am doing job to make website. I  make front end of website using nextjs ,tailwind ,bootstrap and other tools.and also learn to cover backend.
            </p>
          </div>

          {/* What i do  */}
          <div className="grid">

            <div className="mb-5 flex items-center gap-2">
              <h1 className=" mb-0 items-center flex gap-3 text-4xl font-bold after:ms-5 ">
                <Wrench size={35} className="text-yellow-400" />What I Do !
              </h1>
              <div className=" h-1 w-1/4 rounded-full bg-gradient-to-r from-green-900 to-green-500 "></div>
            </div>

            <div className="grid  border-2 border-green-500 rounded-xl">
              <div className=" flex flex-col sm:flex-row text-center items-center justify-center gap-3 rounded-xl border-2 border-primary bg-gray-200 p-5 dark:border-slate-800 dark:bg-gray-800">
                <div className="flex justify-center p-3">
                  <Image
                    src={what_i_do_1}
                    alt="what i do img"
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold ">
                    Front end development
                  </h1>
                  <p className="text-lg font-semibold leading-7 text-slate-800 dark:text-slate-400">
                    I make website using nextjs ,tailwind ,bootstrap and other tools to make a website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* eductaion  */}
          <div className="grid" >
            {/* education heading */}
            <div className="grid">
              <div className="mb-5 flex items-center gap-2">
                <div className="flex gap-3 items-center text-4xl font-bold after:ms-5">
                  <GraduationCap size={35} className="text-blue-500" />
                  <h1 className=" mb-0" >Education</h1>
                </div>
                <div className=" h-1 w-1/4 rounded-full bg-gradient-to-r from-green-900 to-green-500 "></div>
              </div>
            </div>

            <div className="grid grid-rows-1 grid-cols-2 gap-5 h-max">

              <div className="grid h-max gap-y-3 rounded-xl border-2 border-primary px-5 py-5 transition duration-100 ease-in-out hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:border-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  2020
                </p>
                <span className="text-xl font-semibold">
                  12<sup>th</sup> Science with (PCM)
                </span>
                <Link href='https://narayanvidhyalay.in/index.html' >
                  <b>Shree Narayan Vidhyalay</b><br />
                  Dabhoi - Waghodia Ring Rd
                  Goverdhan Twp, Kendranagar,
                  Vadodara, Gujarat 390025</Link>
              </div>

              <Link href="https://www.bitbaroda.com/" className=" grid gap-y-3 rounded-xl border-2 border-primary px-5 py-5 transition duration-100 ease-in-out hover:bg-gradient-to-b hover:from-green-900 hover:to-green-500 hover:text-white dark:border-slate-800 ">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Jan 2023
                </p>
                <span className="text-xl font-semibold">
                  Web Developer Master Program
                </span>
                <p>Bit Baroda, Vadodara</p>
              </Link>

            </div>
          </div>

          {/* Skills */}
          <div className="grid gap-3 ">
            {/* skills heading */}
            <div className="grid">
              <div className="mb-5 flex items-center gap-2">
                <div className="flex gap-3 items-center text-4xl font-bold after:ms-5">
                  <h1 className=" mb-0 flex gap-3 items-center" ><ThumbsUp className="text-purple-500" size={35} />Skills</h1>
                </div>
                <div className=" h-1 w-1/4 rounded-full bg-gradient-to-r from-green-900 to-green-500 "></div>
              </div>
            </div>

            <div className="flex justify-between text-xl font-semibold text-slate-800 dark:text-slate-400">
              <h1>HTML</h1>
              <span>80%</span>
            </div>
            <Progress value={80} />

            <div className="flex justify-between text-xl font-semibold text-slate-800 dark:text-slate-400">
              <h1>Bootstrap || Tailwindcss</h1>
              <span>70%</span>
            </div>
            <Progress value={70} />

            <div className="flex justify-between text-xl font-semibold text-slate-800 dark:text-slate-400">
              <h1>Next js</h1>
              <span>60%</span>
            </div>
            <Progress value={60} />

            <div className="flex justify-between text-xl font-semibold text-slate-800 dark:text-slate-400">
              <h1>Git & Github</h1>
              <span>80%</span>
            </div>
            <Progress value={80} />

            <div className="flex justify-between text-xl font-semibold text-slate-800 dark:text-slate-400">
              <h1>Mongodb</h1>
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>

          {/* Knowledges */}
          <div className="grid gap-3">
            {/* skills heading */}
            <div className="grid">
              <div className="mb-5 flex items-center gap-2">
                <div className="flex gap-3 items-center text-4xl font-bold after:ms-5">
                  <h1 className=" mb-0 flex gap-3 items-center" ><BookOpenCheck className="text-orange-400" size={35} />Knowledges</h1>
                </div>
                <div className=" h-1 w-1/4 rounded-full bg-gradient-to-r from-green-900 to-green-500 "></div>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-3">
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400 ">
                React js
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                Next js
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                Mongodb
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                Tailwindcss
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                vs code
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                git & github
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                Html
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                Front end
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                prisma
              </div>
              <div className="w-max rounded-lg bg-slate-200 p-2 text-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                bootstrap
              </div>
            </div>
          </div>

        </div>

        <Footer />

      </section>
    </>
  );
};

export default page;