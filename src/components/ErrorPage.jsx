import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const returnToHomePage = () => {
        navigate("/");
    }
    return (
        <div className='flex flex-col items-center h-[70vh]'>
            <div className='font-light'>No Endpoint of Such Available!!</div>
            <h3 onClick={returnToHomePage} className='font-extrabold hover:cursor-pointer'>Click to Head back to Home 🏡</h3>
        </div>
    )
}

export default ErrorPage