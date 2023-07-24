import React from 'react'
import RenderSudoku from './RenderSudoku'

export default function StartNewGame({inChoosingMode,sudoku,boardOnScreen}) {
  return (
    <div>
        <button onClick={inChoosingMode}> Start New Game</button>
        {sudoku.isLoaded && <button onClick={() => {
          boardOnScreen()
        return   <RenderSudoku />
        }}> Continue</button>}
    </div>

  )
}
