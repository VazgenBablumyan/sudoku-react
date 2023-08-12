import { createSlice } from '@reduxjs/toolkit';
import { getStorage } from '../../helpers/helpers';

const sudoku = getStorage('sudoku') ?? { startNewGame: true, emptyCounts: 1 };

export const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState: sudoku,
    reducers: {
        startSudoku(state, action) {
            return {
                ...state,
                sudokuGame: action.payload.value,
            };
        },
        closeSudoku(state, action) {
            if (state.inChoosingMode) {
                return {
                    ...state,
                    sudokuGame: action.payload.value,
                    inChoosingMode: action.payload.value,
                    boardOnScreen: false,
                    startNewGame: true,
                    continueOldGame: false,
                };
            }
            return {
                ...state,
                sudokuGame: action.payload.value,
                inChoosingMode: action.payload.value,
                boardOnScreen: false,
                startNewGame: true,
            };
        },
        startNewGame(state) {
            return {
                ...state,
                inChoosingMode: false,
                boardOnScreen: false,
                startNewGame: true,
                continueOldGame: false,
            };
        },
        inChoosingMode(state) {
            return {
                ...state,
                inChoosingMode: true,
                boardOnScreen: false,
                startNewGame: false,
            };
        },
        boardOnScreen(state, action) {
            return {
                ...state,
                emptyCounts: action.payload.value,
                inChoosingMode: false,
                boardOnScreen: true,
                continueOldGame: true,
                startNewGame: false,
            };
        },
        continueOldGame(state) {
            return { ...state, inChoosingMode: false, boardOnScreen: true };
        },

        getTrueNumbers(state, action) {
            return { ...state, trueNumbers: action.payload.numbers };
        },
    },
});
export const {
    boardOnScreen,
    inChoosingMode,
    startNewGame,
    continueOldGame,
    sendBoardToSudoku,
    getTrueNumbers,
    startSudoku,
    closeSudoku,
} = sudokuSlice.actions;

export default sudokuSlice.reducer;
