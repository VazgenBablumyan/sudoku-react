import { combineReducers } from '@reduxjs/toolkit'
import React from 'react'
import sudokuSlice from './sudokuSlice'

export const rootReducer = combineReducers({
    sudoku:sudokuSlice
})
