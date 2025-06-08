"use client"
import {  useState } from "react";
import { header } from "../utils/helper";

export const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="flex flex-col gap-1 absolute left-6 top-5 md:hidden cursor-pointer z-50"
        onClick={() => setShow(!show)} tabIndex={1}
      >
        <span className="block w-6 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md transform transition-all duration-300 hover:scale-110"></span>
        <span className="block w-6 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md transform transition-all duration-300 hover:scale-110"></span>
        <span className="block w-6 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md transform transition-all duration-300 hover:scale-110"></span>
      </div>

      {show && <header className="absolute md:sticky  flex-wrap top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md px-8 py-4 flex justify-center items-center gap-6 top-[47px] md:top-0 left-[30px]
    flex-col md:flex-row  rounded-md md:rounded-0
    ">

        <input className="opacity-0a absolute h-2 w-2 top-[-100px] left-[-100px] " autoFocus onBlur={() => setShow(!show)} />


        {header?.map((item, index) => (
          <span
            key={index}
            onClick={() => setShow(!show)}
            className="
          w-full md:w-fit 
          text-base font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:underline underline-offset-4 cursor-pointer relative group"
          >
            {item}

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </span>
        ))}




      </header>}


      {<header className="absolute md:sticky  flex-wrap top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md px-8 py-4 flex justify-center items-center gap-6 top-[47px] md:top-0 left-[30px]
    flex-col md:flex-row  rounded-md md:rounded-0 hidden md:flex
    ">

        {header?.map((item, index) => (
          <span
            key={index}
            onClick={() => setShow(!show)}
            className="
          w-full md:w-fit 
          text-base font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:underline underline-offset-4 cursor-pointer relative group"
          >
            {item}

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </span>
        ))}
      </header>}
    </>
  );
};
