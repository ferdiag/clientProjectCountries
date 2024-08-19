const setLocalStorage = ({
  index = undefined,
  points = undefined,
  lives = undefined,
  country = undefined,
  questionType = undefined,
}) => {
  country !== undefined && localStorage.setItem("country", country);
  index !== undefined && localStorage.setItem("index", index);
  points !== undefined && localStorage.setItem("points", points);
  lives !== undefined && localStorage.setItem("lives", lives);
  questionType !== undefined &&
    localStorage.setItem("questionType", questionType);
};

export default setLocalStorage;
