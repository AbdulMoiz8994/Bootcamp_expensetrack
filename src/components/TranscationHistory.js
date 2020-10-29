import React from 'react'

export const TranscationHistory = () => {
    return (
        <div className="trans-his">
            <h2>Transcation History</h2>
            <hr/>
            <ul className="list">
             <li className="plus">
               Project 1 Icome
               <span>$1,000</span>
               <button className="delete-button">X</button>
             </li>
             <li className="minus">
                Project 1 Salary
                <span>-$500</span>
                <button className="delete-button">X</button>
             </li>
            </ul>
        </div>
    )
}
