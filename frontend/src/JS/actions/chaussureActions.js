import { ADD_SHOES, ERROR_SHOES_ADD , REMOVE_SHOES , SHOES_ERR ,GET_SHOES} from "../constants/actionTypes";
import axios from "axios";

export const addShoes = ({
  code,
  genre,
  description,
  quantite,
  couleur,
  prix,
  categorie,
  pointureA ,pointureB , pointureC , pointureD ,pointureE ,pointureF ,
  like,
}) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/shoes/add", {
      code,
      genre,
      description,
      quantite,
      couleur,
      prix,
      categorie,
      pointureA ,pointureB , pointureC , pointureD ,pointureE ,pointureF ,
      like,
 
    });
    dispatch({
      type: ADD_SHOES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_SHOES_ADD,
      payload: error.response.data,
    });
  }
};
// export const deleteShose = (id) => (dispatch) => {
//   axios
//     .delete(`/api/shoes/${id}`)
//     .then((res) => dispatch(getShoes()))
//     .catch((err) => {
//       alert("error delete");
//     });
// };         
export const removeShoes=(id)=> async  dispatch =>{   
  const res = await axios.delete(`/api/shoes/${id}`)
      try{        
              dispatch({
                  type :REMOVE_SHOES ,
                  payload : id ,
              } , 
  
              )
          }
      
      catch(err){ 
          dispatch( {
              type : SHOES_ERR ,
              payload : {msg : "Error remove" }
      
          })
      }
  }            
  export const getShoes=()=>  async dispatch =>{
    try{
        const res= await axios.get("/api/shoes/all")
            dispatch({
                type : GET_SHOES ,
                payload : res.data ,
            })
        }
       
    
    catch(err){ 
        dispatch( {
            type : SHOES_ERR ,
            payload : {msg : "Error add" }
    
        })
    }
  }