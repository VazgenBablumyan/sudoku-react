import { combineReducers } from '@reduxjs/toolkit';
import sudokuSlice from './sudokuSlice';
import userSlice from './userSlice';
import usersSlice from './usersSlice';
import boardSlice from './boardSlice';
import ShiritoriSlice from './shiritoriSlice';

export const rootReducer = combineReducers({
    sudoku: sudokuSlice,
    user: userSlice,
    users: usersSlice,
    board: boardSlice,
    shiritori:ShiritoriSlice,
});
