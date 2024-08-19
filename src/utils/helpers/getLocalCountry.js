export const getLocalCountry = (countries, counter, coutryLocalstorage) => {
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
    console.log(opps);
    currentCountryLocal = { ...country, opps };
  }
  return currentCountryLocal;
};
