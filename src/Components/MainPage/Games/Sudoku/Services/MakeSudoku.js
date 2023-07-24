import { MakeSudokuBoard } from "./MakeSudokuBoard";


let hiddenNumbers = [[],[],[],[],[],[],[],[],[]] 

export const MakeSudoku = function(emptynums) {
    const board = MakeSudokuBoard()
    const countOfEmptyItems = Math.ceil(Math.random() * 10 + emptynums);
    let counter = 0;
  
    firstLoop: for (let i = 0; counter < countOfEmptyItems; i++) {
      if (i === 9) {  
        i = 0;
      }
      
  
      let row = board[i];
        for (let idx = 0; counter < countOfEmptyItems; idx++) {
        if (Math.random() > 0.85 && Math.random() < 0.88 && row[idx] !== 0) {
          hiddenNumbers[i][idx] = row[idx]
          row[idx] = 0;
          counter++;
        }
        if (idx === 8) {
          continue firstLoop;
        }
      }
    }   
    return board;
  }

  