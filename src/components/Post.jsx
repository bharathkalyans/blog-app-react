import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllBlogs } from '../features/blogsSlice';
import PostCard from './PostCard';
import { useContext } from 'react';
import { UserContext } from './Home';

const Post = (props) => {
    const data = useContext(UserContext);
    //const blogs = useSelector(selectAllBlogs);

    return (
        <div className="grid grid-cols-3">
            {data.data && data.data.map((blog) => (
                <PostCard blog={blog} func={props.func} />
            ))}
        </div>
    )
}

export default Post