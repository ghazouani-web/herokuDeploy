import {SHOES_ERR, GET_SHOES , REMOVE_SHOES , ADD_SHOES , UPDATE_SHOES} from '../constants/actionTypes' ;
const initialState ={
    shoes :[] ,
    isLoading : true 
};
const shoesReducer =(state = initialState , action)=> {
    switch(action.type){
        case GET_SHOES:
        return {...state , isLoading :false , shoes : action.payload };
        case SHOES_ERR:
            return {...state , isLoading: false , shoes : null}
            case REMOVE_SHOES:
                return {
                  ...state,isLoading :false ,
                  shoes: state.shoes.filter((shoe) => shoe.id !== action.payload),
                };
        case ADD_SHOES:
            return{...state , isLoading : false , shoes :[...state.shoes , action.payload] 
            }      
       default : 
       return  state ;
       
    }
};
export default shoesReducer;