import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Question from "../components/Question";
import Answers from "../components/Answers";
import { useSelector } from "react-redux";
import { getLocalCountry } from "../utils/helpers/getLocalCountry";
import getLocalStorage from "../utils/helpers/getLocalStorage";

const Game = () => {
  const { index, points, lives, country, questionType } = getLocalStorage()
  const [key, setKey] = useState(0);

  const { countries } = useSelector(state => state.game)
  const [currentCountry, setCurrentCountry] = useState(null)
  useEffect(() => {
    const currentCountry = getLocalCountry(countries, index, country)
    setCurrentCountry(currentCountry)
  }, [countries, index])

  return (
    <div>
      {currentCountry ? (
        <>
          <Head
            questionType={questionType}
            currentCountry={currentCountry}
            points={points}
            lives={lives}
          />
          <div>
            {" "}
            <Question />
            <Answers
              points={points}
              setKey={setKey}
              index={index}
              questionType={questionType}
              lives={lives}
              currentCountry={currentCountry} />
          </div>
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};

export default Game;
