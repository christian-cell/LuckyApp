import React, { useState } from 'react';
import { Link, Redirect ,NavLink } from 'react-router-dom';
import './Navegation.scss';
import Home from '../../ImgAppLucky/barraperfil/Home.png';
import Ubicacion from '../../ImgAppLucky/barraperfil/Ubicacion.png';
import mascota from '../../ImgAppLucky/barraperfil/mascota.png';
import foto from '../../ImgAppLucky/barraperfil/foto.png';
import plus from '../../ImgAppLucky/plus.jpeg';
import perroSecundario from '../../ImgAppLucky/iconosAnimales/perroSecundario.png'


export default function Navegation() {
    const profile = JSON.parse(localStorage.getItem('usuario'));
    

    return (

        <footer>

            <div className="nav-container" >


                <Link to = "/home" >
                    <div className="image-container" /* activeClassName="main-nav-active" */ >
                        <img className="nav-image" src={Home} alt="" />
                    </div>

                </Link>





                <Link to="/mapinfo">
                    <div className="image-container" >
                        <img className="nav-image" src={Ubicacion} alt="" />
                    </div>

                </Link>

                <NavLink to="/misMascotas" activeClassName="main-nav-active" >
                    <div className="image-container" >
                        <img className="nav-image"
                            
                            src={mascota} alt=""
                            
                        />
                    </div>

                </NavLink>

                <Link to="/perfil">
                    <div className="image-container2" >
                        <img className="nav-image" src={profile.imagen} alt="" />
                    </div>

                </Link>


                <Link to="/plus">
                    <div className="image-container" >
                        <img className="nav-image" src={plus} alt="" />
                    </div>

                </Link>




                {/* <Link to="/map">Mapa</Link>
<Link to="/adoption">Estado de adopcion</Link>
<Link to="/profile">Perfil</Link>
<Link to="/more">Mas</Link> */}
            </div>

        </footer>
    )
}

