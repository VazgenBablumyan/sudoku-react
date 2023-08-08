import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from "./Login.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { logPage, togleRegist } from '../../../../Redux/Reducer/userSlice'

export default function Login() {
  const dispatch = useDispatch()
  const {users}=useSelector((state)=>state.reducer)
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")

  const handleClick=() => {
    const validName=users.find((user) => user.name===username && user.password===password)
    if(!validName){
        dispatch(logPage({name:username}))
    }
  }
  return (
    <div className={styles.login}>
        <TextField id="standard-basic" 
        className={styles.inputs} 
        required="true" 
        label="name" 
        autoComplete='on' 
        variant="standard" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <TextField id="standard-basic" 
        className={styles.inputs} 
        type="password" 
        required="true" 
        label="Password" 
        variant="standard" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <div className={styles.boxForButton}>
          <Button className={styles.button} 
          variant="outlined"
          onClick={handleClick}
          >Log In</Button>
          <Button className={styles.button} 
          variant="outlined" 
          onClick={() => dispatch(togleRegist())}>Register</Button>
        </div>
    </div>
  )
}
