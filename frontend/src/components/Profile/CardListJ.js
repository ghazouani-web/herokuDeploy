import React  ,{useEffect} from 'react'  ;

import {Table} from 'react-bootstrap' 
import {useSelector , useDispatch} from 'react-redux' ;
import {getJeans} from '../../JS/actions/jeansActions'
import CardsJ from './Cards/CardsJ' 

 

const CardListJ=()=> {
      //use selector to get the state from the store
      const {jeans , loading}= useSelector(state => state.jeansReducer)
  
      // useDispatch to get a dispatche in the component 
const dispatch = useDispatch();
const getJean =() =>dispatch(getJeans());
useEffect(() => {
    
    getJean();
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
  
      {jeans.map((jean , i ) => <CardsJ key={jean._id} jean={jean}/> )}    
   </tbody>
   </Table>
            
        </div>  
      
    )
}
export default CardListJ ;