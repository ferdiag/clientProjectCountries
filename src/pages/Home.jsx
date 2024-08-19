import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import setLocalStorage from '../utils/helpers/setLocalStorage';

const Home = () => {

    const navigate = useNavigate()

    const handleStart = (e) => {
        e.preventDefault();
        setLocalStorage({
            index: 0,
            points: 0,
            lives: 3,
            country: undefined,
            questionType: "country"
        })
        navigate("/game")
    };
    return (
        <div>
            <Button onClick={(e) => handleStart(e)}>Start</Button>
        </div>
    )
}

export default Home