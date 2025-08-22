import React from 'react'
import { FiArrowRight } from 'react-icons/fi';

const Variety = () => {
  return (
    <div>
      <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-xl text-left">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            A Variety of <br /> Stores to <br /> choose from
          </h2>

          <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-9">
            Order food from the best restaurants, local favorites, and online
            vendors using the app or web.
          </p>

          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            Start Ordering <FiArrowRight size={20} />
          </button>
        </div>

        {/* Right Side */}
        <div className="md:ml-10 w-full flex justify-center">
          <img
            src="/images/foods.png"
            alt="Variety of Stores"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] rounded-2xl shadow-md"
          />
        </div>
      </section>
    </div>
  )
}

export default Variety
