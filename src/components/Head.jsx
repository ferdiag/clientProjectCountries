import React from 'react';
import PointsElement from './PointsElement';
import LivesElement from './LivesElement';
import Flag from './Flag';

/**
 * Head-Komponente.
 *
 * Diese Komponente zeigt die Punktzahl, die verbleibenden Leben und abhängig vom Fragetyp die Flagge des aktuellen Landes an.
 * Wenn der `questionType` "country" ist, wird die Flagge des aktuellen Landes angezeigt.
 *
 * @param {Object} props - Die an die Komponente übergebenen Eigenschaften.
 * @param {Object} props.currentCountry - Das aktuelle Land, dessen Flagge angezeigt werden soll.
 * @param {number} props.points - Die aktuelle Punktzahl des Spielers.
 * @param {number} props.lives - Die Anzahl der verbleibenden Leben des Spielers.
 * @param {string} props.questionType - Der Typ der aktuellen Frage ("country" oder "capital").
 *
 * @author Ferhat Agostinis
 */
const Head = ({ currentCountry, points, lives, questionType }) => {
    return (
        <>
            {/* Anzeige der Punktzahl */}
            <PointsElement points={points} />
            {/* Anzeige der verbleibenden Leben */}
            <LivesElement lives={lives} />
            {/* Anzeige der Flagge, wenn der Fragetyp "country" ist */}
            {questionType === "country" && <Flag currentCountry={currentCountry} />}
        </>
    );
};

export default Head;
