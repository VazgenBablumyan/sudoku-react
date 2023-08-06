import React from "react";

const WordList = ({ words }) => {
  return (
    <div>
      <h2>Words:</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;

