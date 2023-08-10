const initialState = {
    words: [],
    currentWord: "",
    gameOver: false,
    startingLetter: "",
    scores: { player1: 0 },
    errorMessage: "",
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_CURRENT_WORD":
        return { ...state, currentWord: action.payload };
      case "ADD_WORD":
        return { ...state, words: [...state.words, action.payload] };
      case "SET_GAME_OVER":
        return { ...state, gameOver: true };
      case "SET_ERROR_MESSAGE":
        return { ...state, errorMessage: action.payload };
    case "SET_STARTING_LETTER":
      return {
        ...state,
        startingLetter: action.payload,
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        scores: { ...state.scores, player1: state.scores.player1 + 1 },
      };
    case "RESTART_GAME":
      return initialState;
    default:
      return state;
  }
  };
  
  export default gameReducer;