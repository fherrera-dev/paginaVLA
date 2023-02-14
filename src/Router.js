import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cursos from './Components/Cursos';
import Main from './Components/Main';
import Acerca from './Components/Acerca';
import Contacto from './Components/Contacto';
import Empleados from './Components/Empleados';
import Formulario from './Components/Formulario';
import ListaEmpleados from './Components/ListaEmpleados';


class Router extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <Navbar></Navbar>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/Cursos" component={Cursos}></Route>
                    <Route exact path="/About" component={Acerca}></Route>
                    <Route exact path="/Contacto" component={Contacto}></Route>
                    <Route exact path="/Empleados" component={Empleados}></Route>
                    <Route exact path="/Frm" component={Formulario}></Route>
                    <Route exact path="/ListaEmpleados" component={ListaEmpleados}></Route>
                    
                    {/* <Route exact path="/Contador" component={Contador}></Route> */}
                   
                    
                <Footer></Footer>
            
            </BrowserRouter>
        );
    }
}
 
export default Router;