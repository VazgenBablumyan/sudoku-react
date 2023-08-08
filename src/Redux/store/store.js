import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../Reducer/RootReducer";


  
export const store = configureStore({
    reducer:{
        reducer:rootReducer
    }
})

export default store
