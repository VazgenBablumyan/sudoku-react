import React from "react";

const GameRules = () => {
  return (
    <div>
      <h2>Rules:</h2>
      <p>
        Welcome to Shiritori! The rules are simple:
        <ul>
          <li>Enter a word that starts with the last letter of the previous word or the starting letter.</li>
          <li>Words must be valid Armenian cities.</li>
          <li>The game ends if a word is repeated or if it ends with one of the specified letters: զ, է, ը, ժ, յ, ռ, ու, և, ր.</li>
        </ul>
      </p>
    </div>
  );
};

export default GameRules;
