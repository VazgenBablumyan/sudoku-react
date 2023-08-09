import React from 'react'

export default function UserData({ name, score, gameName }) {
  return (
    <div>
        <span>{name}</span>
        <span>{score}</span>
        <span>{gameName}</span>
    </div>
  )
}
