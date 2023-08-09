import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Mypage.module.css'
import { quitPage } from '../../../../../Redux/Reducer/userSlice'

export default function MyPage() {
  const dispatch=useDispatch()
    const {user}=useSelector((state) => state.reducer)
  return (
    <div className={styles.mypage}>
        <b className={styles.username}>{user.username}</b>
        <button className={styles.button}>Records</button>
        <button className={styles.button} onClick={() => dispatch(quitPage())}>Quit</button>

    </div>
  )
}
 