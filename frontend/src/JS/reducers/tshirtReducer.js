import {TSHIRT_ERR, GET_TSHIRT , REMOVE_TSHIRT , ADD_TSHIRT , UPDATE_TSHIRT} from '../constants/actionTypes' ;
const initialState ={
    tshirts :[],
    tshirt :null ,
    loading : true 
};
const tshirtReducer =(state = initialState , action)=> {
    switch(action.type){
        case GET_TSHIRT:
        return {...state , loading :false , tshirts : action.payload };
        case TSHIRT_ERR:
            return {...state , loading : false , tshirts : null}
            case REMOVE_TSHIRT:
                return {
                  ...state,loading :false ,
                  tshirts: state.tshirts.filter((tshirt) => tshirt.id !== action.payload),
                };
        case ADD_TSHIRT:
            return{...state , loading : false , tshirts :[...state.tshirts , action.payload] 
            }
       default : 
       return  state ;
       
    }
};
export default tshirtReducer;