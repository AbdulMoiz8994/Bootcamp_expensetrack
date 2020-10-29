import React from 'react'

export const AccountSummary = () => {
    return (
        <div className="account-output">
            <div className="summary-div">
         <h3>Expenses</h3>
         <p className="summary-plus">
             $0.00
         </p>
            </div>
            <div className="summary-div">
       <h3>Income</h3>
       <p className="summary-minus">
           $0.00
       </p>
            </div>
        </div>
    )
}
