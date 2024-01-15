"use client";

import React from "react";
import planifyLogo from "../images/planify.png";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/5 rounded-br-2xl">
        <Image
          src={planifyLogo}
          alt="Planify logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
            action=""
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar name="Cal" round color="#10666d" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center p-5 md:py-5">
        <p className="flex items-center text-sm font-light p-5 shadow-xl rounded-xl w-ft bg-white italic max-w-3xl text-[#10666d]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#10666d] mr-1" />
          GPT is summarizing your day...
        </p>
      </div>
    </header>
  );
}

export default Header;
