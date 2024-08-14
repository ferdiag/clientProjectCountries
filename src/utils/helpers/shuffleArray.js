export const shuffleArray = (array) => {
  const updatedArray = [...array];
  for (let i = updatedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [updatedArray[i], updatedArray[j]] = [updatedArray[j], updatedArray[i]];
  }
  return updatedArray;
};
