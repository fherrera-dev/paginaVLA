import React,{Fragment, useState} from "react";
import { useForm } from "react-hook-form";
//import Empleados from "./Empleados";
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Formulario = () => {

    const{register, formState:{errors},handleSubmit}=useForm();

    const [Personas, setpersonas]=useState([]);

    const onSubmit=(data,e)=>{
        console.log(data);
        //alert("funciona");
        setpersonas([
            ...Personas,data
        ])

        //alert(JSON.stringify(Personas));
        e.target.reset()
    }

    return ( 
        <Fragment>
            <br/>
            <div className="container">
            <div className="frm">
            <h2>Registro de Estudiantes</h2>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
            <div className="col-md-4 col-sm-12 mb-3">
                    <label >Cedula:</label>
                        <input 
                            name="cedula"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su cédula..."
                            //validacion --registro nombre
                            {...register("cedula",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:9,message:"La cédula tiene que ser de minimo 9 digitos"}
                            })}
                        />
                        {
                            errors.cedula &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.cedula.message}
                            </div>
                        }
                </div>
                <div className="col-md-4 col-sm-12 mb-3">
                    <label >Nombre:</label>
                        <input 
                            name="nombre"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su nombre..."
                            //validacion --registro nombre
                            {...register("nombre",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:3,message:"El nombre tiene que ser mínimo 3 letras..."}
                            })}
                        />
                        {
                            errors.nombre &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.nombre.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Usuario:</label>
                        <input 
                            name="usuario"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su Usuario..."
                            //validacion --registro nombre
                            {...register("usuario",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.usuario &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.usuario.message}
                            </div>
                        }
                </div>
            </div>   

                <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label >Email:</label>
                        <input 
                            name="email"
                            className="form-control form-control-sm" type="email"  
                            placeholder="Ingresa su email..."
                            //validacion --registro nombre
                            {...register("email",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.email &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.email.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Teléfono:</label>
                        <input 
                            name="telefono"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su telefono..."
                            //validacion --registro nombre
                            {...register("telefono",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.telefono &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.telefono.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Ciudad:</label>
                        <input 
                            name="ciudad"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su ciudad..."
                            //validacion --registro nombre
                            {...register("ciudad",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.ciudad &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.ciudad.message}
                            </div>
                        }
                </div>        


                </div>         
                <button className="btn btn-primary" type="submit">Agregar Estudiante</button>       

            </form>

            </div>
            <table className="table">
                    <thead>
                        <tr>
                            <td>Cédula</td>
                            <td>Nombre</td>
                            <td>Usuario</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Dirección</td>
                        </tr>
                    </thead>
                    <tbody>
                {Personas.map(data =>

                        <tr>
                            <td>{data.cedula}</td>
                            <td>{data.nombre}</td>
                            <td>{data.usuario}</td>
                            <td>{data.email}</td>
                            <td>{data.telefono}</td>
                            <td>{data.ciudad}</td> 
                        </tr> 
                    )}
                </tbody>
               
               </table> 
               </div>

        </Fragment>

     );
}
 
export default Formulario;