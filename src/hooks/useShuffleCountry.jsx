import { useState, useEffect } from "react";

const useCurrentCountry = (countries, counter) => {
    console.log(countries)
    /**
     * Custom hook that handles the logic of selecting a country and generating options.
     * @param {Array} countries - The array of country objects.
     * @param {number} counter - The current index of the country in the array.
     * @returns {Object} The current country and options.
     */

    const [currentCountry, setCurrentCountry] = useState(null);

    useEffect(() => {
        const country = { ...countries[counter] };
        let it = 0;
        let opps = [];

        while (it < 3) {
            const randomNumber = Math.floor(Math.random() * countries.length);
            const isInOpps = opps.includes(randomNumber);
            if (!isInOpps) {
                opps = [...opps, randomNumber];
                it += 1;
            }
        }
        const indexOfCorrectAnswer = Math.floor(Math.random() * 4);
        opps.splice(indexOfCorrectAnswer, 0, counter);
        setCurrentCountry({ ...country, opps });
    }, [counter, countries]);

    return currentCountry;
};


export default useCurrentCountry