import React from 'react'
import styles from './Records.module'
import { useSelector } from 'react-redux'
import MyRecords from './myRecords'

export default function Records() {
    const { users } = useSelector((state) => state.reducer)

  return <MyRecords />
}
