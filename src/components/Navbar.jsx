import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from "../config/firebase.config";
import { collection, getDocs } from "firebase/firestore/lite";

const Navbar = () => {
    const [borderColour, setBorderColor] = useState("");

    useEffect(() => {
        getBorderColor();
    }, []);

    const getBorderColor = async () => {
        try {
            const borderRef = collection(db, "navbarColour");
            const borderSnap = await getDocs(borderRef);
            borderSnap.forEach(color => {
                setBorderColor(color.data().color);
            })

        } catch (error) {
            console.log(error);
        }
    }
    return (

        <div className="flex items-center bg-gray-200 border-b-8 rounded-lg  p-4 m-4" style={{
            borderColor: `${borderColour}`
        }}>
            <Link className="nav-item text-3xl justify-start" to={""}>Blog App</Link>
            <div className="ml-auto">
                <Link className="nav-item m-2 font-semibold" to={""}>Home</Link>
                <Link className="nav-item m-2 font-semibold" to={"/addPost"}>Add Blog</Link>
            </div>
        </div>
    )
}

export default Navbar