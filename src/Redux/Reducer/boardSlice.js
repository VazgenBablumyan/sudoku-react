import { createSlice } from '@reduxjs/toolkit';
import { getStorage } from '../../helpers/helpers';

const board = getStorage('board') ?? { sudokuBoard: [], hiddenNumbers: [] };
export const boardSlice = createSlice({
    name: 'board',
    initialState: board,
    reducers: {
        boardToBord(state, action) {
            console.log(action.payload.value);
            return {
                ...state,
                sudokuBoard: action.payload.value,
            };
        },
        getHiddenNumbers(state, action) {
            return {
                ...state,
                hiddenNumbers: [...action.payload.value]    
            };
        },
    },
});
export const { boardToBord, getHiddenNumbers } = boardSlice.actions;
export default boardSlice.reducer;
