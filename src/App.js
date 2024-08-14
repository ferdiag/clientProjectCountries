import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Game from "./components/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Dialog from "./components/Dialog";
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
  const [displayDialog, setDisplayDialog] = useState(false);
  const [name, setName] = useState("player 1");
  /**
   * Fetches the list of countries from the server and shuffles them.
   */
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        const shuffledArray = shuffleArray(response.data);
        console.log(response);
        setCountries(shuffledArray);
      })
      .catch((error) => console.error("Fehler beim Abrufen der Daten:", error));
  }, []);

  /**
   * Handles the start button click event.
   * @param {React.MouseEvent} e - The click event.
   */
  const handleCloseDialog = () => {
    setDisplayDialog(false);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Game"
            element={
              <Game countries={countries} setDisplayDialog={setDisplayDialog} />
            }
          />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
      {displayDialog && (
        <Dialog setName={setName} name={name} onClose={handleCloseDialog} />
      )}
    </div>
  );
}

export default App;
