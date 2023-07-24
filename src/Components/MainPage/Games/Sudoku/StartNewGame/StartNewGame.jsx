import React from 'react'
import RenderSudoku from './RenderSudoku'
import styles from "./StartNewGame.module.css"

export default function StartNewGame({ inChoosingMode, sudoku, boardOnScreen }) {
  return (
    <div className={styles.box}>
      <button onClick={inChoosingMode} className={styles.button}> Start New Game</button>
      {sudoku.isLoaded && <button onClick={() => {
        boardOnScreen()
        return <RenderSudoku />
      }}
        className={styles.button}> Continue</button>}
    </div>

  )
}
