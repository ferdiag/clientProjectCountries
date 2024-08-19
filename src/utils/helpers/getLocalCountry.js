export const getLocalCountry = (countries, counter, coutryLocalstorage) => {
  let currentCountryLocal;
  if (countries.length > 0 && counter < countries.length) {
    const country = { ...countries[counter] };
    //da das array geschmischt wird, kann es beim reload sein, dass das falsche Land gezeigt wird
    if (coutryLocalstorage) {
      if (country.country !== coutryLocalstorage) {
        const targetIndex = countries.findIndex(
          (country) => country.country === coutryLocalstorage
        );
        const temp = countries[counter];
        countries[counter] = countries[targetIndex];

        if (targetIndex > counter) countries[targetIndex] = temp;
      }
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
    console.log(opps);
    currentCountryLocal = { ...country, opps };
  }
  return currentCountryLocal;
};
