import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center md:justify-end bg-blue-800 text-xl p-2 opacity-75 border-4 border-black rounded-xl m-2">
      <ul className="flex flex-row text-yellow-50 font-bold">
        <li className="p-2 mx-4 hover:text-green-50 hover:animate-pulse duration-75">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 mx-4 hover:text-green-50 hover:animate-pulse duration-75">
          <Link to="/about">About</Link>
        </li>
        <li className="p-2 mx-4 hover:text-green-50 hover:animate-pulse duration-75">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="p-2 mx-4 hover:text-green-50 hover:animate-pulse duration-75">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
