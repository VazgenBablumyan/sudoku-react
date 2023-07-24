import React, { useRef } from 'react'
import styles from "./Mode.module.css"



export default function Mode({boardOnScreen,text,clas}) {
let style = styles[clas] 

return (
    <div>
          <button onClick={boardOnScreen} className={style+" "+styles.button}> {text} </button>
    </div>
  )
}
