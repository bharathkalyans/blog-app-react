import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      title,
      description,
    };
    props.func(data);
    console.log(data);
    navigate("/");
  };

  return (

    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" onChange={handleTitle} value={title}
              id="title"
              placeholder="Blog Title"
              required={true} />
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
              onChange={handleDescription}
              value={description}
              type="textarea"
              placeholder="Blog Description" required={true} />

          </div>
          <div className="flex justify-center">
            <button type="submit"  className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" typeof="button">
              Add Blog
            </button>

          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Bharath Kalyan S. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AddPost;
