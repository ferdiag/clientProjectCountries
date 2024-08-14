import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const handleStart = (e) => {
        e.preventDefault();
        navigate('Game')
    };
    return (
        <div>
            <Button onClick={(e) => handleStart(e)}>Start</Button>
        </div>
    )
}

export default Home