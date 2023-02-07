import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import videoprin from '../../src/assets/videos/videobienvenida.mp4';
import curso_tecnologia from '../../src/assets/imagenes/curso-tecnologia.jpg';
import curso_idiomas from '../../src/assets/imagenes/curso-idiomas.jpg';
import curso_gerencial from '../../src/assets/imagenes/cursos-gerenciales.jpg';
import curso_para_ninos from '../../src/assets/imagenes/cursos-para-niños.jpg';

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

                <div className=''>

                <div>
                    <h1 className='tituloPrin'>
                    TU CAMINO HACIA EL ÉXITO
                    </h1>
                    <h3>con clases 100% virtuales en vivo...</h3>
                    <h4>Nuestros Cursos</h4>
                </div>

                <div className='card-deck'>
                <div className="card" >
                    <img src={curso_tecnologia} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Cursos de Tecnología</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 

                <div className="card" >
                    <img src={curso_idiomas} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Cursos de Idiomas</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 

                <div className="card" >
                    <img src={curso_gerencial} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Cursos Gerenciales</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 

                <div className="card" >
                    <img src={curso_para_ninos} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Cursos para Niños</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Ver más...</a>
                    </div>
                </div> 


                </div>

                <div className='citas-vla'>
                    <h2>¿Por qué elegir a VLA?</h2>
                    <p>Aquí vamos un paso más allá y te damos asistencia para conseguir un nuevo empleo, preparándote para trabajar directamente con algunas de las empresas más importantes del mundo. </p>
                    <p>Con VLA adquieres habilidades profesionales, certificados y títulos en línea. </p>
                    <h2>BENEFICIOS</h2>
                </div>

                <div className='card-deck container'>
                    <div className="card" >
                        <div><i class="fa-solid fa-house-laptop"></i></div>
                    
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>

                    <div className="card" >
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>

                    <div className="card" >
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>

                </div>

                </div>    
            </main>
        );
    }
}
 
export default Main;
