import React, { useState } from "react";
import "../../Tabs.scss";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addShoes } from "../../../../JS/actions/chaussureActions";
export default function ChaussureH() {
  const [code, setCode] = useState("");
  const [quantite, setQuantite] = useState("");
  const [prix, setPrix] = useState("");
  const [couleur, setCouleur] = useState("");

  const [description, setDescription] = useState("");
  const [pointureA, setPointureA] = useState("");
  const [pointureB, setPointureB] = useState("");
  const [pointureC, setPointureC] = useState("");
  const [pointureD, setPointureD] = useState("");
  const [pointureE, setPointureE] = useState("");
  const [pointureF, setPointureF] = useState("");
  const genre = "homme";
  const categorie = "chaussure";
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addShoes({
        code,
        genre,
        description,
        quantite,
        couleur,
        prix,
        categorie,
        pointureA ,pointureB , pointureC , pointureD ,pointureE ,pointureF 
   
      })
    );
  };
  return (
    <div>
      <h2>Chaussure</h2>
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
              onChange={(e) => setPointureA(e.target.value)}
              placeholder="39"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleB"
              onChange={(e) => setPointureB(e.target.value)}
              placeholder="40"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleC"
              onChange={(e) => setPointureC(e.target.value)}
              placeholder="41"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleD"
              onChange={(e) => setPointureD(e.target.value)}
              placeholder="42"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleE"
              onChange={(e) => setPointureE(e.target.value)}
              placeholder="43"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleF"
              onChange={(e) => setPointureF(e.target.value)}
              placeholder="44"
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
