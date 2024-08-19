import React from 'react'
import {
    setDisplayDialog,
} from '../context/slice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import setLocalStorage from '../utils/helpers/setLocalStorage';

const Answers = ({ currentCountry, lives, index, setKey, points, questionType }) => {
    const dispatch = useDispatch()
    const {
        countries,
        leaderboard,

    } = useSelector((state) => state.game);
    //set the current country state

    const navigate = useNavigate();

    const answerCapital = () => {
        localStorage.setItem("questionType", "country")
        const newIndex = index + 1
        localStorage.setItem("index", newIndex);
    }

    const answerCountry = () => {
        localStorage.setItem("questionType", "capital")
    }

    const handleUserChoice = (e) => {
        e.preventDefault();

        const isAnswerCorrect = parseInt(e.target.name, 10) === index

        if (isAnswerCorrect) {
            setLocalStorage({ points: points + 1 })
            questionType === "country" ? answerCountry() : answerCapital()
        } else {
            setLocalStorage({ lives: lives - 1 })
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