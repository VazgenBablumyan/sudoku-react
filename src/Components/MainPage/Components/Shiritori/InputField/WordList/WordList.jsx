import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../ShiritoriGame/ShiritoriGame.module.css'

const WordList = () => {
  const words = useSelector((state) => state.shiritori.words);

  return (
    <div>
      <h2 className={styles['word-list']}>Words:</h2>
      <ul className={styles['word-list']}>
        {words.map((word, index) => (
          <li key={index} className={styles['word-list']}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;

