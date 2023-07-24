import React from 'react'



export default function Mode({boardOnScreen,text}) {

  return (
    <div>
          <button onClick={boardOnScreen}> {text} </button>
    </div>
  )
}
