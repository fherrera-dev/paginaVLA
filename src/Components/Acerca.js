import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';

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
                </div>
            </Fragment>
        );
    }
}
 
export default Acerca;
