import React, { useEffect } from 'react'
import { MakeSudoku } from '../../../Services/MakeSudoku'
import styles from "./RenderSudoku.module.css"
import Rows from './Helpers/Rows'
import uuid4 from 'uuid4'
import { useDispatch, useSelector } from 'react-redux'
import { boardToBord } from '../../../../../../../Redux/Reducer/boardSlice'
import { getStorage, setStorage } from '../../../../../../../helpers/helpers'



export default function RenderSudoku() {
  const { sudoku } = useSelector((state) => state.reducer);
  const dispatch = useDispatch()
  const board = getStorage("sudokuBoard")
  const sudokuBoard = board ?? MakeSudoku(sudoku.emptyCounts)
  // useEffect(dispatch(boardToBord({value:sudokuBoard})))


  setStorage("sudokuBoard", sudokuBoard )
  return (
    <div className={styles.board}>
      {
        sudokuBoard.map((row, idx) => <Rows key={uuid4()} rowId={idx} row={row} />)
      }
    </div>
  )
}
