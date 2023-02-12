import React, {Component,Fragment} from 'react';
import car_infraestructura from '../../src/assets/imagenes/car-infraestructura-ti.png';
import car_programacion from '../../src/assets/imagenes/car-programacion.jpg';
import car_cloud from '../../src/assets/imagenes/car-cloud.jpg';
import car_gerencial from '../../src/assets/imagenes/car-gerencial.jpg';
import car_idiomas from '../../src/assets/imagenes/car-idiomas.jpg';

import curso_tecnologia from '../../src/assets/imagenes/curso-tecnologia.jpg';
import curso_idiomas from '../../src/assets/imagenes/curso-idiomas.jpg';
import curso_gerencial from '../../src/assets/imagenes/cursos-gerenciales.jpg';
import curso_para_ninos from '../../src/assets/imagenes/cursos-para-niños.jpg';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


class Cursos extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className=''>
                <div id="carouselExampleCaptions" className="carousel slide fadein" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="2000">
                        <img src={car_infraestructura} class="d-block w-100 fadein" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src={car_programacion} class="d-block w-100 fadeIn" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src={car_cloud} class="d-block w-100 fadein" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src={car_gerencial} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src={car_idiomas} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>

                </div>

                <div class="container mt-3">
                    <h2>Mira nuestro catálogo de Cursos</h2>
                    <br/>
                    {/* <!-- Nav tabs --> */}
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tech">Tecnología</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#idioma">Idiomas</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#gerencia">Gerenciales</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#ninos">Para niños</a>
                        </li>
                    </ul>

                    {/* <!-- Tab panes --> */}
                    <div class="tab-content">
                        <div id="tech" class="container tab-pane active"><br/>
                        <h3>HOME</h3>
                        <p>Lorem  magna aliqua.</p>
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
                        
                
                        </div>

                        <div id="idioma" class="container tab-pane fade"><br/>
                        <h3>Menu 1</h3>
                        <p>Ut enim ad minim .</p>
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
                            
                        </div>


                        <div id="gerencia" class="container tab-pane fade"><br/>
                        <h3>Menu 2</h3>
                        <p>Sed ut perspiciatis unde omnis .</p>

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

                        </div>

                        <div id="ninos" class="container tab-pane fade"><br/>
                        <h3>Menu 2</h3>
                        <p>Sed ut perspiciatis unde omnis .</p>

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

                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}
 
export default Cursos;