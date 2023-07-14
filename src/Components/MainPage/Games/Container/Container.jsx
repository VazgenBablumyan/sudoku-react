import React from 'react'
import Box from './Box/Box'
import styles from './Container.module.css'
export default function Container() {
  return (
    <div className={styles.container}>
        <Box src = {require('../Images/sudoku.png')} alt="sudoku"/>
        <Box src = {require('../Images/2048.png')} alt="2048"/>
        <Box src = {require('../Images/shiritori.png')} alt="shiritori"/>

    </div>
  )
}
