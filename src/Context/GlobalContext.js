// eslint-disable-next-line
import React,{createContext,useReducer} from 'react';


//import app reducer
import AppReducer from './AppReducer.js';


const InitState =  {
    transcations: [
        {id:1,description:"Income1",amount:1000},
        {id:2,description:"Expense1",amount:-100},
        {id:3,description:"Income2",amount:2000},
        {id:4,description:"Expense2",amount:-200}
    ]
}

export const GlobalContext=createContext(InitState);



// create a provider for Golbal Context
export const GlobalProvider=({children}) =>{
   let [state, dispatch]=useReducer(AppReducer,InitState)



    return(
           <GlobalContext.Provider value={
           {
               transcations: state.transcations,
           }   
           }>
              {children}
           </GlobalContext.Provider>
    )
}
