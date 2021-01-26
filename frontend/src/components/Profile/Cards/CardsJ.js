import React  from 'react'
import './Cards.scss'
import {Table} from 'react-bootstrap' 
import { FiEdit } from 'react-icons/fi';
import {RiDeleteBin7Line} from 'react-icons/ri';
import {useSelector , useDispatch} from 'react-redux' ;
import {removeJeans , getJeans} from '../../../JS/actions/jeansActions' ;
export default function CardsJ({jean}) {
 
  const dispatch = useDispatch();
 
 
    return (
    
    <tr>
      <td></td>
      <td >{jean.code}</td>
      <td >{jean.genre}</td>
      <td>{jean.description}</td>
      <td>{jean.quantite}</td>
      <td>{jean.couleur}</td>
      <td>{jean.like}</td>
      <td>{jean.prix}</td>
      <td>{jean.tailleA}</td>
      <td>{jean.tailleB}</td>
      <td>{jean.tailleC}</td>
      <td>{jean.tailleD}</td>
      <td>{jean.tailleE}</td>
      <td>{jean.tailleF}</td>
      <td> <button onClick={()=>dispatch(removeJeans(jean._id))&& (dispatch(getJeans())) }>      <RiDeleteBin7Line/></button>
            <a href="m"><FiEdit /></a></td>
    </tr>
  

    )
}
