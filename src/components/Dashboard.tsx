import { useEffect } from "react";
import React from "react";

export const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/entries")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  const data = { title: "pc", amount: 11.2, category: "electronic" };

  fetch("http://localhost:5000/entries", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return (
    <div className="flex items-center justify-center h-screen ">
      <form className="bg-yellow-300 p-4">
        <label className="mx-2">Item</label>
        <input type="text" name="item" />
        <label className="mx-2">Price</label>
        <input type="text" name="price" />
        <label className="mx-2">Date</label>
        <input type="text" name="date" />
        <button className="bg-green-200 mx-2 p-4">Add</button>
      </form>
    </div>
  );
};
