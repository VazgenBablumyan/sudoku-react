import { Button, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from "./Login.module.css"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux'
import { logPage, togleRegist } from '../../../../Redux/Reducer/userSlice'

export default function Login() {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.reducer)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClick = () => {
    const validName = users.find((user) => {

      return user.name === username && user.password == password
    })
    if (validName) {
      dispatch(logPage({ name: username }))
    }
  }
  return (
    <div className={styles.login}>
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
        type={showPassword ? 'text' : 'password'}
        autoComplete='on'
        required="true"
        label="Password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>)
        }} />

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
