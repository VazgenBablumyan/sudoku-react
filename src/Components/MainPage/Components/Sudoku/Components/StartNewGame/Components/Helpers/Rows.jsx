import React from 'react'
import Box from './Components/Box'
import styles from "./Helpers.module.css"
import uuid4 from 'uuid4'


export default function Rows({ calculateFalseCounter, row, i}) {
  return (
    <div  className={styles.rows}>
        { 
            
            row.map((value,idx) => <Box key={uuid4()} calculateFalseCounter={calculateFalseCounter} value={value} idx={idx}/>)
        }
    </div>
  )
}
