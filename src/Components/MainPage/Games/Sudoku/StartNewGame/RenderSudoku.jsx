import React, { useEffect } from 'react'
import Rows from '../Helpers/Rows'
import { MakeSudoku } from '../Services/MakeSudoku'
import styles from "./RenderSudoku.module.css"



export default function RenderSudoku({getBoardToSudoku,sudoku}) {

  const board = sudoku.board.length>2 ? sudoku.board:MakeSudoku(sudoku.emptyCounts)
  useEffect(()=>getBoardToSudoku(board),[])
  return (
    <div className={styles.board}>
        {
            board.map((row) => <Rows row={row}/>)
        }
    </div>
  )
}
