// eslint-disable-next-line
import React,{useState} from 'react'

export const AddTranscation = () => {

const[description, setDescription]=useState();
const[amount, setAmount]=useState(0);


    return (
        <div className="trans-his">
            <h2>Add New Transcation</h2>
            <hr /> 
            <from>
                <div className="from-control">
                    <label  htmlFor="description">Description</label><br />
                    <input 
                    type="text" 
                    id="description" 
                    placeholder="Type Name" 
                    value={description}
                    onChange={(en) => setDescription(en.target.value)}
                    />
                    

                </div>
                <div className="from-control">
                    <label htmlFor="Amount">Amount</label><br />
                    <input 
                    type="number" 
                    id="Amount" 
                    placeholder="Type Amount" 
                    value={amount}
                    onChange={(en) => setAmount(en.target.value)}
                    />
                </div>
                <br />
                <button className="btn" type="submit">Add Transcation</button>
            </from>
        </div>
    )
}
