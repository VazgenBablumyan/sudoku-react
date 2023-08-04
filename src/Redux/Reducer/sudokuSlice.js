import { createSlice } from "@reduxjs/toolkit"


const setStorage = (sudoku) => localStorage.setItem("Sudoku",JSON.stringify(sudoku))
const getStorage = (key) => JSON.parse(localStorage.getItem(key))

export const sudoku = getStorage("sudoku") ?? {isLoaded:true,emptyCounts:0}


export const sudokuSlice = createSlice({
  
  name:"sudoku",
  initialState: sudoku,
  reducers: {
    boardOnScreen: (action) => { 
        return {...sudoku,
      emptyCounts:action.value,
      inChoosingMode:false,
      boardOnScreen:true,
      isLoaded:true,
      continueOldGame:false}},
    inChoosingMode: () => {
      return {...sudoku,
        board:[],
        inChoosingMode:true,
        boardOnScreen:false,
        isLoaded:false,
        continueOldGame:false}
    },
    isLoaded:() => {
      return {...sudoku,
        inChoosingMode:false,
        boardOnScreen:false,
        isLoaded:true,
        continueOldGame:false}
    },
    continueOldGame:() => {
      return{...sudoku,
        inChoosingMode:false,
        boardOnScreen:true,
        isLoaded:true,
        continueOldGame:true
      }  
    },
    getBoardToSudoku:(action) => {
      return{...sudoku,
        board:action.board}
    },
    getTrueNumbers:(action) => {
      return {...sudoku,
        trueNumbers:action.nnumbers}
    }
  }
})
export const  { boardOnScreen, inChoosingMode, isLoaded, continueOldGame, getBoardToSudoku, getTrueNumbers } = sudokuSlice.actions

export default sudokuSlice.reducer

