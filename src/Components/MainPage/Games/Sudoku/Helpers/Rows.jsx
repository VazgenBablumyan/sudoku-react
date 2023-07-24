import React from 'react'
import Box from './Box'
import styles from "./Helpers.module.css"
import uuid4 from 'uuid4'


export default function Rows({row}) {
  const id = uuid4()
  return (
    <div key={id} className={styles.rows}>
        { 
            
            row.map((value) => <Box value={value}/>)
        }
    </div>
  )
}
