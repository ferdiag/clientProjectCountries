export const getLocalCountry = (countries, counter, countryParams) => {
  let currentCountryLocal;
  if (countries.length > 0 && counter < countries.length) {
    const country = { ...countries[counter] };
    //da das array geschmischt wird, kann es beim reload sein, dass das falsche Land gezeigt wird
    if (country.country !== countryParams) {
      const targetIndex = countries.findIndex(
        (country) => country.country === countryParams
      );
      const temp = countries[counter];
      countries[counter] = countries[targetIndex];

      if (targetIndex > counter) countries[targetIndex] = temp;
    }

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
    currentCountryLocal = { ...country, opps };
  }
  return currentCountryLocal;
};
