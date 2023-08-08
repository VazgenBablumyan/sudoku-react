import React, { useRef, useState } from 'react'
import styles from '../Helpers.module.css'

export default function Box({ value, i, idx,calculateFalseCounter }) {

  const [ number, setNumber ] = useState( value )

  const hiddenNumbers = localStorage.getItem("hiddenNumbers")
  const handleChange =(e)=>{
    if(e.target.value.length===1){


    }
//     if(e.target.value==hiddenNumbers[i][idx]){
//       return true
//     } else {
// console.log(4564)    }

  }
  if (value){
    return <input
      type="text" 
      value={ value } 
      className={ styles.manual }
     />
  }
  return <input
  type="text" 
  value={(number === 0) ? "":number} 
  onChange={(e) => {
    setNumber(e.target.value)
    handleChange(e)
  }}
  className={styles.manual}
    />
}
