import React from 'react'
import styles from './ChooseMode.module.css'
import Mode from './Components/Mode'
import { useDispatch } from 'react-redux'
import { boardOnScreen } from '../../../../../../Redux/Reducer/sudokuSlice'

export default function ChooseMode() {
  const dispatch = useDispatch()
  return (
    <div className={styles.chooseMode}>
      <Mode clas="easy" boardOnScreen={() => boardOnScreen({ value: 15 })} text="EASY" />
      <Mode clas="medium" boardOnScreen={() => boardOnScreen({ value: 35 })} text="MEDIUM" />
      <Mode clas="hard" boardOnScreen={() => boardOnScreen({ value: 55 })} text="HARD" />
    </div>
  )
}
