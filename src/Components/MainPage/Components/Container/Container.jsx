import React from 'react'
import Box from './Box/Box'
import styles from './Container.module.css'
import Sudoku from '../Sudoku/Sudoku'
import { startSudoku } from '../../../../Redux/Reducer/sudokuSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function Container() {
  const dispatch = useDispatch();
  const sudoku = useSelector((state) => state.sudoku);
  return (
    <div className={styles.container}>
      <Box
       src={require('../Images/sudoku.png')}
       alt="sudoku" 
       handleStart={() => dispatch(startSudoku({value:true}))}
      />
      <Box src={require('../Images/2048.png')} alt="2048" />
      <Box src={require('../Images/shiritori.png')} alt="shiritori" />
      {sudoku.sudokuGame ? <Sudoku /> : null}
    </div>)
}



