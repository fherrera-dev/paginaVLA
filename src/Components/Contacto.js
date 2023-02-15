import React, { Component, Fragment,useRef } from 'react';
import ReactPlayer from 'react-player';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';



export const Contacto = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs.sendForm('service_o2vchzl', 'template_z04l6wv', form.current, 'KUlKc0KpYO5FazR2g')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Se ha enviado el correo")
            
        }, (error) => {
            console.log(error.text);
        });
    };
        return (
            <Fragment>

                
                <div className='margenNav'></div>

                    <div className='container'>
                    
                    <div className='animate__animated animate__fadeIn'>
                        <h2 className='text-grey'>Inicia tu camino al Éxito!!<br/> Contactenos para recibir más información.</h2>
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
                    
                    <h3 className='animate__animated animate__fadeIn text-grey'>
                        Damos tus datos y cursos de interes
                    </h3>
                    <hr className='line-hr'/>

                    <form ref={form} onSubmit={sendEmail} name="frmContacto">
                    <div>
                    <TextField id="filled-basic" className="form-control" label="Nombre" variant="filled" name='nombre' />
                    </div><br/>
                    <div>
                    <TextField id="filled-basic" className="form-control" label="Correo" type="email" variant="filled" name='email' />
                    </div><br/>
                    <div>
                    <TextField id="filled-basic" className="form-control" label="Teléfono" variant="filled" name='telefono'/>
                    </div><br/>
                    <div>
                    <TextField id="filled-basic" className="form-control" label="País" variant="filled" name='pais' />
                    </div><br/>
                    <div>
                    <TextField
                    id="filled-multiline-static"
                    label="Comentarios..."
                    multiline
                    rows={4}
                    className="form-control"
                    variant="filled"
                    name='message'
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
                                    <input type="checkbox" class="form-check-input" value="Master Front End Web Developer" name='TEC1'/>Master Front End Web Developer
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Marketing Digital" name='TEC2'/>Marketing Digital
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Cisco value" name='TEC3' />Cisco
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Bootcamp Cisco CCNA" name='TEC4' />Bootcamp Cisco CCNA
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Linux Administrator" name='TEC5' />Linux Administrator
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Amazon Web Services Cloud Practitioner" name='TEC6'/>Amazon Web Services Cloud Practitioner
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Amazon Web Services Architect" name='TEC7'/>Amazon Web Services Architect
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Microsoft SQL" name='TEC8'/>Microsoft SQL
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Microsoft Azure" name='TEC9'/>Microsoft Azure
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Ciberseguridad" name='TEC10'/>Ciberseguridad
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Programación Python" name='TEC11'/>Programación Python 
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Virtualización VMWare" name='TEC12'/>Virtualización VMWare 
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
                                    <input type="checkbox" class="form-check-input" value="Inglés Laboral" name='IDI1'/>Inglés Laboral 
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Inglés para Niños A1 | A2" name='IDI2'/>Inglés para Niños A1 | A2
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Portugués Integral" name='IDI3'/>Portugués Integral
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
                                    <input type="checkbox" class="form-check-input" value="Gerencia de Proyectos" name='GER1' />Gerencia de Proyectos
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Microsoft Excel Básico | Intermedio | Avanzado" name='GER2' />Microsoft Excel Básico | Intermedio | Avanzado
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Lean Six Sigma Yellow Belt" name='GER3'/>Lean Six Sigma Yellow Belt
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="Scrum Master Professional" name='GER4'/>Scrum Master Professional
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="ITIL v4" name='GER5' />ITIL v4
                                </label>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>{/* fin accordion */}
                        
                        <br/>
                        <button class="btn btn-primary" type="submit">Contactar</button>
                    </form>
                    

                    </div> {/*  fin frm-contenedor */}

                </div> {/*  fin container */}
            </Fragment>
            
    )}

 
export default Contacto;