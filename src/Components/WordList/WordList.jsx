import React from 'react'

export default function WordList({words}) {
  return (
    <div>
      <h2>Word List:</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  )
}

