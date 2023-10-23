import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className=" max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="test-5xl font-bold">Trusted by Developers across the Globe</h2>
          <p className="text-3xl py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime magni officiis laboriosam sed eaque earum quo, vitae .</p>
        </div>
        <div className="grid md:grid-cols-3 gap-2 mt-4 px-2 text-center">
          <div className="border py-12 rounded-xl shadow-md">
            <p className="text-6xl font-bold text-indigo-600 ">100%</p>
            <p className="mt-2 text-gray-400">Completion</p>
          </div>
          <div className="border py-12 rounded-xl shadow-md">
            <p className="text-6xl font-bold text-indigo-600 ">100%</p>
            <p className="mt-2 text-gray-400">Delivery</p>
          </div>
          <div className="border py-12 rounded-xl shadow-md">
            <p className="text-6xl font-bold text-indigo-600 ">100%</p>
            <p className="mt-2 text-gray-400">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
