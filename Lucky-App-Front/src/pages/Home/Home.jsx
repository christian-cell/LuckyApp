import React, { useState } from 'react'
import './Home.scss';
import { Carousel } from 'primereact/carousel';
import Logo from '../../ImgAppLucky/logoFormRegister.png';
import Mascota from '../../ImgAppLucky/barraperfil/mascota.png';
import GalleryComponent from './component/GalleryComponent';
import Perro from './images/perro.jpeg';
import Iguana from './images/iguana.jpeg';
import Chinchilla from './images/chinchilla.jpeg';
import Nav from '../Navegation/Navegation';
import { Link } from 'react-router-dom';


export default function Home() {

    const profile = JSON.parse(localStorage.getItem('usuario'));
    // console.log(profile)

    const [itemsCarousel, setItemsCarousel] = useState([
        {
            titulo: "Estado de la adopcion",
            descripcion: "Revisa el proceso de tus adopciones en curso",
            icono: Mascota
        },
        {
            titulo: "Estado de la adopcion",
            descripcion: "Revisa el proceso de tus adopciones en curso",
            icono: Mascota
        },
        {
            titulo: "Estado de la adopcion",
            descripcion: "Revisa el proceso de tus adopciones en curso",
            icono: Mascota
        }
    ]);

    const [novedades, setNovedades] = useState([
        {
            titulo: "10 Curiosidades sobre las chinchillas",
            img: Chinchilla
        },
        {
            titulo: "Sabes que comen las iguanas",
            img: Iguana
        },
        {
            titulo: "10 lugares para visitar con tu perro en Madrid",
            img: Perro
        }
    ]);

    const itemTemplate = (itemsCarousel) => 
       <Link style={{textDecoration:"none"}}to ="/estadoadopcion">
        <div className="content-row background-carousel">
            <span><img className="img-size" src={itemsCarousel.icono} /></span>
            <div className="div-content-text">
                <h4>{itemsCarousel.titulo}</h4>
                <p>{itemsCarousel.descripcion}</p>
            </div>
        </div>
        </Link>
     
    return (
        <>
            <div className="logo">
                <img src={Logo} />
            </div>
            
            <div className="msg-bienvenido">
                <h3>¡Hola {profile.nombreApellidos}!</h3>
            </div>

            <div>
                {/* Carrusel con la adopcion */}
                <Carousel value={itemsCarousel} itemTemplate={itemTemplate}/>
            </div>

            <hr/>

            {/* <div className="linea-separacion"></div> */}

            <div className="espacio-final">
                <GalleryComponent novedades={novedades}/>
            </div>

            <div>
                <Nav/>
            </div>

        </>
    )
}
