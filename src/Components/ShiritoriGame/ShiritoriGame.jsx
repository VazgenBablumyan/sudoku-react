import React, { useState } from 'react';
import Shiritori from '../Shiritori/Shiritori';
import InputField from '../InputField/InputField';
import WordList from '../WordList/WordList';

export default function ShiritoriGame() {
  const [message, setMessage] = useState('');
  const shiritori = new Shiritori();
  const [words, setWords] = useState([]);

  const handleRestart = () => {
    shiritori.restart();
    setMessage('');
    setWords([]);
  };

  const handlePlay = (inputWord) => {
    const result = shiritori.play(inputWord);

    if (Array.isArray(result)) {
      setWords([...words, ...result]);
      setMessage('');
    } else {
      setMessage(result[0]);
    }
  };

  return (
    <div>
      <h1>ShiritoriGame</h1>
      <button onClick={handleRestart}>Restart</button>
      <InputField onPlay={handlePlay} />
      {shiritori.gameOver ? <WordList words={words} /> : <p>{message}</p>}
    </div>
  );
}
