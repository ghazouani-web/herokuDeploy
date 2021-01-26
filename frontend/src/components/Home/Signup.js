import React, { useState } from "react";
import { Redirect} from "react-router-dom";
import {useDispatch , useSelector } from "react-redux";
import './Signin.css';
import './Contact.css'
import {register} from '../../JS/actions/authActions'
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [numTel, setNumTel] = useState("");
  const [adress, setAdress] = useState("");

  
  const dispatch = useDispatch()

   
   const onSubmit = (e)=> {
     e.preventDefault();
    dispatch( register({email,password, name ,lastName ,numTel,adress}));
   };

  // const isLoading = useSelector (state => state.userReducer.isLoading)
   const user = useSelector((state) => state.userReducer.user);
  //  if(isLoading) <Redirect to ="./load"/>
    if (user) return <Redirect to = "/login"/> 
   return (
       
        <div className="login-box" id="Signup">
          <h2>Sign up</h2>
          <form onSubmit={ onSubmit} >
            <div className="user-box">
              
            </div>

             



            <div className="user-box">
              <input type="email"  
              name= "email"
              placeholder= "email"
              onChange = {e => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            
              
            
            <div className="user-box">
              <input type="password" 
              name= "password"
              placeholder= "password"
              onChange = {e => setPassword(e.target.value)}
              
              />
              <label>Mot de passe</label>
            </div>

            <div className="user-box">
              <input type="name" 
              name= "name"
              placeholder= "name"
              onChange = {e => setName(e.target.value)}
              
              />
              <label>name</label>
            </div>

            <div className="user-box">
              <input type="texte" 
              name= "lastName"
              placeholder= "lastName"
              onChange = {e => setLastName(e.target.value)}
              
              />
              <label>last name </label>
            </div>

            <div className="user-box">
              <input type="texte" 
              name= "numTel"
              placeholder= "numTel"
              onChange = {e => setNumTel(e.target.value)}
              
              />
              <label>numTel </label>
            </div>

            <div className="user-box">
              <input type="adress" 
              name= "adress"
              placeholder= "adress"
              onChange = {e => setAdress(e.target.value)}
              
              />
              <label>adress</label>
            </div>


           <button type = "submit"> submit</button>
          </form>
        </div>
  
    
    )
}
