import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import setLocalStorage from '../utils/helpers/setLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayDialog } from '../context/slice';

const Home = () => {
    const {
        name,
    } = useSelector((state) => state.game);
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleStart = (e) => {
        e.preventDefault();
        navigate("/game")
    };
    return (
        <div>
            <h1>
                Hallo {name}
            </h1>
            <div>
                <Button onClick={(e) => handleStart(e)}>Start</Button>
                <Button onClick={e => dispatch(setDisplayDialog(true))} >Namen Ändern</Button>
            </div>

        </div>
    )
}

export default Home