import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleMenu = () => setNav(!nav);

  return (
    <div className="w-screen h-[60px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mr-9 sm:text-4xl text-indigo-600">Cloud@t</h1>
          <ul className="md:flex hidden text-xl">
            <li className="pr-5">Home</li>
            <li className="pr-5">About </li>
            <li className="pr-5">Support</li>
            <li className="pr-5">Product</li>
            <li className="pr-5">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className=" border-none bg-transparent text-black mr-4">
            Sign-in
          </button>
          <button className="px-5 py-2.5">Sign-out</button>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {!nav ? <MenuIcon className="w-5"  /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute w-full px-8 bg-zinc-200 " }>
        <li className=" border-b-2 border-zinc-300 w-full">Home</li>
        <li className=" border-b-2 border-zinc-300 w-full">About </li>
        <li className=" border-b-2 border-zinc-300 w-full">Support</li>
        <li className=" border-b-2 border-zinc-300 w-full">Product</li>
        <li className=" border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4 ">
          <button className="bg-transparent text-black mb-4 px-8 py-2.5">
            Sign In
          </button>
          <button className="px-8 py-2.5">Sign Out</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
