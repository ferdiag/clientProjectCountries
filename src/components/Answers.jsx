import React from 'react'
import {
    incrementPoints,
    incrementCounter,
    setQuestionType,
    setDisplayDialog,
} from '../context/slice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Answers = ({ currentCountry, lives }) => {
    const dispatch = useDispatch()
    const {
        counter,
        countries,
        questionType,
        leaderboard,
        points
    } = useSelector((state) => state.game);

    //set the current country state

    const navigate = useNavigate();

    const answerCountry = () => {
        dispatch(setQuestionType("country"))
        dispatch(incrementCounter())
        const url = new URL(window.location.href);

        url.searchParams.set('index', counter + 1);
        url.searchParams.set('points', points + 1);
        url.searchParams.set('lives', lives);

        navigate(`/Game${url.search}`);
    };
    const answerCapital = () => {
        dispatch(setQuestionType("capital"))

    }
    const handleUserChoice = (e) => {
        e.preventDefault();
        if (parseInt(e.target.name, 10) === counter) {
            dispatch(incrementPoints());
            // Versuch, den Query-Parameter zu setzen
            try {
                const url = new URL(window.location.href);
                url.searchParams.set('index', counter);
                url.searchParams.set('points', points + 1);

                navigate(`/Game${url.search}`);
                // Optional: Logge die neue URL
                console.log(`New URL: ${url}`);
            } catch (error) {
                console.error('Failed to update URL:', error);
            }
            questionType === "country" ? answerCapital() : answerCountry();
            return;
        }
        const hasNoLifes = parseInt(lives, 10) - 1 === 0
        console.log(hasNoLifes)
        if (hasNoLifes || counter === countries.length - 1) {
            const isInHighScore = leaderboard.find(entry => points > entry.points)
            console.log(isInHighScore)
            isInHighScore ?
                dispatch(setDisplayDialog(true)) : navigate("/Leaderboard")
        }
        const url = new URL(window.location.href);
        url.searchParams.set('index', counter);
        url.searchParams.set('points', points);
        url.searchParams.set('lives', lives - 1);
        navigate(`/Game${url.search}`);
    };

    const opps = currentCountry?.opps.map((indexOfCountry, index) => (
        <button
            name={indexOfCountry}
            key={index}
            onClick={(e) => handleUserChoice(e)}
        >
            {questionType === "country"
                ? countries[indexOfCountry].country
                : countries[indexOfCountry].capital}
        </button>
    ))
    return (
        <div>{opps}</div>
    )
}

export default Answers