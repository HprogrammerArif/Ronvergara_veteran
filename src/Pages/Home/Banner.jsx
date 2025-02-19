import React from 'react';
import banner from '../../assets/banner.jpg'; // Your provided background image

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl bg-opacity-90 mt-5 flex flex-col justify-center">
          <h1 className="text-7xl lg:text-7xl font-bold text-blue-900 leading-tight">
            TURNING <br />
            <span className="py-5 block">DISABILITIES INTO</span> 
            POSSIBILITIES
          </h1>
          <p className="mt-4 text-gray-700 text-xl capitalize max-w-2xl">
            AC is a veteran-owned organization dedicated to simplifying <br /> 
            the VA process. Whether you've been denied before or never 
            applied, we're here to fight for you.
          </p>
          <button className="mt-6 bg-[#B31942] text-white w-1/3 px-10 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


