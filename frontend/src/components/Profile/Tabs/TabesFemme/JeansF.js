import React, { useState } from "react";
import "../../Tabs.scss";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addJeans } from "../../../../JS/actions/jeansActions";
export default function JeansF() {
  const [code, setCode] = useState("");
  const [quantite, setQuantite] = useState("");
  const [prix, setPrix] = useState("");
  const [genre, setGenre] = useState("femme");
  const [categorie, setCategorie] = useState("Jeans");
  const [description, setDescription] = useState("");
  const [tailleA, setTailleA] = useState("");
  const [couleur, setCouleur] = useState("");
  const [tailleB, setTailleB] = useState("");
  const [tailleC, setTailleC] = useState("");
  const [tailleD, setTailleD] = useState("");
  const [tailleE, setTailleE] = useState("");
  const [tailleF, setTailleF] = useState("");
  const [jeansImg, setJeansImg] = useState({});
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addJeans({
        code,
        genre,
        description,
        quantite,
        couleur,
        prix,
        categorie,
        tailleA,
        tailleB,
        tailleC,
        tailleD,
        tailleE,
        tailleF,
      //  like,
        jeansImg,
      })
    );
  };
  const loading = useSelector((state) => state.jeansReducer.loading);
  const jeans = useSelector((state) => state.jeansReducer.jeans);
  // const sendImage = () => {
  //   let formData = new FormData();
  //   console.log(formData);
  //   formData.append("avatar", jeansImg);
  //   console.log("formData", formData);
  //   axios
  //     .post("/api/jeans/add", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => console.log("SUCCESS!!", res))
  //     .catch((e) => console.log("FAILURE!!", e));
  // };
  // const fileOnChange = (e) => {
  //   console.log('e.target.file', e.target.file)
  //   setJeansImg(e.target.files[0]);
  // };
  // const fileOnchange = (e)=>{
  //   setJeansImg(e.target.files[0])

  // } ;

  return (
    <div>
      <h2>Jeans</h2>
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
              onChange={(e) => setTailleA(e.target.value)}
              placeholder="36"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleB"
              onChange={(e) => setTailleB(e.target.value)}
              placeholder="38"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleC"
              onChange={(e) => setTailleC(e.target.value)}
              placeholder="40"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleD"
              onChange={(e) => setTailleD(e.target.value)}
              placeholder="42"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleE"
              onChange={(e) => setTailleE(e.target.value)}
              placeholder="44"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleF"
              onChange={(e) => setTailleF(e.target.value)}
              placeholder="46"
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
      {/* <input
        type="file"
        name="avatar"
        placeholder="selectionner"
        // onChange={fileOnChange}
        onChange={e=> setJeansImg(e.target.files[0])}
        // onClick={sendImage}
      />
      <button  onClick={sendImage}> send </button> */}
    </div>
  );
}
