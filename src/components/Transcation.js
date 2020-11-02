import React,{useContext} from 'react'

// import global context
import {GlobalContext} from '../Context/GlobalContext';


export const Transcation = ({ transcation }) => {
const { delTransaction } =useContext(GlobalContext);


const sign=transcation.amount > 0? "+" : "-";
const transcationType= transcation.amount > 0? "plus" : "minus"; 
  return (

      <li className={transcationType}>
        {transcation.description}
    <span>{sign}${Math.abs (transcation.amount)}</span>
        <button className="delete-button" onClick={() => delTransaction(transcation)}>X</button>
      </li>
  )
}
