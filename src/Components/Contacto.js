import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import TextField from '@mui/material/TextField';



class Contacto extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>

                
                <div className='margenNav'></div>

                    <div className='container'>
                    
                    <div className='animate__animated animate__fadeIn'>
                        <h2>Inicia tu camino al Éxito!!<br/> Contactenos para recibir más información.</h2>
                        <div className='videoContacto'>
                        <ReactPlayer 
                        url='https://www.youtube.com/watch?v=QqicjIydT4c'
                        className='react-player'
                        loop
                        playing
                        muted
                        width='100%'
                        height='100%'
                        playsinline
                        controls={false} 
                        playbackRate 
                        />

                        </div>
                    </div>  
                    
                    
                    <div className='frm-contacto'>
                    
                    <h3 className='animate__animated animate__fadeIn'>
                        Damos tus datos y cursos de interes
                    </h3>
                    <hr className='line-hr'/>

                    <form >
                    <div>
                    <TextField id="filled-basic" className="form-control" label="Nombre" variant="filled" />
                    </div><br/>
                    <div>
                    <TextField id="filled-basic" className="form-control" label="Correo" type="email" variant="filled" />
                    </div><br/>
                    <div>
                    <TextField id="filled-basic" className="form-control" label="Teléfono" variant="filled" />
                    </div><br/>
                    <div>
                    <TextField id="filled-basic" className="form-control" label="País" variant="filled" />
                    </div><br/>
                    <div>
                    <TextField
                    id="filled-multiline-static"
                    label="Comentarios..."
                    multiline
                    rows={4}
                    className="form-control"
                    variant="filled"
                    />
                    </div><br/><br/><br/><br/>

                    <div id="accordion">
                        <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTec">
                            Cursos de tecnología
                            </a>
                        </div>
                        <div id="collapseTec" class="collapse" >
                            <div class="card-body" >
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value=""/>Master Front End Web Developer
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value=""/>Marketing Digital
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Cisco
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Bootcamp Cisco CCNA
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Linux Administrator
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Amazon Web Services Cloud Practitioner
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Amazon Web Services Architect
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Microsoft SQL
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Microsoft Azure
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Ciberseguridad
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Programación Python 
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Virtualización VMWare 
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Cisco 
                                </label>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseIdi">
                            Cursos de idiomas
                        </a>
                        </div>
                        <div id="collapseIdi" class="collapse" >
                            <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Inglés Laboral 
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Inglés para Niños A1 | A2
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Portugués Integral
                                </label>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseGen">
                            Cursos Gerenciales
                            </a>
                        </div>
                        <div id="collapseGen" class="collapse" >
                            <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Gerencia de Proyectos
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Microsoft Excel Básico | Intermedio | Avanzado
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Lean Six Sigma Yellow Belt
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Scrum Master Professional
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />ITIL v4
                                </label>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>{/* fin accordion */}
                        
                        <br/>
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </form>
                    

                    </div> {/*  fin frm-contenedor */}

                </div> {/*  fin container */}
            </Fragment>
            
    )}
}
 
export default Contacto;