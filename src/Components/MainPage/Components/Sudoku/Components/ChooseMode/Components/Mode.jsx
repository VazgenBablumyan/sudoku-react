import React from 'react'
import styles from "./Mode.module.css"




export default function Mode({ text, clas, handleClick }) {
  let style = styles[clas]

  return (
    <div>
      <button onClick={() => handleClick()}
        className={style + " " + styles.button}
      > {text} </button>
    </div>
  )
}
