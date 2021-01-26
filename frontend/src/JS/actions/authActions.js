import axios from 'axios' ;
import {REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, LOGIN_USER , LOGIN_USER_SUCCESS , LOGIN_USER_FAIL , GET_PRIFILE , GET_PROFILE_SUCCESS , GET_PROFILE_FAIL ,LOGOUT } from '../constants/actions-types';

export const  register = ({email , password,name,lastName,adress,numTel}) => async dispatch => {





try {
const {data} = await axios.post('/api/auth/register',{email,password,name,lastName,adress,numTel});
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload : data
    })


}
catch(error) {
    dispatch({
        type : REGISTER_USER_FAIL ,
        payload :error.response.data
    })
}


}




 export const login = ({ email,password}) => async dispatch =>{

dispatch({

        type :LOGIN_USER
})

try {

const {data} = await axios.post( '/api/auth/login',{email,password});

dispatch({
    type: LOGIN_USER_SUCCESS,
    payload : data.token,
})

} catch(error) {

    dispatch({
      type: LOGIN_USER_FAIL,
      payload:error.response.data

    })


}


} 


export const  getProfile = (token) => async dispatch => {
    dispatch({
    type:GET_PRIFILE,

    })

    try{


      const config = {
          headers: {
            Authorization : token,
          },
      };

      const {data} = await axios.get('/api/auth/me');
       dispatch({
           type:GET_PROFILE_SUCCESS,
           payload:data,
       })

    } catch (error){

      dispatch({
          type:GET_PROFILE_FAIL,
          error: error.response.data
      })

    }


}
export const logout = () => async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };