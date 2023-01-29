import { useEffect, useState } from "react";
import React from "react";

export const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  type itemsProps = {
    id: number;
    amount: number;
    title: string;
    category: string;
  };
  const [items, setItems] = useState<itemsProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:5000/entries", {
        method: "GET",
      });
      const jsonData = await data.json();
      setItems(jsonData);
    };

    api();
  }, []);
  return (
    <div className="flex justify-center h-screen font-IBM">
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <form className="bg-green-400 p-4 flex flex-col">
          <label className="my-2">Item</label>
          <input type="text" name="item" className="rounded-xl" />
          <label className="my-2">Price</label>
          <input type="text" name="price" className="rounded-xl" />
          <label className="my-2">Date</label>
          <input type="text" name="date" className="rounded-xl" />
          <button
            className="bg-green-200 my-2 p-4 rounded-full hover:bg-green-800"
            type="button"
          >
            Add
          </button>

          <div id="items" className="flex bg-gray-200 w-34 mx-2 p-4">
            <ul>
              {items.map((value) => (
                <li key={value.id}>
                  <p>
                    {value.title},
                    <i className="font-bold"> {value.amount} JOD</i>,{" "}
                    {value.category}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};
