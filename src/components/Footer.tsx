import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto p-2 bg-green-600 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
      <ul className="flex flex-wrap items-center mt-3 sm:mt-0 text-black text-base">
        <li className="p-2 mx-4 hover:text-green-50 hover:animate-pulse duration-75">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};
