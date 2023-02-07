import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../assets/vlamerica-logo.png';
class Navbar extends Component {
    state = {  } 
    

    render() { 
        return (
            

<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<NavLink  className="navbar-brand" to="/"><img id='logo' className="" src={imgLogo}/></NavLink>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarScroll">
  <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" >
    <li className="nav-item active">
    <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/Cursos">Cursos</NavLink>
    </li>
    {/* <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        Link
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><hr className="dropdown-divider"></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li> */}
    <li className="nav-item">
      <NavLink className="nav-link" to="/Empleados">Team VLA</NavLink> 
    </li>
    <li>
    <NavLink className="nav-link" to="/About">Acerca</NavLink>
    </li>
    <li>
    <NavLink className="nav-link" to="/Contacto">Contacto</NavLink>
    </li>
  </ul>
  <form className="d-flex form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-nav my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>
           
        );
    }
}
 
export default Navbar;