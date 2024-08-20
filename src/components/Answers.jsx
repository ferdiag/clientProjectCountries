import React from 'react';
import {
    decrementLives,
    incrementCounter,
    incrementPoints,
    setDisplayDialog,
    setLeaderBoard,
    setQuestionType,
} from '../context/slice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shuffleArray } from '../utils/helpers/shuffleArray';
import axios from 'axios';

/**
 * Answers-Komponente.
 *
 * Diese Komponente rendert die Antwortmöglichkeiten für das aktuelle Land oder die aktuelle Hauptstadt,
 * verwaltet die Benutzerinteraktionen und aktualisiert den Spielstatus entsprechend.
 *
 * @param {Object} props - Die Eigenschaften, die an die Komponente übergeben werden.
 * @param {Object} props.currentCountry - Das aktuelle Land, das im Spiel angezeigt wird.
 * @param {number} props.lives - Die aktuelle Anzahl der Leben des Spielers.
 * @param {number} props.index - Der Index des aktuellen Spiels.
 * @param {Function} props.setKey - Funktion zum Aktualisieren des Schlüssels für den Zustand.
 * @param {number} props.points - Die aktuelle Punktzahl des Spielers.
 * @param {string} props.questionType - Der aktuelle Fragetyp ("country" oder "capital").
 * @param {Function} props.setCurrentCountry - Funktion zum Setzen des aktuellen Landes.
 */
const Answers = ({ currentCountry, lives, index, setKey, points, questionType, setCurrentCountry }) => {
    const dispatch = useDispatch();
    const { countries, leaderboard, name } = useSelector((state) => state.game);

    const navigate = useNavigate();

    // Logik, um den Fragetyp auf "country" zu setzen und den Zähler zu erhöhen
    const answerCapital = () => {
        dispatch(setQuestionType("country"));
        const newIndex = index + 1;
        dispatch(incrementCounter(newIndex));
    };

    // Logik, um den Fragetyp auf "capital" zu setzen und die Optionen zu mischen
    const answerCountry = () => {
        dispatch(setQuestionType("capital"));

        const newOpps = shuffleArray(currentCountry.opps);
        setCurrentCountry(currCountry => ({ ...currCountry, opps: newOpps }));
    };

    // Verarbeitet die Auswahl des Benutzers
    const handleUserChoice = (e) => {
        e.preventDefault();

        const isAnswerCorrect = parseInt(e.target.name, 10) === index;

        if (isAnswerCorrect) {
            dispatch(incrementPoints());
            questionType === "country" ? answerCountry() : answerCapital();
        } else {
            dispatch(decrementLives());
        }

        // Funktion zum Navigieren und Aktualisieren der Bestenliste
        const navigateAndGetUpdateHighscore = async () => {
            try {
                const res = await axios.post("http://localhost:3001/getAndUpdateLeaderboard", { name, points });
                dispatch(setLeaderBoard(res.data.leaderboard));
            } catch (err) {
                console.log(err, "leaderboard wurde nicht geupdatet");
            }

            navigate("/Leaderboard");
        };

        // Überprüft, ob das Spiel vorbei ist
        const isGameOver = parseInt(lives, 10) - 1 === 0 || index === countries.length - 1;
        if (isGameOver) {
            const isInHighScore = leaderboard.length > 0
                ? leaderboard.find(entry => points > entry.points)
                : true;

            isInHighScore && name === "player 1"
                ? dispatch(setDisplayDialog(true))
                : navigateAndGetUpdateHighscore();
        }

        // Aktualisiert den Zustandsschlüssel, um das UI neu zu rendern
        setKey(prevKey => prevKey + 1);
    };

    // Rendert die Antwortmöglichkeiten basierend auf dem Fragetyp
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
    ));

    return (
        <div>{opps}</div>
    );
};

export default Answers;
