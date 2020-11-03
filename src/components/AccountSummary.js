import React,{useContext} from 'react'

import {GlobalContext} from '../Context/GlobalContext';

export const AccountSummary = () => {

const {transcations}=useContext(GlobalContext);
// console.log(transcations);

const amounts = transcations.map((transaction) => transaction.amount);

const income =  amounts   
        .filter(item=> item > 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2);

    const expense =(amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2));




    return (
        <div className="account-output">
            <div className="summary-div">
         <h3>Income</h3>
         <p className="summary-plus">
            ${income}
         </p>
            </div>
            <div className="summary-div">
       <h3>Expense</h3>
       <p className="summary-minus">
           ${expense}
       </p>
            </div>
        </div>
    )
}
