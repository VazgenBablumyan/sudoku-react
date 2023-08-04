export function IsValid(board, row, col, value) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === value) {
      return false;
    }
  }
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === value) {

        return false;
      }
    }
  }

  return true;
}