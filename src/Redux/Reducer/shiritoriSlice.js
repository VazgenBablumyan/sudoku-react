import { createSlice } from '@reduxjs/toolkit';

const shiritoriSlice = createSlice({
  name: 'shiritori',
  initialState: {
    shiritoriGame:false,
    words: [],
    currentWord: '',
    gameOver: false,
    startingLetter: '',
    scores: { player: 0 },
    errorMessage: '',
    gameEnded: false,
  },
  reducers: {
    startShiritori:(state,action)=>{
      return{
        ...state,
        shiritoriGame:action.type.value
      }
    },
    setWords: (state, action) => {
      state.words = action.payload;
    },
    setCurrentWord: (state, action) => {
      state.currentWord = action.payload;
      state.errorMessage = '';
    },
    setGameOver: (state, action) => {
      state.gameOver = action.payload;
    },
    setStartingLetter: (state, action) => {
      state.startingLetter = action.payload;
    },
    setScores: (state, action) => {
      const { player } = action.payload;
      state.scores.player = player; 
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setGameEnded: (state, action) => {
      state.gameEnded = action.payload;
    },
  },
});

export const {
  setWords,
  setCurrentWord,
  setGameOver,
  setStartingLetter,
  setScores,
  setErrorMessage,
  setGameEnded,
  startShiritori,
  closeShiritori
} = shiritoriSlice.actions;

export default shiritoriSlice.reducer;
