import React from 'react';
import './Contact.css';
import {Col , Row} from 'react-bootstrap';
import Signup from './Signup';
import {animateScroll as scroll} from 'react-scroll';
export default function Contact() {
 // const [showSignin, setShowSignin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);
  // const onClickin = () => { setShowSignin(true) ;
  //                          setShowSignup(false);
  //                          scroll.scrollToTop() }
   const onClickup = () => {  
                            setShowSignup(true);
                            scroll.scrollToTop() ; }
    return (
        <div>
        <section id="contact">
        <h1 className="section-header">CONTACT</h1>
        
        <div className="contact-wrapper">        
        <form className="form-horizontal" >
            <div className="form-group">
            
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  />
              </div>
            </div>
            <textarea className="form-control" rows={10} placeholder="MESSAGE" name="message" defaultValue={""} />
            <button className="btn  send-button" id="submit" type="submit" value="SEND">
              <div className="button">
                <i className="fa fa-paper-plane" /><span className="send-text">SEND</span>
              </div>
            </button>
          </form>
          {/*-------------- 

      CONTACT PAGE RIGHT 
    
      ---------------*/} 
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="liste-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Tunisia | BIZERT</span></i></li>
              <li className="liste-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(216) 368-368</a></span></i></li>
              <li className="liste-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">echeri@gmail.com</a></span></i></li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li><a href="/" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true" /></a>
              </li>
              <li><a href="/" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true" /></a>
              </li>
              <li><a href="/" target="_blank" className="contact-icon">
                  <i className="fa fa-facebook" aria-hidden="true" /></a>
              </li>
            </ul>
            <br/>
            <Row>
              
     <Col>
     <div class="but">
       <span class="bttn effect04" data-sm-link-text=" up" target="_blank" onClick={onClickup } > <span>Sign </span> </span>
      
     </div>
     </Col>
     </Row>
          <hr/>
          <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
      { showSignup ? <Signup/> : null }
        </div>
    )
}
