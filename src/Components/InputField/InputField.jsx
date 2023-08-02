import React from 'react'

export default function InputField({ value, onChange, onSubmit }) {

  return (
    <div>
        <input value={value}
        onChange={onChange}
        placeholder="Enter a word...">
        </input>
        <button onClick={onSubmit}>Submit</button>
    </div>
  )
}
