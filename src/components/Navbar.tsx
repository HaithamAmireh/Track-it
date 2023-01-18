import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center md:justify-end bg-green-300 text-xl">
      <ul className="flex flex-row">
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
