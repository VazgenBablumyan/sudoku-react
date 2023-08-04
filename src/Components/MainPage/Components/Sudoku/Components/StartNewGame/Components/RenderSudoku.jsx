import React, { useEffect } from 'react'
import { MakeSudoku } from '../../../Services/MakeSudoku'
import styles from "./RenderSudoku.module.css"
import Rows from './Helpers/Rows'
import uuid4 from 'uuid4'
import { getBoardToSudoku, sudoku } from '../../../../../../../Redux/Reducer/sudokuSlice'



export default function RenderSudoku() {
  const board = sudoku.board.length>2 ? sudoku.board:MakeSudoku(sudoku.emptyCounts)
  useEffect(()=>getBoardToSudoku(board),[])
  return (
    <div  className={styles.board}>
        {
            board.map((row,i) => <Rows key={uuid4()} i={i} row={row}/>)
        }
    </div>
  )
}
