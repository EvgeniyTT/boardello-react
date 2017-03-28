import React from 'react'
import './styles.css'

const AddBoard = ({ addBoard }) => {
  let input,
    select

  return (
    <div className="new-board">
      <input type="text" ref={ node => { input = node }} />
      <select ref={ node => { select = node }}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <button
        onClick={() => {
          addBoard(input.value, select.value)
          input.value = ''
        }}>+
      </button>
    </div>
  )
}

export default AddBoard