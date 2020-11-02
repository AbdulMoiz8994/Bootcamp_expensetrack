import React from 'react'

export const Transcation = ({ transcation }) => {

const sign=transcation.amount > 0? "+" : "-";
const transcationType= transcation.amount > 0? "plus" : "minus"; 
  return (

      <li className={transcationType}>
        {transcation.description}
    <span>{sign}${Math.abs (transcation.amount)}</span>
        <button className="delete-button">X</button>
      </li>
  )
}
