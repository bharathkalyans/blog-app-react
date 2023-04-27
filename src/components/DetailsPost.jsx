import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "./Home";

const DetailsPost = () => {
  const data = useContext(UserContext);
  const location = useLocation();
  const [id, setId] = useState("")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const { id } = location.state;
    const filterResult = data.data.filter((item) => item.id === id);
    setId(id);
    setTitle(filterResult[0]?.title);
    setDescription(filterResult[0]?.description);
  }, []);

  return (

    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Blog Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" value={title}
              id="title"
              disabled
              placeholder="Blog Title"
              required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea name="description"
              className="shadow appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              cols="30"
              rows="8"
              disabled
              value={description}
              type="textarea"
              placeholder="Blog Description" required />

          </div>

        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Bharath Kalyan S. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DetailsPost