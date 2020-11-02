import React,{useContext} from 'react'

import {GlobalContext} from '../Context/GlobalContext';
import {Transcation} from './Transcation';


export const TranscationHistory = () => {

   const { transcations }=useContext(GlobalContext)

    return (
        <div className="trans-his">
            <h2>Transcation History</h2>
            <hr/>
            <ul className="list">
                {transcations.map(transcation =>(
                <Transcation key={transcation.id} transcation={transcation} />
                ))}
            </ul>
        </div>
    )
}
