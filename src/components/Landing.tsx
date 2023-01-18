import React from "react";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <div>
      <p className="text-3xl font-bold">Welcome</p>

      <Link to="/signup">Sign Up</Link>
    </div>
  );
};
