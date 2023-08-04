import React from 'react'
import styles from './ChooseMode.module.css'
import Mode from './Components/Mode'

export default function ChooseMode({boardOnScreen}) {
  return (
    <div className={styles.chooseMode}>
        <Mode clas="easy" boardOnScreen={() => boardOnScreen(15)} text="EASY"/>
        <Mode clas="medium" boardOnScreen={() => boardOnScreen(35)}  text="MEDIUM"/>
        <Mode clas="hard" boardOnScreen={() => boardOnScreen(55)}  text="HARD"/>
    </div>
  )
}
