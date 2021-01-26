import React  ,{useEffect} from 'react'  ;

import {Table} from 'react-bootstrap' 
import {useSelector , useDispatch} from 'react-redux' ;
import {getTshirt} from '../../JS/actions/tshirtActions'
import Cards from './Cards/Cards' 

 

const CardsList=()=> {
      //use selector to get the state from the store
      const {tshirts , loading}= useSelector(state => state.tshirtReducer)
      console.log(tshirts)
      // useDispatch to get a dispatche in the component 
const dispatch = useDispatch();
const getTsh =() =>dispatch(getTshirt());
useEffect(() => {
    
    getTsh();
  } , []);


 

    return (
      <div className="tabbed">
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
    <td></td>
    <td >Code</td>
      <td >Genre</td>
      <td>Description</td>
      <td>Quantite</td>
      <td>Code Couleur</td>
      <td>Likes</td>
      <td>Prix</td>
      <td>Taille 1</td>
      <td>Taille 2</td>
      <td>Taille 3</td>
      <td>Taille 4</td>
      <td>Taille 5</td>
      <td>Taille 6</td>
      <td>Action </td>
    </tr>
  </thead>

  <tbody>
 
      {tshirts.map((tshirt , i ) => <Cards key={tshirt._id} tshirt={tshirt}/> )}    
   </tbody>
   </Table>
            
        </div>  
      
    )
}
export default CardsList ;