import React from 'react'
import styles from "./StartNewGame.module.css"
import RenderSudoku from './Components/RenderSudoku'
import { useDispatch, useSelector } from 'react-redux'
import { boardOnScreen, inChoosingMode } from '../../../../../../Redux/Reducer/sudokuSlice'
import { removeStorage } from '../../../../../../helpers/helpers'

export default function StartNewGame() {
  const { sudoku } = useSelector((state) => state.reducer);
  const dispatch = useDispatch()
  return (
    <div className={styles.box}>
      <button
        onClick={() => dispatch(inChoosingMode())}
        className={styles.button}>
        Start New Game
      </button>
      {sudoku.continueOldGame && <button onClick={() => {
        removeStorage("board")
        dispatch(boardOnScreen(15))
        return <RenderSudoku />
      }}
        className={styles.button}>
        Continue
      </button>}
    </div>

  )
}
