import React, { useEffect, useState } from "react";
import PointsElement from "./PointsElement";
import LivesElement from "./LivesElement";
import useCurrentCountry from "../hooks/useShuffleCountry";

/**
 * Game component that handles the core gameplay logic.
 * @param {Array} countries - The array of country objects, each containing country and capital names.
 * @param {number} counter - The current index of the country in the array.
 * @param {Function} setCounter - Function to update the counter state.
 * @param {string} questionType - The current type of question ("country" or "capital").
 * @param {Function} setQuestionType - Function to update the question type state.
 * @param {Function} setPoints - Function to update the player's points.
 * @param {Function} setLives - Function to update the player's remaining lives.
 * @returns {JSX.Element} The game interface where users can interact with questions.
 */
const Game = ({ countries, setDisplayDialog }) => {
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [questionType, setQuestionType] = useState("country");
  const [lives, setLives] = useState(3);
  const currentCountry = useCurrentCountry(countries, counter);
  console.log(currentCountry);
  /**
   * Updates the question type and counter.
   * If the question type is "capital", it resets to "country" and increments the counter.
   */
  const setStates = () => {
    setQuestionType("country");
    setCounter((currentCounter) => {
      const updatedCounter = currentCounter + 1;
      return updatedCounter;
    });
  };

  /**
   * Handles the user's choice by checking if the selected option is correct.
   * If correct, it increments the points and updates the question type.
   * If incorrect, it decrements the lives.
   * @param {React.MouseEvent} e - The click event on the option button.
   */
  const handleUserChoice = (e) => {
    e.preventDefault();
    if (parseInt(e.target.name, 10) === counter) {
      setPoints((currentpoints) => currentpoints + 1);
      questionType === "country" ? setQuestionType("capital") : setStates();
      return;
    }
    if (lives - 1 === 0 || counter === countries.length - 1)
      setDisplayDialog(true);
    setLives((currentLives) => currentLives - 1);
  };

  /**
   * Placeholder function to potentially display a flag in the future.
   */

  return (
    <div>
      {currentCountry ? (
        <>
          <PointsElement points={points} />
          <LivesElement lives={lives} />
          <div>
            {questionType === "country"
              ? currentCountry.country
              : currentCountry.capital}
          </div>
          <div>
            {currentCountry.opps.map((indexOfCountry, index) => (
              <button
                name={indexOfCountry}
                key={index}
                onClick={(e) => handleUserChoice(e)}
              >
                {questionType === "country"
                  ? countries[indexOfCountry].country
                  : countries[indexOfCountry].capital}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};

export default Game;
