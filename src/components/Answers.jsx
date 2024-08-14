import React, { useState } from 'react'
import {
    incrementPoints,
    decrementLives,
    incrementCounter,
    setQuestionType,
    setDisplayDialog,
    setCurrentCountry,
} from '../context/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalCountry } from '../utils/helpers/getLocalCountry';

const Answers = () => {
    const dispatch = useDispatch()
    const {
        currentCountry,
        counter,
        lives,
        countries,
        questionType,
    } = useSelector((state) => state.game);
    //set the current country state

    const answerCountry = () => {
        dispatch(setQuestionType("country"))
        dispatch(incrementCounter())
        const next = counter + 1
        const currentCountryLocal = getLocalCountry(countries, next)
        dispatch(setCurrentCountry(currentCountryLocal))
    };
    const answerCapital = () => {
        dispatch(setQuestionType("capital"))

    }
    const handleUserChoice = (e) => {
        e.preventDefault();
        if (parseInt(e.target.name, 10) === counter) {
            dispatch(incrementPoints());

            questionType === "country" ? answerCapital() : answerCountry();
            return;
        }
        if (lives - 1 === 0 || counter === countries.length - 1) {
            dispatch(setDisplayDialog(true))
        }
        dispatch(decrementLives())

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