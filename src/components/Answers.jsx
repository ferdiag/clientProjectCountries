import React from 'react'
import {
    decrementLives,
    incrementCounter,
    incrementPoints,
    setDisplayDialog,
    setQuestionType,
} from '../context/slice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shuffleArray } from '../utils/helpers/shuffleArray';

const Answers = ({ currentCountry, lives, index, setKey, points, questionType, setCurrentCountry }) => {
    const dispatch = useDispatch()
    const {
        countries,
        leaderboard,

    } = useSelector((state) => state.game);
    //set the current country state

    const navigate = useNavigate();

    const answerCapital = () => {
        dispatch(setQuestionType("country"))
        const newIndex = index + 1
        dispatch(incrementCounter(newIndex))
    }

    const answerCountry = () => {
        dispatch(setQuestionType("capital"))

        const newOpps = shuffleArray(currentCountry.opps)
        setCurrentCountry(currCountry => ({ ...currCountry, opps: newOpps }))
    }

    const handleUserChoice = (e) => {
        e.preventDefault();

        const isAnswerCorrect = parseInt(e.target.name, 10) === index;

        if (isAnswerCorrect) {
            dispatch(incrementPoints())
            questionType === "country" ? answerCountry() : answerCapital()
        } else {
            dispatch(decrementLives())
        }

        const isGameOver = parseInt(lives, 10) - 1 === 0 || index === countries.length - 1

        if (isGameOver) {
            const isInHighScore = leaderboard.find(entry => points > entry.points)

            isInHighScore ? dispatch(setDisplayDialog(true)) : navigate("/Leaderboard")
        }
        setKey(prevKey => prevKey + 1);
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