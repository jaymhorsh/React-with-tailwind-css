import React from 'react';

import { CheckIcon, XIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[850px] bg-slate-900 absolute mix-blend-overlay'></div>
      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-2xl uppercase'>Pricing</h2>
          <h3 className='text-4xl font-bold text-white py-8'>The right price for your research.</h3>
          <p className='text-2xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
        </div>

        <div className='grid md:grid-cols-3'>
        <div className='bg-white text-slate-900 m-2 py-8 px-4 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-xs'>Free</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>Free<span className='text-xl text-slate-500 flex flex-col justify-end pl-1'>7days</span></p>
            </div>
            <p className='text-xl py-2 text-slate-500'>These packages offer these range of features</p>
            <div className='text-xl'>
            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />    Free User Registration</p>
                <p className='flex py-2'><XIcon className='w-8 mr-5 text-red-600'  />Unlimited Storage.</p>
                <p className='flex py-2'><XIcon className='w-8 mr-5 text-red-600' />Advanced Collaboration Tools</p>
                <p className='flex py-2'><XIcon className='w-8 mr-5 text-red-600'/>Advanced Analytics</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Content Delivery Network (CDN)</p>
                <p className='flex py-2'><XIcon className='w-8 mr-5 text-red-600' />24/7 Customer Support</p>
                <button className='w-full py-2 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-2 py-8 px-4 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-xs'>Standard</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-xl py-2 text-slate-500'>These packages offer these range of features</p>
            <div className='text-xl'>
            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />    Free User Registration</p>
                <p className='flex py-2'><XIcon className='w-8 mr-5 text-red-600' />Unlimited Storage.</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Advanced Collaboration Tools</p>
                <p className='flex py-2'><XIcon className='w-8 mr-5 text-red-600'  />Advanced Analytics</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Content Delivery Network (CDN)</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />24/7 Customer Support</p>
                <button className='w-full py-2 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-2 py-8 px-4 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-xs'>Premium</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>$100<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-xl py-2 text-slate-500'>These packages offer these range of features</p>
            <div className='text-xl'>
            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />    Free User Registration</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Unlimited Storage.</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Advanced Collaboration Tools</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Advanced Analytics</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Content Delivery Network (CDN)</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />24/7 Customer Support</p>
                <button className='w-full py-2 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
so