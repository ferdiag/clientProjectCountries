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

        const url = new URL(window.location.href);
        url.searchParams.set('index', 0);
        url.searchParams.set('points', 0);
        url.searchParams.set('lives', 3);
        // Optional: Logge die neue URL
        console.log(`New URL: ${url}`);

        // Leite auf die Seite `/Game` mit dem Parameter `next=0` um
        navigate(`/Game${url.search}`);
    };
    return (
        <div>
            <Button onClick={(e) => handleStart(e)}>Start</Button>
        </div>
    )
}

export default Home