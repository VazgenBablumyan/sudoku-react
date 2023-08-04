import React, { useState } from 'react'
import Box from './Box/Box'
import styles from './Container.module.css'
import Sudoku from '../Sudoku/Sudoku'

export default function Container() {
const [state,setState] = useState(false)
    const handleStart = () => {
    setState(true)
    }
      if(state){
     return <Sudoku/>
    } else {
      return (
        <div className={styles.container}>
          <Box src = {require('../Images/sudoku.png')} alt="sudoku" handleStart={handleStart}/>
          <Box src = {require('../Images/2048.png')} alt="2048"/>
          <Box src = {require('../Images/shiritori.png')} alt="shiritori"/>
        </div>)}
  }
  

