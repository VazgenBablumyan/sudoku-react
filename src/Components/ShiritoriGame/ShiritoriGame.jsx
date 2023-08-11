import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import WordList from "../WordList/WordList";
import armenianCities from "../../datas/armenianCities";
import styles from './ShiritoriGame.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setWords,setCurrentWord, setGameOver, setStartingLetter, setScores,  setErrorMessage, setGameEnded,} from '../ShiritoriSlice';

const getLastLetter = (words, startingLetter) => {
  if (words.length > 0) {
    return words[words.length - 1].charAt(words[words.length - 1].length - 1);
  }
  return startingLetter;
};
const ShiritoriGame = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.shiritori.words);
  const currentWord = useSelector((state) => state.shiritori.currentWord);
  const gameOver = useSelector((state) => state.shiritori.gameOver);
  const startingLetter = useSelector((state) => state.shiritori.startingLetter);
  const scores = useSelector((state) => state.shiritori.scores);
  const errorMessage = useSelector((state) => state.shiritori.errorMessage);
  const gameEnded = useSelector((state) => state.shiritori.gameEnded);

  useEffect(() => {
    const alphabet =
      'աբգդեթիլխծկհձղճմնշոչպջսվտցփքօֆ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    dispatch(setStartingLetter(alphabet[randomIndex]));
  }, []);

  const handleInputChange = (event) => {
    dispatch(setCurrentWord(event.target.value));
    dispatch(setErrorMessage(''));
  };

  const handleWordSubmit = () => {
    if (!gameOver) {
      const trimmedCurrentWord = currentWord.trim();
      const firstLetter = trimmedCurrentWord.charAt(0);
      const lastLetter = trimmedCurrentWord.charAt(trimmedCurrentWord.length - 1);
      const lowerCaseFirstLetter = firstLetter.toLowerCase();
      const lowerCaseStartingLetter = startingLetter.toLowerCase();
      const lowerCaseLastWord =
        words.length > 0 ? words[words.length - 1].toLowerCase() : '';

      if (!armenianCities.includes(trimmedCurrentWord)) {
        dispatch(setErrorMessage('Invalid word!'));
      } else if (words.includes(trimmedCurrentWord)) {
        dispatch(setErrorMessage('You already entered this word!'));
        dispatch(setGameOver(true));
      } else if (['զ', 'է', 'ը', 'ժ', 'յ', 'ռ', 'ու', 'և', 'ր'].includes(lastLetter)) {
        dispatch(setGameOver(true));
      } else if (
        words.length === 0 &&
        lowerCaseFirstLetter !== lowerCaseStartingLetter
      ) {
        dispatch(
          setErrorMessage(
            'Word should start with the last letter of the previous word!'
          )
        );
      } else if (
        lowerCaseLastWord &&
        lowerCaseLastWord.charAt(lowerCaseLastWord.length - 1) !==
          lowerCaseFirstLetter
      ) {
        dispatch(
          setErrorMessage(
            'Word should start with the last letter of the previous word!'
          )
        );
      } else {
        dispatch(setWords([...words, trimmedCurrentWord]));
        dispatch(setCurrentWord(''));
        dispatch(setScores({ player: scores.player+ 1 }));      
        dispatch(setErrorMessage(''));
      }
    }
  };
  const restartGame = () => {
    dispatch(setWords([]));
    dispatch(setCurrentWord(''));
    dispatch(setGameOver(false));
    dispatch(setScores({ player: 0 }));
    dispatch(setErrorMessage(''));
  };

  const handleGameEnd = () => {
    dispatch(setGameEnded(true));
    dispatch(setGameOver(true));
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shiritori Game</h1>
      {gameOver ? (
        <div className={styles["restart-button-container"]}>
           <p className={styles["input-container"]}>
            Game Over! You repeated a word, entered an invalid word,  couldn't find a
            word or your word ended with a specified letter, with which doesn't start any Armenian cities names."
          </p>
          <button className={styles["restart-button"]} onClick={restartGame}>
            Restart
          </button>
        </div>
      ) : (
        <div>
          {errorMessage && <p className={styles["error-message"]}>{errorMessage}</p>}
          <InputField
  currentWord={currentWord}
  handleInputChange={handleInputChange}
  handleWordSubmit={handleWordSubmit}
  gameOver={gameOver}
  getLastLetter={() => getLastLetter(words, startingLetter)}
/>
          <button onClick={handleGameEnd} className={styles.btn}>
            I don't know
          </button>
        </div>
      )}

      <div className={styles["word-list"]}>
        <h2 className={styles["list-heading"]}>Scores:</h2>
        <p className={styles["player-score"]}>Player : {scores.player}</p>
      </div>
      <WordList words={words} />
    </div>
  );
};

export default ShiritoriGame;
