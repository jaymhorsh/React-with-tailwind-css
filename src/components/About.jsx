import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className=" max-w-[1240px] mx-auto sm:px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Trusted by Developers across the Globe</h2>
          <p className="text-2xl py-6"> Our company provides a secure and reliable platform that our customers trust for seamless and efficient data management.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-2 mt-4 xs:px-4 text-center">
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
