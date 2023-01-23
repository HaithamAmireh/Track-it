import React from "react";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <div className="flex flex-col landing_pattern">
      <h2 className="text-3xl font-bold text-yellow-50 p-4 my-5">
        Welcome, human who buys things!
      </h2>
      <div
        id="landing"
        className="text-black p-4 m-4 md:m-2 flex justify-center items-center"
      >
        <p className="text-2xl md:text-2xl font-bold">
          <b className="text-yellow-50 bg-green-600 p-1 rounded border-2 border-black">Track-it</b> is a
          free tool to keep track of your finances, you do the purchasing and we
          will keep track of the{" "}
          <b className="text-yellow-50">What, What for and How much.</b>
        </p>
      </div>
      <Link
        to="/signup"
        className="bg-yellow-50 p-2 mx-8 mt-6 text-xl font-bold text-center rounded-xl hover:shadow-md hover:shadow-green-600 hover:bg-gray-500 hover:text-yellow-50 hover:duration-700 md:w-28 md:self-right"
      >
        Sign Up
      </Link>
    </div>
  );
};
