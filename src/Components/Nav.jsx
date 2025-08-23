import React from 'react'

const Nav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 bg-white shadow">
      {/* Logo */}
      <div className="p-2 sm:p-4">
        <img
          src={`${import.meta.env.BASE_URL}images/logo-long.svg`}
          alt="Logo"
          className="h-8 sm:h-10"
        />
      </div>
      
      {/* Buttons */}
      <div className="flex gap-2 mt-3 sm:mt-0">
        <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded-full font-bold">
          Sign In
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-full font-bold">
          Sign Up
        </button>
      </div>
    </nav>
  )
}

export default Nav
