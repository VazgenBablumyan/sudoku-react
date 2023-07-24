import React, { useEffect, useReducer } from 'react'
import styles from './Sudoku.module.css'
import ChooseMode from './ChooseMode/ChooseMode'
import StartNewGame from './StartNewGame/StartNewGame'
import { reducer } from './Reducer/Reducer'
import RenderSudoku from './StartNewGame/RenderSudoku'
import { MakeSudoku } from './Services/MakeSudoku'

const setStorage = (sudoku) => localStorage.setItem("Sudoku",JSON.stringify(sudoku))
const getStorage = () => JSON.parse(localStorage.getItem("Sudoku"))



export default function Sudoku() {
  const [sudoku, dispatch] = useReducer(reducer, getStorage() ?? {isLoaded:true,emptyCounts:0})

  // const board = MakeSudoku(sudoku.emptyCounts)

  useEffect(() => {
    setStorage(sudoku)
  },[sudoku])
  
  function isLoaded(){
    dispatch({type:"isLoaded"})
  }
  function inChoosingMode(){
    dispatch({type:"inChoosingMode"})
  }
  function boardOnScreen(value){
    return dispatch({type:"boardOnScreen",value})
  }
  function continueOldGame(){
    return dispatch({type:"continueOldGame"})
  }
  function getBoardToSudoku(board){
    dispatch({type:"getBoardToSudoku",board})
  }

  return (
    <div className={styles.sudoku}>
        <h1 onClick={isLoaded} className={styles.closeSudoku}>X</h1>
        {
        sudoku.isLoaded && !sudoku.boardOnScreen && <StartNewGame  boardOnScreen={boardOnScreen} sudoku={sudoku} inChoosingMode={inChoosingMode}/> 
        }
        {
        sudoku.inChoosingMode && !sudoku.isLoaded && <ChooseMode  boardOnScreen={boardOnScreen} />
        }
        {
          sudoku.boardOnScreen && <RenderSudoku  sudoku={sudoku} getBoardToSudoku={getBoardToSudoku} continueOldGame={continueOldGame} EmptyCounts={sudoku.emptyCounts} />
        }
  
    </div>
  )
}
