import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-[10rem] w-[2px] bg-Secondary fixed top-0 left-10 ">
        {" "}
      </div>
      <div>
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

      <div className=" flex justify-between items-center w-[70%] mx-auto mt-4">
        <div className="flex items-center justify-center gap-2">
          <img src="/Union.svg" alt="" className="w-4" />
          <h1 className="text-white text-sm">Prateek</h1>
        </div>

        <div className="nav flex gap-4 ">
          <Link
            href="#home"
            className=" list-none text-sm cursor-pointer text-Secondary visited:text-white"
          >
            <span className="text-Primary">#</span>Home
          </Link>
          <Link
            href="#about"
            className="text-Secondary list-none text-sm cursor-pointer visited:text-white"
          >
            <span className="text-Primary">#</span>About
          </Link>
          <Link
            href="#contacts"
            className="text-Secondary list-none text-sm cursor-pointer visited:text-white"
          >
            <span className="text-Primary">#</span>Contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
