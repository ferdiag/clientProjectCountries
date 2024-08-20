import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Question from "../components/Question";
import Answers from "../components/Answers";
import { useSelector } from "react-redux";
import { getLocalCountry } from "../utils/helpers/getLocalCountry";

/**
 * Game-Komponente.
 *
 * Diese Komponente stellt das Hauptspiel dar. Sie verwaltet den aktuellen Spielzustand,
 * einschließlich des aktuellen Landes, der Punkte, der Leben und der Frage. Die Komponente
 * verwendet verschiedene Unterkomponenten, um den aktuellen Spielstatus anzuzeigen und
 * die Benutzerinteraktionen zu verarbeiten.
 *
 * @author Ferhat Agostinis
 */
const Game = () => {
  const [key, setKey] = useState(0); // Zustand zur erzwungenen Neurenderung der Komponente

  // Zugriff auf den Spielzustand aus dem Redux-Store
  const { counter, points, lives, country, questionType, countries } = useSelector(state => state.game);

  // Zustand für das aktuelle Land
  const [currentCountry, setCurrentCountry] = useState(null);
  console.log(currentCountry)
  // Effekt-Hook, um das aktuelle Land basierend auf dem Zähler und der Länder-Liste zu setzen
  useEffect(() => {
    const currentCountry = getLocalCountry(countries, counter, country);
    setCurrentCountry(currentCountry);
  }, [countries, counter]);

  return (
    <div>
      {currentCountry ? (
        <>
          {/* Anzeige des Spielkopfes mit Punkten, Leben und ggf. der Flagge */}
          <Head currentCountry={currentCountry} />
          <div>
            {/* Anzeige der Frage */}
            <Question />
            {/* Anzeige der Antwortmöglichkeiten */}
            <Answers
              points={points}
              setKey={setKey}
              index={counter}
              questionType={questionType}
              lives={lives}
              currentCountry={currentCountry}
              setCurrentCountry={setCurrentCountry}
            />
          </div>
        </>
      ) : (
        <div>...loading</div> /* Anzeige eines Ladehinweises, während das aktuelle Land geladen wird */
      )}
    </div>
  );
};

export default Game;

