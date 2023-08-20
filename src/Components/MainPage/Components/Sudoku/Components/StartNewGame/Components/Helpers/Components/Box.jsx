import React, { useState } from 'react'
import styles from '../Helpers.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getStorage, setStorage } from '../../../../../../../../../helpers/helpers'
import { falseNumber } from '../../../../../../../../../Redux/Reducer/sudokuSlice'
import EndGame from '../../../../EndGame/EndGame'

export default function Box({ value, rowId, boxIdx, calculateFalseCounter }) {
  const dispatch = useDispatch()
  const { sudoku } = useSelector((state) => state.reducer)
  const [ number, setNumber ] = useState(value)
  const hiddenNumbers = getStorage("hiddenNumbers")
  const sudokuBoard = getStorage("sudokuBoard")

  const handleChange = (e) => {
    const value = Number(e.target.value)
    if(value){
    if (value.length === 1) {
      console.log(value)
        if(value==hiddenNumbers[rowId][boxIdx]){
          sudokuBoard[rowId][boxIdx]=value*1 
          setStorage("sudokuBoard", sudokuBoard )
        } else {
              sudoku.falses ===3 && dispatch(falseNumber())
        }
        } else if(value.length>1){
          setNumber(value[value.length-1])
        }   
    }}
  if (value) {
    return <input
      type="text"
      defaultValue={value}
      className={styles.manual}
      readOnly
    />
  }
  return <input
    type="text"
    value={(number === 0) ? "" : number}
    onChange={(e) => {
      setNumber(e.target.value)
      handleChange(e)
    }}
    className={styles.manual}
  />
}
