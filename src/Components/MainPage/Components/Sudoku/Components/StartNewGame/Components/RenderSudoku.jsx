import React from 'react'
import { MakeSudoku } from '../../../Services/MakeSudoku'
import styles from "./RenderSudoku.module.css"
import Rows from './Helpers/Rows'
import uuid4 from 'uuid4'
import { useDispatch, useSelector } from 'react-redux'
import { boardToBord } from '../../../../../../../Redux/Reducer/boardSlice'
import { setStorage } from '../../../../../../../helpers/helpers'



export default function RenderSudoku() {
  const { sudoku, board } = useSelector((state) => state.reducer);
  const dispatch = useDispatch()
  console.log(board)
  console.log(board.sudokuBoard)
  const sudokuBoard = board.sudokuBoard.length > 2 ? board.sudokuBoard : MakeSudoku(sudoku.emptyCounts)
  // dispatch(boardToBord({ value: sudokuBoard }))
  console.log(sudokuBoard)


  setStorage("board", board)
  return (
    <div className={styles.board}>
      {
        sudokuBoard.map((row, i) => <Rows key={uuid4()} i={i} row={row} />)
      }
    </div>
  )
}
