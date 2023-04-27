import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectAllBlogs } from '../features/blogsSlice'
import { useSelector } from 'react-redux'
import { UserContext } from './Home'

const PostCard = ({ blog, func }) => {
    const data = useContext(UserContext)
    const navigate = useNavigate();
    const handleDelete = (id) => {
        func(id);
        const tempArray = data.data.filter((item) => item.id !== id);
        data.setData(tempArray);
        navigate("/");
    };
    const handleEdit = () => {
        navigate("editPost", { state: { id: blog.id } })
    };
    const handleView = () => {
        navigate("detailsPost", { state: { id: blog.id } })
    };
    return (
        <div className="myBlog">
            <div key={blog.id} className="max-w-sm h-fit rounded overflow-hidden shadow-xl bg-gray-200 m-2">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{blog.title}</div>
                    <p className="text-gray-700 text-base">
                        {blog.description}
                    </p>
                </div>
                <div className="flex flex-row justify-center">
                    <button onClick={handleEdit} className="rounded-lg bg-yellow-300 p-2  m-2">Edit</button>
                    <button onClick={handleView} className="rounded-lg bg-yellow-300 p-2 px-4 m-2">View</button>
                    {blog.isDeletable && <button onClick={() => handleDelete(blog.id)} className="rounded-lg bg-yellow-300 p-2  px-4 m-2">Delete</button>}
                </div>
            </div>
        </div>
    )
}

export default PostCard