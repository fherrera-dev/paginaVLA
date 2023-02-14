import React,{Fragment, useState} from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const ListaEmpleados = () => {

    const [respuesta,setrespuesta]=useState([]);

    //lo primero que se ejecuta es el equivalente al Oninit
    React.useEffect(()=>{
        //console.warn("Componente en ejecucion")
        obtenerdatos()
        
    },[])

    //funciones

    const obtenerdatos = async ()=>{

        const API = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await API.json();

        setrespuesta(data);
        console.log(respuesta);
     
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120,  

    }, 
        { field: 'Nombre', headerName: 'Nombre', width: 90 },
        { field: 'Usuario', headerName: 'Usuario', width: 90 },
        { field: 'Email', headerName: 'Email', width: 90 },
        { field: 'Teléfono', headerName: 'Teléfono', width: 90 },
        { field: 'Dirección', headerName: 'Dirección', width: 90 },
      ];

      const rows = []
        // [{   
        //     id: 1, 
        //     Nombre: 'Snow', 
        //     Usuario: 'Jon', 
        //     Email: 35,
        //     Teléfono:555,
        //     Dirección:"dfsdfgdg" 
        // }];

    return ( 
        <Fragment>

            <h2 className="lead display-4">Resultado del API</h2>

            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={""
                    // respuesta.map(item=>(
                    //     <div>
                    //         <span key="item.id">{item.id}</span>
                    //         <span key="item.id">{item.name}</span>
                    //         <span key="item.id">{item.username}</span>
                    //         <span key="item.id">{item.email}</span>
                    //         <span key="item.id">{item.phone}</span>
                    //         <span key="item.id">{item.address.city}</span>
                    //     </div>
                    // ))

                }
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>

            {/* <ul>

                {
                    respuesta.map(item=>(
                        <li className="lead" key="item.id"> {item.name} </li>  
                    ))
                    
                }
                
            </ul> */}


        </Fragment>
     );
}
 
export default ListaEmpleados;