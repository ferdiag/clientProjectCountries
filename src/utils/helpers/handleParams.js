const handleParams = ({
  navigate,
  counter,
  points,
  lives,
  country,
  questionType,
}) => {
  const url = new URL(window.location.href);
  url.searchParams.set("country", country);
  url.searchParams.set("index", counter);
  url.searchParams.set("points", points);
  url.searchParams.set("lives", lives);
  url.searchParams.set("questionType", questionType);
  navigate(`/Game${url.search}`);
};

export default handleParams;
