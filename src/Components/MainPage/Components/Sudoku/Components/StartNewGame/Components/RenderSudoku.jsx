import React, { useEffect } from 'react'
import { MakeSudoku } from '../../../Services/MakeSudoku'
import styles from "./RenderSudoku.module.css"
import Rows from './Helpers/Rows'
import uuid4 from 'uuid4'
import { getBoardToSudoku } from '../../../../../../../Redux/Reducer/sudokuSlice'
import { useDispatch, useSelector } from 'react-redux'



export default function RenderSudoku() {
  const sudoku = useSelector((state) => state.sudoku);
  const dispatch=useDispatch()

  const board = sudoku.board.length>2 ? sudoku.board:MakeSudoku(15)
console.log(board)
  // useEffect(() => dispatch(getBoardToSudoku({value:board})),[])
  
  return (
    <div  className={styles.board}>
        { 
            board.map((row,i) => <Rows key={ uuid4() } i={ i } row={ row } />)
        }
    </div>
  )
}
