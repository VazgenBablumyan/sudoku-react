import React, { useEffect } from 'react'
import styles from './Sudoku.module.css'
import ChooseMode from './Components/ChooseMode/ChooseMode'
import StartNewGame from './Components/StartNewGame/StartNewGame'
import RenderSudoku from './Components/StartNewGame/Components/RenderSudoku'
import { useDispatch } from 'react-redux'
import { isLoaded, sudoku } from '../../../../Redux/Reducer/sudokuSlice'

const setStorage = (sudoku) => localStorage.setItem("Sudoku",JSON.stringify(sudoku))

export default function Sudoku() {
  const dispatch = useDispatch()
  useEffect(() => {
    setStorage(sudoku)
  },[sudoku])
 
    
  
  return (
    <div className={styles.sudoku}>
      
        <button onClick={dispatch(isLoaded())} className={styles.closeSudoku}>X</button>
        {
        sudoku.isLoaded && !sudoku.boardOnScreen && <StartNewGame  /> 
        }
        {
        sudoku.inChoosingMode && !sudoku.isLoaded && <ChooseMode  />
        }
        {
          sudoku.boardOnScreen && <RenderSudoku  />
        }
  
    </div>
  )
}
