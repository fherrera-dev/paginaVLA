import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../assets/vlamerica-logo.png';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>

<footer id="footer" className="footer-1">
    <div classNameName="main-footer widgets-dark typo-light">
    <div className="container">
    <div className="row">
    
      <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="widget subscribe no-box">
    <h5 className="widget-title">VLA Academy<span></span></h5>
    <img src={imgLogo} alt="logo aqui"/>
    <div className="emailfield">
 
    <input className="submitbutton ripplelink" type="submit" value="Solicitar clase gratis"/>
      
    </div>
    </div>
    </div>
    
      
    <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="widget no-box">
    <h5 className="widget-title">Quick Links<span></span></h5>
    <div className='widget-contact'>
    <ul className="thumbnail-widget">
    <li>
        <div className="thumb-content"><NavLink to="/"> Home</NavLink></div> 
    </li>
    <li>
        <div className="thumb-content"><NavLink to="/Cursos"> Cursos</NavLink></div> 
    </li>
    <li>
        <div className="thumb-content"><NavLink  to="/Empleados"> Team VLA</NavLink></div> 
    </li>
    <li>
        <div className="thumb-content"><NavLink to="/About"> Acerca</NavLink></div> 
    </li>
    <li>
        <div className="thumb-content"><NavLink to="/Contacto"> Contacto</NavLink></div> 
    </li>
    </ul>
    </div>
    </div>
    </div>
    
      
    
          <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="widget no-box">
    <h5 className="widget-title">Follow up<span></span></h5>
                <a href="#"> <i className="fa fa-facebook"> </i> </a>
                <a href="#"> <i className="fa fa-twitter"> </i> </a>
                <a href="#"> <i className="fa fa-youtube"> </i> </a>
                <a href="#"> <i className="fa fa-linkedin"> </i></a>
                <a href="#"> <i className="fa fa-whatsapp"> </i></a>
                <a href="#"> <i className="fa fa-instagram"> </i></a>
    </div>
    </div>
    <br/>
      <br/>
    
    
    <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="widget no-box">
    <h5 className="widget-title">Contact Us<span></span></h5>
        <div className='widget-contact'>
            <p><i className="fa fa-envelope"></i> info@vlaacademy.com</p>
            <p><i className="fa fa-phone"></i> CR  +506 4102 3282</p>
            <p><i className="fa fa-phone"></i> USA +1 786-633-4717</p>
        </div>        
    </div>
    
    </div>
    </div>
    </div>
      
    <div className="footer-copyright">
    <div className="container">
    <div className="row">
    <div className="col-md-12 text-center">
    <strong><p>Copyright © Virtual Learning of America 2023</p></strong>
    </div>
    </div>
    </div>
    </div>
    </div>
    </footer>
  {/* <!--footer end--> */}



            </Fragment>
            
        );
    }
}
 
export default Footer;