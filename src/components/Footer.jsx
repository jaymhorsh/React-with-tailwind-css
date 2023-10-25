import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaCopyright
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full text-gray-300 bg-slate-900 py- px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 relative">
        <div >
          <h5 className="font-bold uppercase py-2">Solutions</h5>
          <ul>
            <li className="py-2">Marketing</li>
            <li className="py-2">Analytics</li>
            <li className="py-2">Commerce</li>
            <li className="py-2">Data</li>
            <li className="py-2">Cloud</li>
          </ul>
        </div>
        <div className="">
          <h5 className="font-bold uppercase py-2">Support</h5>
          <ul>
            <li className="py-2">Pricing</li>
            <li className="py-2">Documentation</li>
            <li className="py-2">Guides</li>
            <li className="py-2">API Status</li>
          </ul>
        </div>
        <div className="">
          <h5 className="font-bold uppercase py-2">Company</h5>
          <ul>
            <li className="py-2">About</li>
            <li className="py-2">Blog</li>
            <li className="py-2">Jobs</li>
            <li className="py-2">Press</li>
            <li className="py-2">Partners</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold uppercase py-2">Legal</h5>
          <ul>
            <li className="py-2">Claims</li>
            <li className="py-2">Privacy</li>
            <li className="py-2">Terms</li>
            <li className="py-2">Policies</li>
            <li className="py-2">Conditions</li>
          </ul>
        </div>

        <div className=" col-span-2 pt-8 md:py-2">
          <p className="text-white mb-2 uppercase">
            Subcribe to our Newsletter
          </p>
          <p className="text-xl py-4">
            The latest news, article and resources, sent to your inbox weekly
          </p>

          <form action="#" method="post" className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="mb-4 p-2 text-slate-400 bg-white rounded-md outline-0 text-md w-full mr-4"
            />
            <button className="p-2 px-4 mb-4">Subcribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4 flex">2023 Jaymhorsh, &copy; All Rights Reeserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
