import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import WordList from "../WordList/WordList";
import armenianCities from "../../datas/armenianCities";
import styles from './ShiritoriGame.module.css'

const getLastLetter = (words, startingLetter) => {
  if (words.length > 0) {
    return words[words.length - 1].charAt(words[words.length - 1].length - 1);
  }
  return startingLetter;
};

const ShiritoriGame = () => {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [startingLetter, setStartingLetter] = useState("");
  const [scores, setScores] = useState({ player1: 0 });
  const [errorMessage, setErrorMessage] = useState("");
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    const alphabet =
      "աբգդեթիլխծկհձղճմնշոչպջսվտցփքօֆ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    setStartingLetter(alphabet[randomIndex]);
  }, []);

  const handleInputChange = (event) => {
    setCurrentWord(event.target.value);
    setErrorMessage("");
  };

  const handleWordSubmit = () => {
    if (!gameOver) {
      const trimmedCurrentWord = currentWord.trim();
      const firstLetter = trimmedCurrentWord.charAt(0);
      const lastLetter = trimmedCurrentWord.charAt(trimmedCurrentWord.length - 1);
      const lowerCaseFirstLetter = firstLetter.toLowerCase();
      const lowerCaseStartingLetter = startingLetter.toLowerCase();
      const lowerCaseLastWord =
        words.length > 0 ? words[words.length - 1].toLowerCase() : "";
  
      if (!armenianCities.includes(trimmedCurrentWord)) {
        setErrorMessage("Invalid word!");
      } else if (words.includes(trimmedCurrentWord)) {
        setErrorMessage("You already entered this word!");
        setGameOver(true);
      } else if (["զ", "է", "ը", "ժ", "յ", "ռ", "ու", "և", "ր"].includes(lastLetter)) {
        setGameOver(true);
      } else if (
        words.length === 0 &&
        lowerCaseFirstLetter !== lowerCaseStartingLetter ||
        lowerCaseLastWord &&
        lowerCaseLastWord.charAt(lowerCaseLastWord.length - 1) !== lowerCaseFirstLetter
      ) {
        setErrorMessage(
          "Word should start with the last letter of the previous word!"
        );
      } else {
        setWords((prevWords) => [...prevWords, trimmedCurrentWord]);
        setCurrentWord("");
        setScores((prevScores) => ({
          ...prevScores,
          player1: prevScores.player1 + 1,
        }));
        setErrorMessage("");
      }
    }
  };
  

  const restartGame = () => {
    setWords([]);
    setCurrentWord("");
    setGameOver(false);
    setScores({ player1: 0 }); 
    setErrorMessage("");
  };

  const handleGameEnd = () => {
    setGameEnded(true);
    setGameOver(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shiritori Game</h1>
      {gameOver ? (
        <div className={styles["restart-button-container"]}>
          {/* ... (rest of the JSX) */}
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
        <p className={styles["player-score"]}>Player : {scores.player1}</p>
      </div>

      <WordList words={words} />
    </div>
  );
};

export default ShiritoriGame;
