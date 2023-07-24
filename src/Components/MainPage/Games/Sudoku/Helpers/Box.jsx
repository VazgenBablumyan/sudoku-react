import React, { useState } from 'react'
import styles from './Helpers.module.css'

export default function Box({value}) {
  const [number, setNumber]= useState(0)
  const handleChange = (e) => {
    let num = e.nativeEvent.data
    if(0<= +num && +num<=9){
      setNumber(num)
    }
  }
  
  if (value){
    return <input type="text" value={value} className={styles.manual}/>
  }
  return <input type="text"  onChange={handleChange} className={styles.manual}/>
}
