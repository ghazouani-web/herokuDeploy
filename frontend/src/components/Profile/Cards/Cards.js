import React  from 'react'
import './Cards.scss'
import Modal from 'react-modal';
import {Table} from 'react-bootstrap' 
import { FiEdit } from 'react-icons/fi';
import {RiDeleteBin7Line} from 'react-icons/ri';
import {useSelector , useDispatch} from 'react-redux' ;
import {removeTshirt , getTshirt} from '../../../JS/actions/tshirtActions' ;
export default function Cards({tshirt}) {
  
  const dispatch = useDispatch();

 
    return (
    <tr>
      <td></td>
      <td >{tshirt.code}</td>
      <td >{tshirt.genre}</td>
      <td>{tshirt.description}</td>
      <td>{tshirt.quantite}</td>
      <td>{tshirt.couleur}</td>
      <td>{tshirt.like}</td>
      <td>{tshirt.prix}</td>
      <td>{tshirt.sizeS}</td>
      <td>{tshirt.sizeXS}</td>
      <td>{tshirt.sizeM}</td>
      <td>{tshirt.sizeL}</td>
      <td>{tshirt.sizeXL}</td>
      <td>{tshirt.sizeXXL}</td>
      <td> <button onClick={()=>dispatch(removeTshirt(tshirt._id))&& (dispatch(getTshirt())) }>      <RiDeleteBin7Line/></button>
           <button ><FiEdit/></button> </td>
    </tr>

  

    )
}
    {/* { modalIsOpen ? <EditModal  
    oldTshirt={{
      code :tshirt.code ,
      description:tshirt.description ,
      quantite:tshirt.quantite ,
      couleur :tshirt.couleur,
      prix:tshirt.prix,
      sizeS:tshirt.sizeS,
      sizeXS:tshirt.sizeXS,
      sizeM:tshirt.sizeM,
      sizeL:tshirt.sizeL,
      sizeXL:tshirt.sizeXL,
      sizeXXL:tshirt.sizeXXL,
      _id : tshirt._id
    }}
            />: null} */}