import React, { useState } from "react";
import "../../Tabs.scss";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addTshirt } from "../../../../JS/actions/tshirtActions";
export default function TshirtF() {
  const [code, setCode] = useState("");
  const [quantite, setQuantite] = useState("");
  const [prix, setPrix] = useState("");
  const [couleur, setCouleur] = useState("");
  const [description, setDescription] = useState("");
  const [sizeS, setSizeS] = useState("");
  const [sizeM, setSizeM] = useState("");
  const [sizeXS, setSizeXS] = useState("");
  const [sizeL, setSizeL] = useState("");
  const [sizeXL, setSizeXL] = useState("");
  const [sizeXXL, setSizeXXL] = useState("");
 
  const genre = "femme";
  const categorie = "tshirt";
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTshirt({
        code,
        genre,
        description,
        quantite,
        couleur,
        prix,
        categorie,
        sizeS ,sizeXS , sizeL , sizeM ,sizeXL ,sizeXXL 
   
      })
    );
  };


  return (
    <div>
      <h2>T-shirt</h2>
      <Form
        onSubmit={onSubmit}
       >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              type="number"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code  de l'article"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="quantite"
              onChange={(e) => setQuantite(e.target.value)}
              placeholder="Quantité par piéces"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="prix"
              onChange={(e) => setPrix(e.target.value)}
              placeholder="Prix"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleA"
              onChange={(e) => setSizeXS(e.target.value)}
              placeholder="XS"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleB"
              onChange={(e) => setSizeS(e.target.value)}
              placeholder="S"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleC"
              onChange={(e) => setSizeM(e.target.value)}
              placeholder="M"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleD"
              onChange={(e) => setSizeL(e.target.value)}
              placeholder="L"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleE"
              onChange={(e) => setSizeXL(e.target.value)}
              placeholder="XL"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleF"
              onChange={(e) => setSizeXXL(e.target.value)}
              placeholder="XXL"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              cols={33} rows="3"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description de jeans .."
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              type="color"
              name="couleur"
              onChange={(e) => setCouleur(e.target.value)}
              placeholder="couleur"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress"></Form.Group>
        </Form.Row>
    {/* <imput type="file" name="tshirtImg" 
     onChange={(e) => setTshirtImg(e.target.files[0])}
    /> */}
        <Button variant="light" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  );
}
// import React , {useState} from 'react'
// import '../../Tabs.scss'; 
// import {Form ,Button , Col , } from 'react-bootstrap';
// import { useDispatch} from 'react-redux' ;
// import {addArticle} from '../../../../JS/actions/articleActions'
// import Uploaded from '../../Uploaded';
// export default function TshirtF() {

//     const dispatch = useDispatch();
//     const addnewArticle = (formData)=>dispatch(addArticle(formData))

  
//   const [form , setForm] = useState({

//     "code" :"" ,
//     "quantite" :"" ,
//     "prix" :"" ,
//     "couleur" :"" ,
//     "description" : "" , 
//     "genre" : "femme" ,
//     "categorie" : "T-shirt" ,
//     "XS" :"" , 
//     "S" :"" ,
//     "M" :"" , 
//     "L" :"" ,
//     "XL":"" ,
//     "XXL" :"" ,

//   })
//   const handelChange =(e)=>{
//     setForm({...form , [e.target.name] : e.target.value})
  
//   }
//   const handelSubmit = (e)=> {
//     e.preventDefault();
//     addnewArticle(form)
//   }
  
//     return (

//          <div>
//          <h2>T-shirt</h2>
//        <Form>
//        <Form.Row>
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control onChange={handelChange}  type="text" name="code" value={form.code} placeholder="Nom de l'article" />
//        </Form.Group>
//        <Form.Group as={Col} controlId="formGridPassword">
//        <Form.Control onChange={handelChange} type="number" name="quantite" value={form.quantite} placeholder="Quantité par piéces" />
//        </Form.Group>
//        <Form.Group as={Col} controlId="formGridPassword">
//        <Form.Control onChange={handelChange} type="number" name="prix" value={form.prix} placeholder="Prix" />
//        </Form.Group>
       
     
     
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control placeholder="numero serie"  onChange={handelChange} value={form.description = "hello"} name="description"  />
//        </Form.Group>
//        </Form.Row>
//        <Form.Row>
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control  name="XS" placeholder="XS" value={form.XS}  onChange={handelChange} />
//        </Form.Group>
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control placeholder="S" name="S"  value={form.S}onChange={handelChange}  />
//        </Form.Group>
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control placeholder="M"  name="M"  value={form.M} onChange={handelChange} />
//        </Form.Group>
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control placeholder="L"  name="L" value={form.L} onChange={handelChange}  />
//        </Form.Group>
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control placeholder="XL" name="XL" value={form.XL} onChange={handelChange}  />
//        </Form.Group>
//        <Form.Group as={Col} controlId="formGridAddress">
//        <Form.Control placeholder="XXL" name="XXL" value={form.XXL} onChange={handelChange}  />
//        </Form.Group>
    
//        </Form.Row>
//         <Uploaded/>
//         <Button variant="light" type="submit" 
// onClick={handelSubmit}
// >
//   Ajouter
// </Button>

// </Form>
//         </div>
//     )
// }