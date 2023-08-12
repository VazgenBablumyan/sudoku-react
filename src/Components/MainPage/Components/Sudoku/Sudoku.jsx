import React, { useEffect } from "react"
import styles from './Sudoku.module.css'
import ChooseMode from './Components/ChooseMode/ChooseMode'
import StartNewGame from './Components/StartNewGame/StartNewGame';
import RenderSudoku from './Components/StartNewGame/Components/RenderSudoku'
import { closeSudoku } from '../../../../Redux/Reducer/sudokuSlice'
import { useDispatch, useSelector } from 'react-redux';


export default function Sudoku() {
  const dispatch = useDispatch()
  const { sudoku } = useSelector((state) => state.reducer);
  
  return (
    <div className={styles.sudoku}>
      <span className={styles.text}>SuDoKu</span>
      <button className={styles.closeSudoku}
        onClick={() => dispatch(closeSudoku({ value: false }))}>X</button>
      {
        sudoku.startNewGame  && <StartNewGame />
      }
      {
        sudoku.inChoosingMode && <ChooseMode />
      }
      {
        sudoku.boardOnScreen && <RenderSudoku />
      }
    </div>
  )
}
