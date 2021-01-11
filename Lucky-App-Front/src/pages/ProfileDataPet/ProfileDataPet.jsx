import React, { useState, useEffect } from 'react';
import maxresdefault from '../../ImgAppLucky/imgProfileDataPet/maxresdefault.png';
import group10 from '../../ImgAppLucky/imgProfileDataPet/group10@2x.png';
import favoritos from '../../ImgAppLucky/ImgResultFilter/favoritos.png';
import compartir from '../../ImgAppLucky/imgProfileDataPet/compartir.png';
import pawprint from '../../ImgAppLucky/imgProfileDataPet/pawprint.png';
import { API } from "../../Shared/Servicios/Api";
import './ProfileDataPet.scss';
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

    const volver = () => {
        window.location.href = "/misMascotas"
    }


    // console.log(datopet)

    const name= datopet.nombre;
    console.log(nombre)
    const requisitos = (datopet.adopcion && datopet.adopcion.requisitos)

    return (
        <div>

            <div>
                <img style={{position: 'fixed', top: '0', zIndex: '1000', width: '35px', marginLeft: '15px', marginTop: '5px' }} onClick={volver} src={flecha} alt="" />
            </div>

            <div className="container-profile-pet">
                <div className="img-profile-pet">
                    <img className="imagenbicho" src={datopet.img} alt="" className="imh-profile-prt" />
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
                        <div className="icons-pet-profile">
                            <div className="icon-fav">
                                <img className="img-icon-fav" src={favoritos} alt="" />
                            </div>
                            <div className="losd">
                                <img src={compartir} alt="" className="img-load" />
                            </div>
                        </div>


                    </div>


                </div>
                <div className="options-profile">
                    <span className="optionsd">Datos</span>
                    <Link className="linkssalud" to={'/salud/' + datopet.nombre} >
                        <div>
                            <span className="options">Salud</span>
                        </div>
                    </Link>

                    <Link className="linkssalud" to={'/profileadoptionpet/' + datopet.nombre} >
                        <div>
                            <span className="options">Adopcion </span>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Especie</span>
                </div>
                <div className="span-especie">
                    <span className="span2especie">{datopet.especie}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Nacimiento</span>
                </div>
                <div className="span-especie">
                    
                    <span className="span2especie3">{datopet.fechaDeNacimiento}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Sexo</span>
                </div>
                <div className="span-especie">
                    <span className="span2especie4">{datopet.sexo}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Tamaño</span>
                </div>
                <div className="span-especie">
                    <span className="span2especie5">{datopet.tamaño}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Peso</span>
                </div>
                <div className="span-especie">
                    <span className="span2especie6">{datopet.peso}</span>
                </div>

            </div>
            <div className="personalidad">
                <span className="personalidadd">Personalidad</span>
            </div>
            <p className="personalidad-into">{datopet.personalidad}</p>
            <div className="history">
                <span className="optionsdd">Historia</span>
                <article>
                    {datopet.historia}
                </article>
            </div>
            <div className="btns">
                <div className="apadrinarprofile">
                    <span className="spapadrina">Apadrinar</span>
                </div>
                <Link to={'/profileadoptionpet/' + name} className="linkadopta">
                    <div className="adoptarprofile">
                        <span className="spadopta">Adoptar</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProfileDataPet;