import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.record}>Records</span>
      <span className={styles.login}>LogIn/SignUp</span>
    </div>
  )
}
