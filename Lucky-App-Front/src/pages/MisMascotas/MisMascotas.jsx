import React, { useState, useEffect } from 'react';
import Navegation from '../Navegation/Navegation';
import masSecundario from '../../ImgAppLucky/iconosAnimales/masSecundario.png';
import './MisMascotas.scss';
import flechaRosaDerecha from '../../ImgAppLucky/flechaRosaDerecha.png';
import adopcionLineasVerticales from '../../ImgAppLucky/adopcionLineasVerticales.png';
import perroRocky from '../../ImgAppLucky/perroRocky.png';
import catSimba from '../../ImgAppLucky/catSimba.png';
import conejouii from '../../ImgAppLucky/conejouii.png';
import { Carousel } from 'primereact/carousel';
import Perro from '../../ImgAppLucky/iconosAnimales/Perro2.png';
import ave from '../../ImgAppLucky/iconosAnimales/ave.png';
import { API } from '../../Shared/Servicios/Api';
import { Link } from 'react-router-dom';

// import {Carousel} from 'react-elastic-carousel';
export default function MisMascotas() {
    const profile = JSON.parse(localStorage.getItem('usuario'));
    const [allPets, setAllPets] = useState({});

    useEffect(() => {

        API.get(process.env.REACT_APP_BACK_URL + 'api/datosMascota').then(res => {

            setAllPets(res.data);
        

        })

    }, [])

    const finalAllPets = allPets && allPets;
    console.log(finalAllPets)

    const listPets = [];

    for (let i = 0; i < finalAllPets.length; i++) {
        listPets.push(
            <div key={i} className="petContainerSimba" >
                <img className="imagesSimba" src={finalAllPets[i].img} alt="" />

                <div className="simba-container" >

                    <div className="simba"   >
                        <h3 >{finalAllPets[i].nombre}</h3>
                    </div>
                    <div className="ubicacionSimba" >
                        <h6>{finalAllPets[i].ciudad} </h6>

                    </div>
                </div>
            </div>

        );

    }


    const [mascotas] = useState([
        {
            nombre: "Apolo",
            icono:"https://fee.org.es/media/36776/cobra-effect_unintended-consequences.jpg?anchor=center&mode=crop&width=1800&rnd=132268462480000000"
        },
        {
            nombre: "Kiko",
            icono: "http://res.cloudinary.com/dro8tyauo/image/upload/v1603577339/xszxqjshmmodw5ktxfb0.jpg"
        },
        {
            nombre: "Dali",
            icono: "https://www.nationalgeographic.com.es/medio/2018/02/27/panda__1280x720.jpg"

        }
    ]);


    const itemTemplate = (mascota) => 
    <div className="b-primereact-carousel-iconos-adoptados " >
        <img className="b-primeract-carousel-iconos-image"
            src={mascota.icono} alt="imagenes tus animales adoptados" />
        {/* <video  className="b-primeract-carousel-iconos-images" src="https://media.istockphoto.com/videos/giving-highfive-for-treat-video-id1125634425"  controls></video> */}
        <div className="b-primereact-carousel-nombre-container" >
            <span className="namemasco"> {mascota.nombre} </span>
        </div>

    </div>


    return (
        <div className="main-container" >

            <div>
                <div className="span-container"><span> Registra tu mascota aqui </span><span className="imageMore" ><Link  to="petform"> <img src={masSecundario} alt="" /></Link>  </span></div>
            </div>

            {/* <h3 className="span2"> Accede al perfil de tus mascotas  </h3> */}



            <div style={{ margin: 'auto' }} >
                <Carousel className="b-primereact-carousel" value={mascotas} itemTemplate={itemTemplate} > </Carousel>
            </div>

            <div className="estado-adopcion-container" >
                <div className="adopcion-container-header" >
                    Estado de la adopción
                </div>
                <div className="adopcion-container-image" >
                    <button className="button-arrow-container" >
                        <img className="arrow-image" src={flechaRosaDerecha} alt="" />
                    </button>
                </div>
            </div>

            <div className="animales-adopcion-container" >
                <div className="animales-adopcion-header-container" >
                    Animales en adopción
                </div>
                <Link to="/filtro">
                    <div className="adopcion-image-container" >
                        <img className="adopcion-image" src={adopcionLineasVerticales} alt="" />
                    </div>
                </Link>
            </div>

            <div className="gallery-container" >

                <div>
                    {listPets}
                </div>

                <Navegation></Navegation>

            </div>








        </div>

    )
}
