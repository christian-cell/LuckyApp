import React from "react";
import uli1 from "../../ImgAppLucky/ImgResultFilter/uli1.png";
import favoritos from "../../ImgAppLucky/ImgResultFilter/favoritos.png";
import "./ResultFilter.scss";
import Buscador from "../../Shared/Componentes/Buscador/Buscador";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import flecha from '../../ImgAppLucky/flecha-atras.png';

const ResultFilter = () => {

    const filter = JSON.parse(localStorage.getItem('mascotaFiltrada'));


    const volver = () => {
        window.location.href = "/filtro"
    }

    return (
        <div >

            <div>
                 <img style={{position:'fixed',top:'0',zIndex:'1000', width:'35px',marginLeft:'15px',marginTop:'15px'}} onClick={volver} src={flecha} alt=""/>
            </div>

            <div className="buscador">
                {/* <Buscador></Buscador>   */}
            </div>

            <div className="conteiner-filtered">

                {filter && filter.map((pet, i) =>


                    <div key={i} >

                        <Link style={{ textDecoration: 'none' }} to={"/profilepet/" + pet.nombre} >

                            <div className="conteiner-petimg">
                                <img className="petimg" src={pet.img} alt="" />
                                <img className="favoimg" src={favoritos} alt="" />
                            </div>

                            <div className="container-info-pet">
                                <div className="name-pet">
                                    <span className="name-pet-into">{pet.nombre}</span>
                                </div>
                                <div className="city-pet">
                                    <span style={{ fontWeight: 'bolder', color: 'black' }} >{pet.ciudad}</span>
                                </div>
                            </div>

                        </Link>



                    </div>)}

            </div>

        </div>
    );
};

export default ResultFilter;
