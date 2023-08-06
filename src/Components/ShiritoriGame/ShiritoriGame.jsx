import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import WordList from "../WordList/WordList";
import Shiritori from "../Shiritori/Shiritori";
import armenianCities from "../../datas/armenianCities";

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
  const [scores, setScores] = useState({ player1: 0 }); // Initialize scores
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const alphabet =
      "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտցուփքևօֆ";
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
      const lowerCaseFirstLetter = firstLetter.toLowerCase();
      const lowerCaseStartingLetter = startingLetter.toLowerCase();
      const lowerCaseLastWord = words.length > 0 ? words[words.length - 1].toLowerCase() : "";

      if (words.includes(trimmedCurrentWord)) {
        setErrorMessage("You already entered this word!");
      } else if (words.length === 0 && lowerCaseFirstLetter !== lowerCaseStartingLetter) {
        setErrorMessage(`Your word should start with "${startingLetter}"`);
      } else if (lowerCaseLastWord && lowerCaseLastWord.charAt(lowerCaseLastWord.length - 1) !== lowerCaseFirstLetter) {
        setErrorMessage("Word should start with the last letter of the previous word!");
      } else if (!armenianCities.includes(trimmedCurrentWord)) {
        setErrorMessage("Invalid word!");
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

  return (
    <div>
      <Shiritori startingLetter={startingLetter} />
      {gameOver ? (
        <div>
          <p>
            Game Over! You repeated a word, entered an invalid word, or couldn't find a
            word.
          </p>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <InputField
            currentWord={currentWord}
            handleInputChange={handleInputChange}
            handleWordSubmit={handleWordSubmit}
            gameOver={gameOver}
            getLastLetter={() => getLastLetter(words, startingLetter)}
          />
        </div>
      )}

      <div>
        <h2>Scores:</h2>
        <p>Player 1: {scores.player1}</p>
      </div>

      <WordList words={words} />
    </div>
  );
};

export default ShiritoriGame;
