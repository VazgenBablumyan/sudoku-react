import React from 'react'
import { useState } from 'react';

export default function InputField({ onPlay} ) {
    const[inputWord, setInputWord] = useState('');

    const handleInputChange = (event) => {
      setInputWord(event.target.value);
    };



    const handlePlay = () => {
      onPlay(inputWord);
      setInputWord('');
    }
    

  return (
    <div>
       <input type="text" value={inputWord} onChange={handleInputChange} />
        <button onClick={handlePlay}>Play</button>
    </div>
  )
}

