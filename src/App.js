import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import StartButton from "./components/StartButton";
import Game from "./components/Game";
import PointsElement from "./components/PointsElement";
import LivesElement from "./components/LivesElement";

/**
 * Shuffles an array in place.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
const shuffleArray = (array) => {
  const updatedArray = [...array];
  for (let i = updatedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [updatedArray[i], updatedArray[j]] = [updatedArray[j], updatedArray[i]];
  }
  return updatedArray;
};

/**
 * Main application component.
 * @returns {JSX.Element} The main component rendering the game.
 */
function App() {
  const [countries, setCountries] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [questionType, setQuestionType] = useState("country");
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);

  /**
   * Fetches the list of countries from the server and shuffles them.
   */
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        const shuffledArray = shuffleArray(response.data);
        setCountries(shuffledArray);
      })
      .catch((error) => console.error("Fehler beim Abrufen der Daten:", error));
  }, []);

  /**
   * Handles the start button click event.
   * @param {React.MouseEvent} e - The click event.
   */
  const handleStart = (e) => {
    e.preventDefault();
    setIsRunning(true);
  };

  return (
    <div className="App">
      {!isRunning ? (
        <StartButton onClick={(e) => handleStart(e)}>Start</StartButton>
      ) : (
        <>
          <PointsElement points={points} />
          <LivesElement lives={lives} />
          <Game
            setCounter={setCounter}
            setQuestionType={setQuestionType}
            questionType={questionType}
            counter={counter}
            countries={countries}
            points={points}
            setPoints={setPoints}
            setLives={setLives}
          />
        </>
      )}
    </div>
  );
}

export default App;
