import React, { useEffect } from 'react'
import Rows from '../Helpers/Rows'
import { MakeSudoku } from '../Services/MakeSudoku'



export default function RenderSudoku({getBoardToSudoku,sudoku,continueOldGame}) {

  const board = sudoku.board.length>2 ? sudoku.board:MakeSudoku(sudoku.emptyCounts)
  useEffect(()=>getBoardToSudoku(board),[])
    console.log("board",board)
  return (
    <div>
        {
            board.map((row,idx) => <Rows row={row} idx={idx}/>)
        }
    </div>
  )
}
