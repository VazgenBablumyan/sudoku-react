import React from 'react'
import Header from '../Header/Header'
import styles from './MainPage.module.css'
import Container from './Games/Container/Container'

export default function MainPage() {
  return (
    <div id ="main"className={styles.main}>
        <Header />
        <Container />

    </div>
  )
}
