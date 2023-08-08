import React from 'react'
import styles from './Box.module.css'


export default function Box({ src, alt, handleStart }) {
 
  return (
    <div className={styles.box}>
        <img src={src} className={styles.avatar} alt={alt}/>
        <button className={styles.button} onClick={handleStart}>start new game</button>
    </div>
  )
}
