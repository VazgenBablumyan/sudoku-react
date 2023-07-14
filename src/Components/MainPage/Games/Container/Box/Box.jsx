import React from 'react'
import styles from './Box.module.css'


export default function Box({src, handleStart,alt}) {
  return (
    <div className={styles.box}>
        <img src = {src} className={styles.avatar} alt={alt}/>
        <button className={styles.button} onClick={handleStart}>Start Game</button>
    </div>
  )
}
