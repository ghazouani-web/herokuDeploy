import React, { useState } from "react";
import { Redirect} from "react-router-dom";
import {useDispatch , useSelector } from "react-redux";
import {login} from '../../JS/actions/authActions'
import './Signin.css';
import './Contact.css'


export default function Signin() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const user = useSelector((state) => state.userReducer.user);
  const token = useSelector((state) => state.userReducer.token);
  if (user) return <Redirect to="/login" />;
  if (token) return <Redirect to="/DashboardE" />;
    
    return (
       
        <div className="login-box">
          <h2>Sign in</h2>
          <form onSubmit={ onSubmit} >
            <div className="user-box">
              <input   
                 type="email"  
                 name= "email"
                 placeholder= "email"
                 onChange = {e => setEmail(e.target.value)}
              
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input 
              
              type="password" 
              name= "password"
              placeholder= "password"
              onChange = {e => setPassword(e.target.value)}
              
              />
              <label>Password</label>
            </div>
       
           
            <button type = "submit"> submit</button>
          </form>
        </div>
  
    
    )
}
