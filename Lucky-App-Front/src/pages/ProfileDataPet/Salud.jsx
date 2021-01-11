import React, { useState, useEffect } from 'react';
import maxresdefault from '../../ImgAppLucky/imgProfileDataPet/maxresdefault.png';
import group10 from '../../ImgAppLucky/imgProfileDataPet/group10@2x.png';
import favoritos from '../../ImgAppLucky/ImgResultFilter/favoritos.png';
import compartir from '../../ImgAppLucky/imgProfileDataPet/compartir.png';
import pawprint from '../../ImgAppLucky/imgProfileDataPet/pawprint.png';
import { API } from "../../Shared/Servicios/Api";
import './Salud.scss';
import { Link, useParams } from 'react-router-dom';
import flecha from '../../ImgAppLucky/flecha-atras.png';
const ProfileDataPet = () => {

    const [datopet, setDatopet] = useState([]);
    const nombre = useParams().nombre;
    console.log(nombre);
    // const [pet, setPet] = useState({})
    console.log(nombre)
    useEffect(() => {

        API.get('api/datosMascota/' + nombre).then(res => {

            setDatopet(res.data[0]);


        })

    }, [])


    const saludPetSano = (datopet.sano && datopet.sano);
    const saludPetEsterilizado = (datopet.esterilizado && datopet.esterilizado);
    const saludPetVacunado = (datopet.vacunado && datopet.vacunado);
    const saludPetDesparasitado = (datopet.desparasitado && datopet.desparasitado);
    const saludPetIdentificado = (datopet.identificado && datopet.identificado);
    const saludPetMicrochip = (datopet.microchip && datopet.microchip);

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
                    <Link to={'/profilepet/' + datopet.nombre} className="linkdatos" >
                        <span className="options">Datos</span>
                    </Link>



                    <span className="optionsd">Salud</span>

                    <Link className="linksadopcion" to={'/profileadoptionpet/' + datopet.nombre}>
                        <div className="">
                            <span className="options">Adopcion </span>
                        </div>
                    </Link>


                </div>
            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Vacunado</span>
                </div>
                <div className="span-especie-vacunado">
                    <span className="span2especie">{datopet.vacunado}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Desparasitado</span>
                </div>
                <div className="span-especie-desparasitado">
                    <span className="span2especie3">{datopet.desparasitado}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Sano</span>
                </div>
                <div className="span-especie-sano">
                    <span className="span2especie4">{datopet.sano}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Esterilizado</span>
                </div>
                <div className="span-especie-esterilizado">
                    <span className="span2especie5">{datopet.esterilizado}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">identificado</span>
                </div>
                <div className="span-especie-identificado">
                    <span className="span2especie6">{datopet.identificado}</span>
                </div>

            </div>
            <div className="datapetinfo">
                <div className="especie">
                    <img src={pawprint} alt="" className="iconopata" />
                    <span className="span1especie">Microchip</span>
                </div>
                <div className="span-especie-microchip">
                    <span className="span2especie6">{datopet.microchip}</span>
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



            <div className="tienesQueSaber-container" >
                <span className="tienesQueSaber" >Tienes que saber que <p>{datopet.historia}</p></span>
                
            </div>



            <div className="btns">
                <div className="apadrinarprofile">
                    <span className="spapadrina">Apadrinar</span>
                </div>
                <Link to={'/profileadoptionpet/' + datopet.nombre} className="linkadopta">
                    <div className="adoptarprofile">
                        <span className="spadopta">Adoptar</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProfileDataPet;