import { Button, TextField } from '@mui/material'
import React from 'react'
import styles from "./Login.module.css"

export default function Login() {
  return (
    <div className={styles.login}>
        <TextField id="standard-basic" className={styles.inputs} required="true" label="name" autoComplete='on' variant="standard" />
        <TextField id="standard-basic" className={styles.inputs} type="password" required="true" label="Password" variant="standard" />
        <div className={styles.boxForButton}>
          <Button className={styles.button} variant="outlined">Log In</Button>
          <Button className={styles.button} variant="outlined">Sign Up</Button>
        </div>
    </div>
  )
}
