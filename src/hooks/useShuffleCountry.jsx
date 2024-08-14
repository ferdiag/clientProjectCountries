import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCountry } from "../context/slice";
const useCurrentCountry = () => {
    const dispatch = useDispatch();
    const { countries, counter } = useSelector(state => state.game)
    const [currentCountryLocal, setCurrentCountryLocal] = useState(null)
    /**
     * Custom hook that handles the logic of selecting a country and generating options.
     * @param {Array} countries - The array of country objects.
     * @param {number} counter - The current index of the country in the array.
     * @returns {Object} The current country and options.
     */
    useEffect(() => {
        if (countries.length > 0 && counter < countries.length) {
            const country = { ...countries[counter] };
            console.log(country)
            let it = 0;
            let opps = [];
            while (it < 3) {
                const randomNumber = Math.floor(Math.random() * countries.length);
                if (!opps.includes(randomNumber) && randomNumber !== counter) {
                    opps = [...opps, randomNumber];
                    it += 1;
                }
            }

            const indexOfCorrectAnswer = Math.floor(Math.random() * 4);
            opps.splice(indexOfCorrectAnswer, 0, counter);
            setCurrentCountryLocal({ ...country, opps })
        }
    }, []);
    dispatch(setCurrentCountry(currentCountryLocal)) // Da der Zustand direkt an Redux weitergegeben wird, gibt der Hook selbst nichts zurück
};

export default useCurrentCountry;
