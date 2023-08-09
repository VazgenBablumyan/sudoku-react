import React from 'react'
import styles from './Header.module.css'
import Login from '../Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { togleLogin } from '../../../../Redux/Reducer/userSlice'
import Register from '../Login/Register/Register'
import MyPage from '../Login/Mypage/MyPage'

export default function Header() {
  const dispatch = useDispatch()
  const login = useSelector((state) => state.reducer.user)
  return (
    <div className={styles.header}>
      {login.log ? <MyPage /> : <button className={styles.login} onClick={() => dispatch(togleLogin())}>LogIn/SignUp</button>}
      {login.togleLogin && <Login />}
      {login.togleRegist && <Register />}
    </div>
  )
}