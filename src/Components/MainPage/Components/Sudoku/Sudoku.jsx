import React, { useEffect } from "react"
import styles from './Sudoku.module.css'
import ChooseMode from './Components/ChooseMode/ChooseMode'
import StartNewGame from './Components/StartNewGame/StartNewGame';
import RenderSudoku from './Components/StartNewGame/Components/RenderSudoku'
import { closeSudoku } from '../../../../Redux/Reducer/sudokuSlice'
import { useDispatch, useSelector } from 'react-redux';
import { setStorage } from "../../../../helpers/helpers";


export default function Sudoku() {
  const dispatch = useDispatch()
  const {sudoku} = useSelector((state) => state.reducer);

  useEffect(() => {
    setStorage("sudoku", sudoku);
  }, [sudoku]);

  return (
    <div className={styles.sudoku}>
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
