import {ADD_JEANS ,ERROR_JEANS_ADD , JEANS_ERR_REMOVE , REMOVE_JEANS ,JEANS_ERR_GET,  GET_JEANS} from '../constants/actionTypes';


const initialState = {
    jeans :[] ,
    isLoading : true ,


};

 const jeansReducer=(state = initialState , action)=> {
    switch(action.type){
        case GET_JEANS:
        return {...state , loading :false , jeans : action.payload };
        case JEANS_ERR_GET:
            return {...state , loading : false , jeans : null}
            case REMOVE_JEANS:
                return {
                  ...state,loading :false ,
                  jeans: state.jeans.filter((jean) => jean.id !== action.payload),
                };
        case ADD_JEANS:
            return{...state , loading : false , articles :[...state.jeans , action.payload] 
            }
            
          
       default : 
       return  state ;
       
    }
};

export default jeansReducer;
//=(state=initState ,{type , payload})=>{
//     switch (type) {
//         case GET_JEANS:
//             return {...state , loading :false , jeans : payload };
//             case JEANS_ERR_GET :
//                 return {...state , loading : false , jeans : null}
// case ADD_JEANS :
//     return{...state ,loading:false ,jeans : payload}
// case ERROR_JEANS_ADD  : return {
//      ...state,
//      isLoading : false,
//      errors : payload

//     }
//     case REMOVE_JEANS:
//         return {
//           ...state,loading :false ,
//           jeans: state.jeans.filter((jean) => jean.id !== payload.id),
//         };
//         case JEANS_ERR_REMOVE  : return {
//             ...state,
//             isLoading : false,
//             errors : payload
       
//            }    


//     default:
//     return state;

 
    
