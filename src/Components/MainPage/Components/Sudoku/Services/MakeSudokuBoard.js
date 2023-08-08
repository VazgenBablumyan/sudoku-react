import { GenerateHelper } from "./GenerateHelper";

export function MakeSudokuBoard() {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board[i] = [];
    for (let j = 0; j < 9; j++) {
      board[i][j] = 0;
    }
  }
  GenerateHelper(board, 0, 0);

  return board;
}
