import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import videoprin from '../../src/assets/videos/videobienvenida.mp4';
import curso_tecnologia from '../../src/assets/imagenes/curso-tecnologia.jpg';
import curso_idiomas from '../../src/assets/imagenes/curso-idiomas.jpg';
import curso_gerencial from '../../src/assets/imagenes/cursos-gerenciales.jpg';
import curso_para_ninos from '../../src/assets/imagenes/cursos-para-niños.jpg';
import beneficio_en_vivo from '../../src/assets/imagenes/Virtual-Classsrooms-in-Distance-Learning.png';
import beneficio_cerfificaciones from '../../src/assets/imagenes/certificaciones.png';
import beneficio_trabajos from '../../src/assets/imagenes/job-search.png';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


class Main extends Component {
    state = {  } 
    render() { 
        return (
            <main>
                
                <div className='videoPrincipal'>
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=_YYN782cy7k'
                    className='react-player'
                    loop
                    playing
                    muted
                    width='100%'
                    height='100%'
                    playsinline
                    controls={false} 
                    />

                </div>

                

                <div><br/><br/>
                    <ScrollAnimation animateIn='fadein'>
                    <h1 className='text-orange'>
                    TU CAMINO HACIA EL ÉXITO
                    </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInUp'>
                    <h3 className='text-grey'>con clases 100% virtuales en vivo...</h3>
                    <h4 className='text-grey'>Nuestros Cursos</h4>
                    </ScrollAnimation>
                </div>

                <div className='seg-cursos'>   

                
                <ScrollAnimation animateIn='fadeInUp'>
                <div className='card-deck'>   
                <div className="card" >
                    <img src={curso_tecnologia} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-orange">Cursos de Tecnología</h5>
                        <p className="card-text text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 
                
                <div className="card" >
                    <img src={curso_idiomas} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-orange">Cursos de Idiomas</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 
                
                <div className="card" >
                    <img src={curso_gerencial} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-orange">Cursos Gerenciales</h5>
                        <p className="card-text text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 
                
                <div className="card" >
                    <img src={curso_para_ninos} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-orange">Cursos para Niños</h5>
                        <p className="card-text text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 
                </div>
                </ScrollAnimation>

                
                </div>
                <div className='citas-vla'>
                    <br/>
                    
                    <ScrollAnimation animateIn='fadeInLeft'>
                    <h1 className='text-orange'>
                    ¿Por qué elegir a VLA?
                    </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'>
                    <p className='text-grey'>Aquí vamos un paso más allá y te damos asistencia para conseguir un nuevo empleo, preparándote para trabajar directamente con algunas de las empresas más importantes del mundo. </p>
                    <p className='text-grey'>Con VLA adquieres habilidades profesionales, certificados y títulos en línea. </p>
                    <br/>
                    <hr/>
                    
                    </ScrollAnimation>
                </div>

                <ScrollAnimation animateIn='zoomIn'>
                <h2 className='text-orange'>BENEFICIOS</h2>
                <div className='card-deck container beneficio'>
                    <div className="card" >
                        <div>
                            <img src={beneficio_en_vivo} class="card-img-top" alt="..." />
                        </div>
                    
                    <div className="card-body">
                        <h5 className='text-grey'>Cursos Virtuales 100% En Vivo</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    </div>

                    <div className="card" >
                    <img src={beneficio_cerfificaciones} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className='text-grey'>Certifícaciones Internacionales</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    </div>

                    <div className="card" >
                    <img src={beneficio_trabajos} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className='text-grey'>Ayuda gratis para buscar empleo</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    </div>

                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadein'>
                <h2 className='text-grey'>Lo que nuestros estudiantes dicen de VLA</h2>
                <div className='videos-alumnos container'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=Y-0B0wIGPeY' className='videopersonas' controls={true} />
                    <ReactPlayer url='https://www.youtube.com/watch?v=dKZq3YiJ7Xo' className='videopersonas' controls={true} />
                    <ReactPlayer url='https://www.youtube.com/watch?v=HyEjo_toTbo' className='videopersonas' controls={true} />
                </div>
                </ScrollAnimation>
            </main>
        );
    }
}
 
export default Main;
