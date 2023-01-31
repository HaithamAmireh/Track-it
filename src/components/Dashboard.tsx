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
  const [title, setTitle] = useState<itemsProps["title"]>("");
  const [amount, setAmount] = useState<itemsProps["amount"]>(0);
  const [category, setCategory] = useState<itemsProps["category"]>("");
  const handleTitle = (event) => {
    // 👇 Get input value from "event"
    setTitle(event.target.value);
  };
  const handleAmount = (event) => {
    // 👇 Get input value from "event"
    setAmount(event.target.value);
  };
  const handleCategory = (event) => {
    // 👇 Get input value from "event"
    setCategory(event.target.value);
  };
  const dataToPost = {
    amount: amount,
    title: title,
    category: category,
  };
  console.log(dataToPost);
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

  const createNewEntry = () => {
    const requiredOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToPost),
    };
    fetch("http://localhost:5000/entries", requiredOptions)
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log(data);
      });
  };

  const deleteEntry = (event, key) => {
    console.log("key index: ", key);

    const requiredOptions = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    };
    fetch(`http://localhost:5000/entry/${key}`, requiredOptions)
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log(data);
      });
  };
  return (
    <div className="flex justify-center h-screen font-IBM">
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <form
          className="bg-green-400 p-4 flex flex-col rounded-xl"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="my-2">Item</label>
          <input
            type="text"
            name="item"
            className="rounded-xl p-2"
            required
            onChange={handleTitle}
          />
          <label className="my-2">Price</label>
          <input
            type="text"
            name="price"
            className="rounded-xl p-2"
            required
            onChange={handleAmount}
          />
          <label className="my-2">Category</label>
          <input
            type="text"
            name="category"
            className="rounded-xl p-2"
            required
            onChange={handleCategory}
          />
          <input
            type="submit"
            className="bg-green-200 my-2 p-4 rounded-full hover:bg-green-800 duration-500 hover:text-white"
            onClick={createNewEntry}
            name="submit"
            value="Add"
          ></input>
        </form>
        <div
          id="items"
          className="flex bg-gray-200 w-34 mx-2 my-2 p-4 rounded-xl"
        >
          <ul>
            {items.map((value) => (
              <li
                key={value.id}
                className="hover:bg-red-100 cursor-pointer"
                onClick={(event) => deleteEntry(event, value.id)}
              >
                <p>
                  {value.title},<i className="font-bold"> {value.amount} JOD</i>
                  , {value.category}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
