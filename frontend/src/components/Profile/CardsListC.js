import React  ,{useEffect} from 'react'  ;
import {Table} from 'react-bootstrap' 
import {useSelector , useDispatch} from 'react-redux' ;
import {getShoes} from '../../JS/actions/chaussureActions'
import CardsC from './Cards/CardsC' 

 

const CardsListC=()=> {
      //use selector to get the state from the store
      const {shoes , loading}= useSelector(state => state.shoesReducer)
      // useDispatch to get a dispatche in the component 
const dispatch = useDispatch();
const getSh =() =>dispatch(getShoes());
useEffect(() => {
    
    getSh();
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
      {shoes.map((shoe , i ) => <CardsC key={shoe._id} shoes={shoe}/> )}    
   </tbody>
   </Table>
            
        </div>  
      
    )
}
export default CardsListC ;