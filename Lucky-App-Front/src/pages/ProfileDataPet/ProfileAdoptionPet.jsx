import React, { useState, useEffect } from 'react';
import maxresdefault from '../../ImgAppLucky/imgProfileDataPet/maxresdefault.png';
import group10 from '../../ImgAppLucky/imgProfileDataPet/group10@2x.png';
import favoritos from '../../ImgAppLucky/ImgResultFilter/favoritos.png';
import compartir from '../../ImgAppLucky/imgProfileDataPet/compartir.png';
import pawprint from '../../ImgAppLucky/imgProfileDataPet/pawprint.png';
import { API } from "../../Shared/Servicios/Api";
// import './ProfileDataPet.scss';
import './ProfileAdoptionPet.scss';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import flecha from '../../ImgAppLucky/flecha-atras.png';
const ProfileDataPet = () => {

    const [datopet, setdatopet] = useState([]);
    const nombre = useParams().nombre;

    useEffect(() => {

        API.get('api/datosMascota/' + nombre).then(res => {

            setdatopet(res.data[0]);


        })

    }, [])
        console.log(datopet.nombre);
        const name = datopet.nombre;
    const requisitos = (datopet.requisitos && datopet.requisitos)
    const tasas = (datopet.tasas && datopet.tasas)
    const queciudad = (datopet.queCiudad && datopet.queCiudad)

    //     API.get('api/datosMascota')
    //   .then(res=> {

    //     setdatopet(response.data[0]);
    //   })
    //   .catch(function (error) {

    //     console.log(error);
    //   } ,[])
    const volver = () => {
        window.location.href = "/resultfilter"
        }
    return (
        <div>
            <div>
                <img style={{ position: 'fixed', top: '0', zIndex: '1000', width: '35px', marginLeft: '15px', marginTop: '5px' }} onClick={volver} src={flecha} alt="" />
            </div>
            <div className="container-profile-pet">
                <div className="img-profile-pet">
                    <img src={datopet.img} alt="" className="imh-profile-prt" />
                </div>
                <div className="charactpet">
                    <div className="imgsex">
                        <img className="imgpetsex" src={group10} alt="" />
                    </div>
                    <div className="data-pet">
                        <div className="name-profile-pet">
                            <span className="span-name-profile">{datopet.nombre}</span>
                        </div>
                        <div className="city-pet-profile">
                            <span className="city-pet-profile">{datopet.ciudad}</span>
                        </div>
                    </div>
                    <div className="icons-pet-profile">
                        <div className="icon-fav">
                            <img className="img-icon-fav" src={favoritos} alt="" />
                        </div>
                        <div className="losd">
                            <img src={compartir} alt="" className="img-load" />
                        </div>
                    </div>


                </div>
                <div className="options-profile">
                    <Link to={'/profilepet/' + datopet.nombre} className="linkopt">
                        <span className="optionsA">Datos</span>
                    </Link>
                    <Link className="saluds" to={'/salud/' + datopet.nombre} >
                        <span className="options">Salud</span>
                    </Link>
                    <span className="optionsd">Adopcion </span>
                </div>
            </div>
            <div className="requisitos-adoption">
                <span className="personalidadd">Requisitos Adopcion</span>
                <p className="">{requisitos && requisitos}</p>
            </div>

            <div className="tasa-adoption">

                <span className="personalidadd">Tasa de adopcion</span>
                <p className="">{tasas && tasas}</p>
            </div>
            <div className="envio-otra-ciudad">

                <span className="personalidadd">¿Se envia a otra ciudad?</span>
                <p className="">{queciudad && queciudad}</p>
            </div>
            <div className="btns">
                <div className="apadrinarprofile">
                    <span className="spapadrina">Apadrinar</span>
                </div>
                <Link to={'/adopcion/' + name} className="linkadopta">
                    <div className="adoptarprofile">
                        <span className="spadopta">Adoptar</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProfileDataPet;