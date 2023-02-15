import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
import copa from '../../src/assets/imagenes/emp-copa-airlines.jpg';
import fujitsu from '../../src/assets/imagenes/emp-Fujitsu-Logo.png';
import auxis from '../../src/assets/imagenes/emp-auxis.png';
import cable_onda from '../../src/assets/imagenes/emp-Cable_Onda.jpg';
import concentrix from '../../src/assets/imagenes/emp-concentrix-site-1.jpg';
import rocca from '../../src/assets/imagenes/emp-rocca.png';
import imgLogo from '../assets/vlamerica-logo.png';
import beneficiosimg from '../assets/imagenes/beneficios.png';

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Acerca extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div>
                <div className='margenNav'></div>
                <div className='videoPrincipal'>
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=dt63H3UPaXU'
                    className=''
                    playing
                    
                    controls={true}
                    width='100%'
                    height='100%'
                    
                    
                    />

                </div>
                <br/>
                <div className='row section'>
                    <div className='col-md-4 col-sm-12'>
                    <ScrollAnimation animateIn='fadein'>
                        <h2 className='text-orange'>VLA Academy</h2>
                        <img src={imgLogo}/>
                    </ScrollAnimation>
                    </div>

                    <div className='col-md-8 col-sm-12 historia'>
                    <ScrollAnimation animateIn='fadein'>
                        <h3 className='text-blue'>Historia</h3>
                        <p className='text-grey'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                         archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde 
                         el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido 
                         usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos 
                         especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en 
                         documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 
                         60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y 
                         más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual 
                         incluye versiones de Lorem Ipsum.</p>
                         <p className='text-grey'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                         archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde 
                         el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido 
                         usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos 
                         especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en 
                         documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 
                         60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y 
                         más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual 
                         incluye versiones de Lorem Ipsum.</p>
                         </ScrollAnimation>
                    </div>

                </div>

                <div>
                <ScrollAnimation animateIn='fadein'>
                    <img src={beneficiosimg}/>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn='fadeInUp'>
                <div className='empresas'>
                    <h2 className='text-grey'>Empresas que confian en VLA</h2>
                    <hr className='line-hr'/>
                    <div className='row'>
                        <div className='col-md-2 col-sm-12 img-emp'>
                            <img  src={copa}/>
                        </div>
                        <div className='col-md-2 col-sm-12 img-emp'>
                            <img src={fujitsu}/>
                        </div>
                        <div className='col-md-2 col-sm-12 img-emp'>
                            <img src={auxis}/>
                        </div>
                        <div className='col-md-2 col-sm-12 img-emp'>
                            <img src={cable_onda}/>
                        </div>
                        <div className='col-md-2 col-sm-12 img-emp'>
                            <img src={concentrix}/>
                        </div>
                        <div className='col-md-2 col-sm-12 img-emp'>
                            <img src={rocca}/>
                        </div>
                    </div>

                </div>
                </ScrollAnimation>
                </div>
            </Fragment>
        );
    }
}
 
export default Acerca;
