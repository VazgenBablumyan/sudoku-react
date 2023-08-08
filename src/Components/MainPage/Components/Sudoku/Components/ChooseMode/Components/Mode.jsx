import React from 'react'
import styles from "./Mode.module.css"
import { boardOnScreen } from '../../../../../../../Redux/Reducer/sudokuSlice'
import { useDispatch } from 'react-redux'



export default function Mode({text,clas}) {
  const dispatch=useDispatch()
let style = styles[clas] 

return (
    <div>
          <button onClick={() => dispatch(boardOnScreen({value:15}))} className={style+" "+styles.button}> {text} </button>
    </div>
  )
}
