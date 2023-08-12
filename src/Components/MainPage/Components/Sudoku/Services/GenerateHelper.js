import { ShuffleArray } from './ShuffleArray';
import { IsValid } from './IsValid';

export function GenerateHelper(board, row, col) {
    if (col === 9) {
        row++;
        col = 0;
        if (row === 9) {
            return true;
        }
    }
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    ShuffleArray(nums);
    for (let i = 0; i < 9; i++) {
        const value = nums[i];
        if (IsValid(board, row, col, value)) {
            board[row][col] = value;
            if (GenerateHelper(board, row, col + 1)) {
                return true;
            }
            board[row][col] = 0;
        }
    }

    return false;
}
