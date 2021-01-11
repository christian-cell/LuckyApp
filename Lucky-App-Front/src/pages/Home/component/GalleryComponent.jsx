import React, { useState } from 'react';
import './GalleryComponent.scss';

function GalleryComponent(props){


    return(
        <>
            <h3 className="titulo-seccion">Novedades</h3>
            {props.novedades.map((novedad, i) => 
                <div key={i} className="content-div">
                    <div className="content-div__notice">
                        <img src={novedad.img}/>
                        <h3>{novedad.titulo}</h3>
                    </div>
                </div>
            )}
        </>
    );

}


export default GalleryComponent;