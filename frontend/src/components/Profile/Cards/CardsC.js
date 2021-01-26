import React  from 'react'
import './Cards.scss'
import { FiEdit } from 'react-icons/fi';
import {RiDeleteBin7Line} from 'react-icons/ri';
import {useSelector , useDispatch} from 'react-redux' ;
import {removeShoes , getShoes} from '../../../JS/actions/chaussureActions' ;
export default function CardsC({shoes}) {
  
  
  const dispatch = useDispatch(); 
    return (
    <tr>
      <td></td>
      <td >{shoes.code}</td>
      <td >{shoes.genre}</td>
      <td>{shoes.description}</td>
      <td>{shoes.quantite}</td>
      <td>{shoes.couleur}</td>
      <td>{shoes.like}</td>
      <td>{shoes.prix}</td>
      <td>{shoes.pointureA}</td>
      <td>{shoes.pointureB}</td>
      <td>{shoes.pointureC}</td>
      <td>{shoes.pointureD}</td>
      <td>{shoes.pointureE}</td>
      <td>{shoes.pointureF}</td>
      <td> <button onClick={()=>dispatch(removeShoes(shoes._id))&& (dispatch(getShoes())) }>      <RiDeleteBin7Line/></button>
           <button ><FiEdit/></button> </td>
    </tr>

  

    )
}