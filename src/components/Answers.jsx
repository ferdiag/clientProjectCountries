import React, { useState } from 'react'
import {
    incrementPoints,
    decrementLives,
    incrementCounter,
    setQuestionType,
    setDisplayDialog,
} from '../context/slice';
import { useDispatch, useSelector } from 'react-redux';

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

    const setQountryTypes = () => {
        dispatch(setQuestionType("country"))
        dispatch(incrementCounter())
    };
    const handleUserChoice = (e) => {
        e.preventDefault();
        if (parseInt(e.target.name, 10) === counter) {
            dispatch(incrementPoints());
            questionType === "country" ? dispatch(setQuestionType("capital")) : setQountryTypes();
            return;
        }
        if (lives - 1 === 0 || counter === countries.length - 1) { dispatch(setDisplayDialog(true)) }
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