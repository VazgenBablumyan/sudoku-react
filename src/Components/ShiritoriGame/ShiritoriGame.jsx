import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import WordList from "../WordList/WordList";
import armenianCities from "../../datas/armenianCities";
import styles from './ShiritoriGame.module.css'
import { useSelector, useDispatch } from "react-redux";
import {
  updateCurrentWord,
  setErrorMessage,
  setStartingLetter,
  addWord,
  setGameOver,
  setCurrentWord,
  setScores,
  setGameEnded,
} from "../gameActions";

const getLastLetter = (words, startingLetter) => {
  if (words.length > 0) {
    return words[words.length - 1].charAt(words[words.length - 1].length - 1);
  }
  return startingLetter;
};

const ShiritoriGame = () => {
  // const [words, setWords] = useState([]);
  // const [currentWord, setCurrentWord] = useState("");
  // const [gameOver, setGameOver] = useState(false);
  // const [startingLetter, setStartingLetter] = useState("");
  // const [scores, setScores] = useState({ player1: 0 });
  // const [errorMessage, setErrorMessage] = useState("");
  // const [gameEnded, setGameEnded] = useState(false);
  const { currentWord, gameOver } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    const alphabet =
      "աբգդեթիլխծկհձղճմնշոչպջսվտցփքօֆ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    dispatch(setStartingLetter(alphabet[randomIndex]))
  }, []);

  const handleInputChange = (event) => {
    dispatch(updateCurrentWord(event.target.value));
    dispatch(setErrorMessage(""));
  };

  const handleWordSubmit = () => {
    if (!gameOver) {
      const trimmedCurrentWord = currentWord.trim();
      const firstLetter = trimmedCurrentWord.charAt(0);
      const lastLetter = trimmedCurrentWord.charAt(trimmedCurrentWord.length - 1);
      const lowerCaseFirstLetter = firstLetter.toLowerCase();
      const lowerCaseStartingLetter = state.game.startingLetter.toLowerCase();
      const lowerCaseLastWord =
      state.game.words.length > 0 ? state.game.words[state.game.words.length - 1].toLowerCase() : "";
  
      if (!armenianCities.includes(trimmedCurrentWord)) {
        dispatch(setErrorMessage("Invalid word!"))
      } else if (state.game.words.includes(trimmedCurrentWord)) {
        dispatch(setErrorMessage("You already entered this word!"))
        dispatch(setGameOver());
      } else if (["զ", "է", "ը", "ժ", "յ", "ռ", "ու", "և", "ր"].includes(lastLetter)) {
       dispatch(setGameOver());
      } else if (
        state.game.words.length === 0 &&
        lowerCaseFirstLetter !== lowerCaseStartingLetter ||
        lowerCaseLastWord &&
        lowerCaseLastWord.charAt(lowerCaseLastWord.length - 1) !== lowerCaseFirstLetter
      ) {
        dispatch(setErrorMessage(
          "Word should start with the last letter of the previous word!"
        ))
      } else {
        dispatch(addWord((prevWords) => [...prevWords, trimmedCurrentWord]))
        dispatch(setCurrentWord(""))
        dispatch(setScores((prevScores) => ({
          ...prevScores,
          player1: prevScores.player1 + 1,
        })))
        dispatch(setErrorMessage(""))
      }
    }
  };
  

  const restartGame = () => {
    dispatch(addWord([]))
    dispatch(setCurrentWord(""))
    dispatch(setGameOver(false))
    dispatch(setScores({ player1: 0 }))
    dispatch(setErrorMessage(""))
  };

  const handleGameEnd = () => {
    dispatch(setGameEnded(true))
    dispatch(setGameOver(true))
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shiritori Game</h1>
      {gameOver ? (
        <div className={styles["restart-button-container"]}>
           <p>
            Game Over! You repeated a word, entered an invalid word, or couldn't find a
            word.
            {gameEnded
              ? "Game Over! You ended the game by clicking 'I don't know'."
              : "Game Over! You repeated a word, entered an invalid word, or your word ended with a specified letter, with which doesn't start any Armenian cities names."}
          </p>
          <button onClick={restartGame}>Restart</button>
          <button className="restart-button" onClick={restartGame}>
            Restart
          </button>
        </div>
      ) : (
        <div>
          {state.game.errorMessage && <p className={styles["error-message"]}>{errorMessage}</p>}
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
        <p className={styles["player-score"]}>Player : {scores.player1}</p>
      </div>

      <WordList words={words} />
    </div>
  );
};

export default ShiritoriGame;
