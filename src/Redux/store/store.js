import { configureStore } from "@reduxjs/toolkit";
import sudokuSlice from "../Reducer/sudokuSlice";


  
export const store = configureStore({
    reducer:{
        reducer:sudokuSlice
    }
})

export default store
