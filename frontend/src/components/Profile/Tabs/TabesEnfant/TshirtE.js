import React, { useState } from "react";
import "../../Tabs.scss";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addTshirt } from "../../../../JS/actions/tshirtActions";
export default function TshirtE() {
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
  const genre = "homme";
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
        sizeS ,sizeXS , sizeL , sizeM ,sizeXL ,sizeXXL ,
   
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
              placeholder="5-6"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleB"
              onChange={(e) => setSizeS(e.target.value)}
              placeholder="7-8"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleC"
              onChange={(e) => setSizeM(e.target.value)}
              placeholder="9-10"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleD"
              onChange={(e) => setSizeL(e.target.value)}
              placeholder="11-12"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleE"
              onChange={(e) => setSizeXL(e.target.value)}
              placeholder="13-14"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleF"
              onChange={(e) => setSizeXXL(e.target.value)}
              placeholder="15-16"
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
  
        <Button variant="light" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  );
}