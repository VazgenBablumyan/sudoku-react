import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentWord,setErrorMessage,setGameOver,} from '../ShiritoriSlice';
import styles from '../ShiritoriGame/ShiritoriGame.module.css'
import { Container } from '@mui/material';

const InputField = ({ currentWord, handleInputChange, handleWordSubmit, gameOver, getLastLetter }) => {
  const dispatch = useDispatch();
  const startingLetter = useSelector((state) => state.shiritori.startingLetter);

  return (
    <div className={styles['input-container']}>
      <p className={styles['p']}>
        Your word should start with "{getLastLetter()}"
      </p>
      <input
        type="text"
        value={currentWord}
        onChange={handleInputChange}
        disabled={gameOver}
        className={styles.input}
      />
      <button onClick={handleWordSubmit} disabled={gameOver} className={styles.button}>
        Submit
      </button>
    </div>
  );
}

export default InputField;







