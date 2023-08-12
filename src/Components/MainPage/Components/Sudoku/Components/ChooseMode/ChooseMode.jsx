import React from 'react'
import styles from './ChooseMode.module.css'
import Mode from './Components/Mode'
import { boardOnScreen } from '../../../../../../Redux/Reducer/sudokuSlice'
import { useDispatch } from 'react-redux'

export default function ChooseMode() {
  const dispatch = useDispatch()

  return (
    <div className={styles.chooseMode}>
      <Mode clas="easy" emtyNums={15} handleClick={() => dispatch(boardOnScreen({ value: 15 }))} text="EASY" />
      <Mode clas="medium" emtyNums={35} handleClick={() => dispatch(boardOnScreen({ value: 35 }))} text="MEDIUM" />
      <Mode clas="hard" emtyNums={55} handleClick={() => dispatch(boardOnScreen({ value: 55 }))} text="HARD" />
    </div>
  )
}
