import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalCountry } from '../utils/helpers/getLocalCountry';
import { setCurrentCountry } from '../context/slice';

const Home = () => {
    const {
        counter,
        countries,
    } = useSelector((state) => state.game);

    const navigate = useNavigate()
    const dispatch = useDispatch(state => state.game)

    const handleStart = (e) => {
        e.preventDefault();
        const currentCountryLocal = getLocalCountry(countries, counter)
        dispatch(setCurrentCountry(currentCountryLocal))
        navigate('Game')
    };
    return (
        <div>
            <Button onClick={(e) => handleStart(e)}>Start</Button>
        </div>
    )
}

export default Home