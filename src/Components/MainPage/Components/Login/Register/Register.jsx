import React, { useState } from 'react'
import styles from "./register.module.css"
import { Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../../../../Redux/Reducer/usersSlice'
import { logPage } from '../../../../../Redux/Reducer/userSlice'
import { setStorage } from '../../../../../helpers/helpers'

export default function Register() {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.reducer)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  const handleClick = () => {
    const validName = users.find((user) => user.name === username)
    if (!validName && (password === rePassword)) {
      dispatch(addUser({ name: username, password: password }))
      dispatch(logPage({ name: username }))
      setStorage("users", users)
    }
  }
  return (
    <div className={styles.register}>
      <TextField id="standard-basic"
        className={styles.inputs}
        required="true"
        label="Name"
        autoComplete='on'
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <TextField id="standard-basic"
        className={styles.inputs}
        type="password"
        required="true"
        label="Password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <TextField id="standard-basic"
        className={styles.inputs}
        type="password"
        required="true"
        label="Rewrite Password"
        variant="standard"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)} />
      <div className={styles.boxForButton}>
        <Button
          className={styles.button}
          variant="outlined"
          onClick={() => handleClick()}>Register</Button>
      </div>
    </div>
  )
}
