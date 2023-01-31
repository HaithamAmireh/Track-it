import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center md:justify-end bg-blue-800 text-xl p-2 opacity-90 border-2 border-black rounded-xl m-2">
      <ul className="flex flex-row text-yellow-50 font-bold">
        <li className="p-2 mx-1 md:mx-2hover:text-green-50 hover:animate-pulse duration-75">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 mx-1 md:mx-2hover:text-green-50 hover:animate-pulse duration-75">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
