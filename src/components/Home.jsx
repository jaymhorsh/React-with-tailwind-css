import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
//   PaperClipIcon,
  ServerIcon,
} from "@heroicons/react/outline";
import bigImg from "../Assets/cyber-bg.png";
const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-zinc-200 ">
      <div className="grid md:grid-cols-2  max-w-[1240px] m-auto ">
        <div className="flex flex-col justify-center w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & production </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Computing
          </h1>
          <p className="text-2xl">This is our tech brand </p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started </button>
        </div>
        <div className="">
          <img src={bigImg} className="w-full" alt="horoImg" />
        </div>
        <div className=" absolute flex flex-col py-8 md:min-w-[760px]  bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p> Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className='flex py-4 px-2 items-center text-slate-500'><CloudUploadIcon className="h-6 text-indigo-600 pr-0.5"/>App Security</p>
            <p className='flex py-4 px-2 items-center text-slate-500'><DatabaseIcon className="h-6 text-indigo-600 pr-0.5"/>Dashboard Design</p>
            <p className='flex py-4 px-2 items-center text-slate-500'><ServerIcon className="h-6 text-indigo-600 pr-0.5"/>Cloud Data</p>
            <p className='flex py-4 px-2 items-center text-slate-500'><PaperAirplaneIcon className="h-6 text-indigo-600 pr-0.5"/> API</p>
            {/* <p className='flex'><PaperClipIcon/></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
