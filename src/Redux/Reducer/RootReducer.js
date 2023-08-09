import { combineReducers } from '@reduxjs/toolkit';
import sudokuSlice from './sudokuSlice';
import userSlice from './userSlice';
import usersSlice from './usersSlice';

export const rootReducer = combineReducers({
    sudoku: sudokuSlice,
    user: userSlice,
    users: usersSlice,
});
