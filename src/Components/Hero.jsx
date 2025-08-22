import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side */}
      <div className="text-left max-w-xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
          Your food <br />
          <span className="text-[#00a205]">delivered</span> <br /> within minutes.
        </h1>

        {/* Input and button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full sm:w-auto flex-grow shadow-sm">
            <FiMapPin className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Enter delivery address"
              className="bg-transparent flex-1 outline-none text-black placeholder-gray-400"
            />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition w-full sm:w-auto whitespace-nowrap">
            Find restaurants
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero-side.svg`}
          alt="Food Delivery"
          className="w-[260px] sm:w-[320px] md:w-[400px] rounded-2xl shadow-lg"
        />
        {/* Store Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            <FaApple size={22} />
            App Store
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            <FaGooglePlay size={22} />
            Play Store
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
