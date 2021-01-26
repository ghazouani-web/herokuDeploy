import { ADD_JEANS,JEANS_ERR_REMOVE, ERROR_JEANS_ADD ,JEANS_ERR_GET, REMOVE_JEANS,GET_JEANS , } from "../constants/actionTypes";
import axios from "axios";

export const addJeans = ({
  code,
  genre,
  description,
  quantite,
  couleur,
  prix,
  categorie,
  tailleA,
  tailleB,
  tailleC,
  tailleD,
  tailleE,
  tailleF,
  like,
}) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/jeans/add", {
      code,
      genre,
      description,
      quantite,
      couleur,
      prix,
      categorie,
      tailleA,
      tailleB,
      tailleC,
      tailleD,
      tailleE,
      tailleF,
      like,
 
    });
    dispatch({
      type: ADD_JEANS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_JEANS_ADD,
      payload: error.response.data,
    });
  }
};


export const removeJeans=(id)=> async  dispatch =>{   
  const res = await axios.delete(`/api/jeans/${id}`)

      try{
        
              dispatch({
                  type :REMOVE_JEANS ,
                  payload : id ,
              } , 
  
              )
          }
      
      catch(err){ 
          dispatch( {
              type : JEANS_ERR_REMOVE ,
              payload : {msg : "Error remove" }
      
          })
      }
  }
  export const getJeans=()=>  async dispatch =>{
    try{
        const res= await axios.get("/api/jeans/all")
            dispatch({
                type : GET_JEANS ,
                payload : res.data ,
            })
        }
       
    
    catch(err){ 
        dispatch( {
            type : JEANS_ERR_GET,
            payload : {msg : "Error GET" }
    
        })
    }     
  }