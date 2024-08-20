import React from 'react';
import { useSelector } from 'react-redux';

/**
 * Flag-Komponente.
 *
 * Diese Komponente zeigt die Flagge des aktuellen Landes an.
 * Wenn das `currentCountry`-Objekt verfügbar ist, wird die Flagge des Landes angezeigt.
 *
 * @param {Object} props - Die an die Komponente übergebenen Eigenschaften.
 * @param {Object} props.currentCountry - Das aktuelle Land, dessen Flagge angezeigt werden soll.
 *
 * @author Ferhat Agostinis
 */
const Flag = ({ currentCountry }) => {
    return (
        <div>
            {/* Überprüfen, ob `currentCountry` vorhanden ist, und die Flagge anzeigen */}
            {currentCountry && (
                <img
                    src={currentCountry.flag}
                    alt={`Flag of ${currentCountry.country}`}
                    style={{ width: "200px", height: "auto" }}
                />
            )}
        </div>
    );
}

export default Flag;
