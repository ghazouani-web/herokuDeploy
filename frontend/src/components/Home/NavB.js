import React from 'react';
import './NavB.scss';
import { Navbar , Nav ,Form  }from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Search from './Search'

export default function NavB() {
    return (
        <div className="position" >
             <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img src="logoF.svg"   alt="..."/></Navbar.Brand>
    <Nav className="mr-auto">
    <nav className="NavBar">        
      <ul className="menuN">
        
        <li> <Link to="/" >  Home </Link> </li>
      
        
        <li>   <Link to="/About" > About  </Link> </li>
       
       
        <li>  <Link to="/Contact" > Contact  </Link></li>
        
        <li> <Link to="/login" >Sign </Link></li>
     </ul>
   </nav>    
   </Nav>
    <Form inline>
  <Search/>
    </Form>
  </Navbar>
            
        </div>
    )
}
