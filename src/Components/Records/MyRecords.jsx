
import React from 'react'
import { useSelector } from 'react-redux'
import UserData from './helper/helper'

export default function MyRecords() {
    const {userName}=useSelector((state) => state.reducer.user)
    const {users}=useSelector((state) => state.reducer)
    const user= users.find((user) => userName===user.name)

  return (
    <div>
        {
            user.records.map((record) =>{
                const gameName =record.gameName
                const score = record.score
                return(
                    <UserData gameName={gameName} score={score} />
                )
            })
        }
    </div>

  )
}
