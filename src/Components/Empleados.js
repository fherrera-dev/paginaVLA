import React, { Component, Fragment } from 'react';
import axios, { Axios } from 'axios';

class Empleados extends Component {
    state = { 
        users:[]
     }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data;
            //console.log(persons);
            this.setState({users});
        })
    }
    
    render() { 
        return (

            <Fragment>

                <p>Componente Listado</p>
                <table className='table'> 
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Nombre</td>
                                <td>Usuario</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Dirección</td>
                            </tr>
                            
                        </thead>


                    {/* Opcion 2 */}
                    {this.state.users.map(data =>
                    <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.address.city}</td>
                        </tr>
                    </tbody>
                        
                    )}


                </table> 





            </Fragment>

        );
    }
}
 
export default Empleados;