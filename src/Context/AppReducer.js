// eslint-disable-next-line
const AppReducer =(state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSCATION':
        return{
            ...state,
            trancations: state.trancations.filter(transcation =>  transcation.id !== action.payload)  
        }
        default:
            return state;
    }
}

export default AppReducer;
