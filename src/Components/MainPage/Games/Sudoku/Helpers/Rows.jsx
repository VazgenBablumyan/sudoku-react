import React from 'react'
import Box from './Box'
import styles from "./Helpers.module.css"

export default function Rows({row}) {
  return (
    <div className={styles.rows}>
        { 
            
            row.map((value) => <Box value={value}/>)
        }
    </div>
  )
}
