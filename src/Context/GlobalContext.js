// eslint-disable-next-line
import React,{createContext,useReducer} from 'react';


//import app reducer
import AppReducer from './AppReducer.js';


const InitState =  {
    transcations: []
}

export const GlobalContext=createContext(InitState);



// create a provider for Golbal Context
export const GlobalProvider=({children}) =>{
   let [state, dispatch]=useReducer(AppReducer,InitState)

function delTransaction(transcation){ 
   dispatch({
       type: 'DELETE_TRANSCATION',
       payload: transcation  
})
}
function addTransaction(transcation){ 
    dispatch({
        type: 'ADD_TRANSCATION',
        payload: transcation  
 })
 }

    return(
           <GlobalContext.Provider value={
           {
               transcations: state.transcations,
               delTransaction,
               addTransaction
           }   
           }>

              {children}
           </GlobalContext.Provider>
    )
}
