import {TSHIRT_ERR , GET_TSHIRT , REMOVE_TSHIRT , ADD_TSHIRT } from '../constants/actionTypes' ;
import axios from 'axios';
//ADD A NEW Article
//PATH : api/tshirt/add
//RESPONSE : new article 
export const addTshirt = ({
    code,
    genre,
    description,
    quantite,
    couleur,
    prix,
    categorie,
    sizeS ,sizeXS , sizeL , sizeM ,sizeXL ,sizeXXL ,tshirtImg 
  }) => async (dispatch) => {
    try {
      const { data } = await axios.post("/api/tshirt/add", {
        code,
        genre,
        description,
        quantite,
        couleur,
        prix,
        categorie,
        sizeS ,sizeXS , sizeL , sizeM ,sizeXL ,sizeXXL , tshirtImg 
      });
      dispatch({
        type: ADD_TSHIRT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TSHIRT_ERR ,
       
      });
    }
  };


/*************** */
//GET ALL Article
// PATH :/articles
//RESPONSE :articles 



/*************** */
//DELETE article BY ID
//PATH : /api/tshirt/:tshirtID
// export const removeTshirt=(id)=>  (dispatch) =>{
//      axios
//      .remove(`/api/tshirt/${id}`)
//      .then((res)=>(getTshirt()))   
//      .catch((err)=>{
//           alert("Error delete")
//       });
//         };
       
        export const removeTshirt=(id)=> async  dispatch =>{   
        const res = await axios.delete(`/api/tshirt/${id}`)

            try{
              
                    dispatch({
                        type :REMOVE_TSHIRT ,
                        payload : id ,
                    } , 
        
                    )
                }
            
            catch(err){ 
                dispatch( {
                    type : TSHIRT_ERR ,
                    payload : {msg : "Error remove" }
            
                })
            }
        }            
/********** */
//UPDATE ARTICLE BY ID
//PATH : /api/tshirt/all
//RESPONSE : the edited user

export const getTshirt=()=>  async dispatch =>{
try{
    const res= await axios.get("/api/tshirt/all")
        dispatch({
            type : GET_TSHIRT ,
            payload : res.data ,
        })
    }
   

catch(err){ 
    dispatch( {
        type : TSHIRT_ERR ,
        payload : {msg : "Error add" }

    })
}


}
export const editTshirt = (id, formData) => async dispatch => {

    try {
        await axios.put(`/users/current/${id}`, formData)
        dispatch(getTshirt())
    } catch (error) {
        console.error(error)
    }
}