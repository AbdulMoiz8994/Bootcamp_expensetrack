import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalContext';


export const Balance = () => {

    const {transcations}=useContext(GlobalContext);

    const amounts = transcations.map(transaction => transaction.amount);
    const balance = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);


    return (
        <div className="totalBalance">
            <h3>Current Balance</h3>
    <h1 className="balance1">${balance}</h1>
        </div>
    )
}
