import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Question from "../components/Question";
import Answers from "../components/Answers";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { getLocalCountry } from "../utils/helpers/getLocalCountry";

const Game = () => {
  const [searchParams] = useSearchParams(); // Hook, um die Query-Parameter abzurufen
  const index = searchParams.get('index'); // Holt den Wert des 'index'-Parameters
  const points = searchParams.get('points'); // Holt den Wert des 'index'-Parameters
  const lives = searchParams.get('lives'); // Holt den Wert des 'index'-Parameters
  const countryParams = searchParams.get('country'); // Holt den Wert des 'index'-Parameters

  const { countries } = useSelector(state => state.game)
  const [currentCountry, setCurrentCountry] = useState()

  useEffect(() => {
    const currentCountry = getLocalCountry(countries, index, countryParams)
    setCurrentCountry(currentCountry)
  }, [countries, index])

  return (
    <div>
      {currentCountry ? (
        <>
          <Head
            currentCountry={currentCountry}
            points={points}
            lives={lives}
          />
          <div>
            {" "}
            <Question />
            <Answers lives={lives} currentCountry={currentCountry} />
          </div>
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};

export default Game;
