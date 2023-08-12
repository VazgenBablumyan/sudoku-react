import React from 'react';
import styles from '../ShiritoriGame/ShiritoriGame.module.css'

const InputField = ({ currentWord, handleInputChange, handleWordSubmit, gameOver, getLastLetter }) => {

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







