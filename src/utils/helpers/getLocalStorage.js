const getLocalStorage = () => {
  const country = localStorage.getItem("country");
  const index = parseInt(localStorage.getItem("index")) || 0;
  const points = parseInt(localStorage.getItem("points")) || 0;
  const lives = parseInt(localStorage.getItem("lives")) || 3;
  const questionType = localStorage.getItem("questionType");
  return { index, points, lives, country, questionType };
};

export default getLocalStorage;
