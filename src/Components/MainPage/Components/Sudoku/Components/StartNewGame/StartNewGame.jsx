import React from 'react'
import styles from "./StartNewGame.module.css"
import RenderSudoku from './Components/RenderSudoku'
import { useDispatch } from 'react-redux'
import { boardOnScreen, inChoosingMode, sudoku } from '../../../../../../Redux/Reducer/sudokuSlice'

export default function StartNewGame() {
  const dispatch = useDispatch()
  return (
    <div className={styles.box}>
      <button onClick={dispatch(inChoosingMode())} 
      className={styles.button}> Start New Game </button>
      {sudoku.isLoaded && <button onClick={() => {
       dispatch(boardOnScreen())
        return <RenderSudoku />
      }}
        className={styles.button}> Continue</button>}
    </div>

  )
}
