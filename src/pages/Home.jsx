import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalCountry } from '../utils/helpers/getLocalCountry';
import { setCurrentCountry } from '../context/slice';
import useParams from '../utils/helpers/handleParams';
import handleParams from '../utils/helpers/handleParams';

const Home = () => {
    const {
        counter,
        countries,
    } = useSelector((state) => state.game);

    const navigate = useNavigate()

    const handleStart = (e) => {
        e.preventDefault();
        handleParams({ navigate, counter: 0, points: 0, lives: 3, country: countries[0].country, questionType: "country" })
    };
    return (
        <div>
            <Button onClick={(e) => handleStart(e)}>Start</Button>
        </div>
    )
}

export default Home