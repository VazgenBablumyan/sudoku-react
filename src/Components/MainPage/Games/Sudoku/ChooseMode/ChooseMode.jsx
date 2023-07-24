import React from 'react'
import Mode from './Mode'
import styles from './ChooseMode.module.css'

export default function ChooseMode({boardOnScreen}) {
  return (
    <div className={styles.chooseMode}>
        <Mode className={styles.easy}  boardOnScreen={() => boardOnScreen(13)} text="easy"/>
        <Mode className={styles.medium} boardOnScreen={() => boardOnScreen(35)}  text="medium"/>
        <Mode className={styles.hard} boardOnScreen={() => boardOnScreen(55)}  text="hard"/>
    </div>
  )
}
