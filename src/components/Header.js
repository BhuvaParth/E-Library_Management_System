import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 bg-gray-800 text-white md:px-12">
        <div className="text-xl font-bold cursor-pointer">
          <Link to="/home">E-Library</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="hover:text-gray-400">
            {" "}
            <Link to="/home">Home</Link>
          </button>
          <button className="hover:text-gray-400">
            {" "}
            <Link to="/add-book">Add Book</Link>
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white rounded-md shadow-lg md:hidden z-50">
            <button className="block px-4 py-2 hover:bg-gray-700 w-full text-left">
              <Link to="/home">Home</Link>
            </button>
            <button className="block px-4 py-2 hover:bg-gray-700 w-full text-left">
              <Link to="/add-book">Add Book</Link>
            </button>
          </div>
        )}

        <div className="flex gap-2 items-center">
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
          >
            Log Out
          </button>
        </div>
      </header>
    </>
  );
}
