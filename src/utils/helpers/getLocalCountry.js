export const getLocalCountry = (countries, counter) => {
  let currentCountryLocal;
  if (countries.length > 0 && counter < countries.length) {
    const country = { ...countries[counter] };
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
  console.log(currentCountryLocal);
  return currentCountryLocal;
};
