export const updateCurrentWord = (word) => ({
    type: "UPDATE_CURRENT_WORD",
    payload: word,
  });
  export const addWord = (word) => ({
    type: "ADD_WORD",
    payload: word,
  });
  export const setGameOver = () => ({
    type: "SET_GAME_OVER",
  });
  export const setErrorMessage = (message) => ({
    type: "SET_ERROR_MESSAGE",
    payload: message,
  });
  export const setStartingLetter = (letter) => ({
    type: "SET_STARTING_LETTER",
    payload: letter,
  });
  
  export const incrementScore = () => ({
    type: "INCREMENT_SCORE",
  });
  
  export const restartGame = () => ({
    type: "RESTART_GAME",
  });