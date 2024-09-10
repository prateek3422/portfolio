"use client";

import { AlignLeft, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="h-[10rem] w-[2px] bg-Secondary fixed top-0 left-10 hidden md:block">
        {" "}
      </div>
      <div className="hidden md:block">
        <img
          src="/Github.svg"
          alt=""
          className=" fixed  left-[1.7rem] top-[10rem]  w-7 aspect-square  object-fill"
        />
        <img
          src="/Discord.svg"
          alt=""
          className=" fixed  left-[1.8rem] top-[12rem]  w-6 aspect-square object-fill"
        />
        <img
          src="/Linkedin.svg"
          alt=""
          className=" fixed  left-[1.8rem] top-[14rem] w-6 aspect-square object-fill"
        />
      </div>

      <div className=" md:flex justify-between items-center w-[70%] mx-auto mt-4 hidden ">
        <div className="flex items-center justify-center gap-2">
          <img src="/Union.svg" alt="" className="w-4" />
          <h1 className="text-white text-sm">Prateek</h1>
        </div>

        <div className="nav flex gap-4 ">
          <Link
            href="/"
            className=" list-none text-sm cursor-pointer text-Secondary visited:text-white"
          >
            <span className="text-Primary">#</span>Home
          </Link>
          <Link
            href="/About"
            className="text-Secondary list-none text-sm cursor-pointer visited:text-white"
          >
            <span className="text-Primary">#</span>About
          </Link>
          <Link
            href="/Contact"
            className="text-Secondary list-none text-sm cursor-pointer visited:text-white"
          >
            <span className="text-Primary">#</span>Contact-us
          </Link>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between p-4 ">
        <div className="flex items-center justify-center gap-2">
          <img src="/Union.svg" alt="" className="w-4" />
          <h1 className="text-white text-sm">Prateek</h1>
        </div>

        <div className="relative">
          {active ? (
            <AlignLeft
              onClick={() => setActive(false)}
              className="cursor-pointer"
            />
          ) : (
            <X onClick={() => setActive(true)} className="cursor-pointer" />
          )}
        </div>

        <div className=" absolute h-full bg-Background w-full">
          <div className="nav flex gap-4 ">
            <Link
              href="/"
              className=" list-none text-sm cursor-pointer text-Secondary visited:text-white"
            >
              <span className="text-Primary">#</span>Home
            </Link>
            <Link
              href="/About"
              className="text-Secondary list-none text-sm cursor-pointer visited:text-white"
            >
              <span className="text-Primary">#</span>About
            </Link>
            <Link
              href="/Contact"
              className="text-Secondary list-none text-sm cursor-pointer visited:text-white"
            >
              <span className="text-Primary">#</span>Contact-us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
