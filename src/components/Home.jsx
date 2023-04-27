import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Post from "./Post";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import DetailsPost from "./DetailsPost";
import ErrorPage from "./ErrorPage";
import { nanoid } from "nanoid";
import db from "../config/firebase.config";
import { collection, doc, setDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore/lite";

const UserContext = createContext();

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchBlogs();
    }, [])

    const fetchBlogs = async () => {
        try {
            const blogsRef = collection(db, "blogs");
            const blogSnap = await getDocs(blogsRef);
            blogSnap.forEach(doc => {
                //console.log(doc.data());
                setData(prev => [...prev, doc.data()]);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const add = async (childData) => {
        const myId = nanoid();
        const blogData = {
            id: myId,
            title: childData.title,
            description: childData.description,
            isDeletable: true,
            isEditable: true
        };

        try {
            await setDoc(doc(db, "blogs", myId), blogData);
        } catch (error) {
            console.log(error);
        }

        setData([...data, { ...childData, id: myId, isEditable: true, isDeletable: true }]);
    };

    const deleteBlog = async (blogId) => {
        try {
            await deleteDoc(doc(db, "blogs", blogId));
        } catch (error) {
            console.log(error);
        }
    };

    const editBlog = async (blogId, newData) => {
        try {
            await setDoc(doc(db, "blogs", blogId), newData, { merge: true });
            console.log("Document updated successfully!");
        } catch (error) {
            console.log("Error updating document: ", error);
        }
    }

    return (
        <div className="flex flex-col flex-grow m-4 p-4 border-2 rounded-lg border-yellow-400">
            <UserContext.Provider value={{ data, setData }}>
                <Routes>
                    <Route path="" element={<Post func={deleteBlog} />}></Route>
                    <Route path="addPost" element={<AddPost func={add} />}></Route>
                    <Route path="editPost" element={<EditPost func={editBlog} />}></Route>
                    <Route path="detailsPost" element={<DetailsPost />}></Route>
                    <Route path="/*" element={<ErrorPage />}></Route>
                </Routes>
            </UserContext.Provider>
        </div>
    );
};

export default Home;
export { UserContext };
