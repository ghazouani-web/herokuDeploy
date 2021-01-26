
import {REGISTER_USER ,REGISTER_USER_FAIL ,REGISTER_USER_SUCCESS , LOGIN_USER , LOGIN_USER_SUCCESS , LOGIN_USER_FAIL , GET_PRIFILE , GET_PROFILE_SUCCESS , GET_PROFILE_FAIL  , LOGOUT} from "../constants/actions-types";

const initialState ={

    isLoading: true,
    errors : [],
    user : null,
    token : null,
    isAuth : false,
    profile : {},

}
const userReducer = (state = initialState , {type , payload}) => {
    switch (type){

        case REGISTER_USER : return{
           ...payload,
            ...state,
            isLoading:true
        }

        case REGISTER_USER_FAIL : return {
            ...state,
            isLoading : false,
            errors : payload

        }
        case REGISTER_USER_SUCCESS : return {
            ...state,
            isLoading : false,
            ...payload,
            
        }
        case LOGIN_USER : return {
          ...state,
          isLoading : true,


        }

        case LOGIN_USER_FAIL : return {

          ...state,
          isLoading : false,
          error : payload


        }

        case LOGIN_USER_SUCCESS :  return {

            ...state,
            isLoading : false,
            token : payload,
            
        }

        case GET_PRIFILE : return {

            ...state,
            isLoading : true,

        }

        case GET_PROFILE_SUCCESS : return {

            ...state,
            isLoading : false,
            isAuth : true,
            profile: payload


        }

        case GET_PROFILE_FAIL : return {
         ...state,
         isLoading: false,
         error: payload

        }
        case LOGOUT:
            return {
              ...state,
              isLoading: false,
              user: null,
              isAuth: false,
              token: null,
            };




        default :
        return state

    }
}
export default userReducer;