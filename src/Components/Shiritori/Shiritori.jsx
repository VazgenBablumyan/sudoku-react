import React from "react";

const Shiritori = ({ startingLetter }) => {
  return (
    <div>
      <h1>Shiritori Game</h1>
      <p>
        Enter a word that starts with the last letter of the previous word or the
        starting letter: "{startingLetter}"
      </p>
    </div>
  );
};

export default Shiritori;
