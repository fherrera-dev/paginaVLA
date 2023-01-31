import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';


class Router extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <Navbar></Navbar>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/List" component={Listado}></Route>
                    
                    <Route exact path="/Contador" component={Contador}></Route>
                   
                    
                <Footer></Footer>
            
            </BrowserRouter>
        );
    }
}
 
export default Router;