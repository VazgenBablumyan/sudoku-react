import { configureStore } from "@reduxjs/toolkit";
import sudokuSlice from "../Reducer/sudokuSlice";


  
export const store = configureStore({
    reducer:{
        sudoku:sudokuSlice
    }
})

export default store
