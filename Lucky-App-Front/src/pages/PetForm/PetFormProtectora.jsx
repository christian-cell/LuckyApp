import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { API } from '../../Shared/Servicios/Api';
import Logo from '../../ImgAppLucky/logoFormRegister.png';
import './PetFormProtectora.scss';
import Navigator from '../../pages/Navegation/Navegation';
import { Link } from 'react-router-dom';
import Geocode from "react-geocode";
const PetFormProtectora = () => {
//////////////////////geocoding//////////////////////////////////////

const [lati, setLati]=useState()
const [long, setLong]=useState()
const [direct, setDirect]=useState("")

const API =  process.env.REACT_APP_API_KEY
Geocode.setApiKey(API);
Geocode.fromAddress(direct).then(
response => {
  const { lat, lng } = response.results[0].geometry.location;
  setLati(lat);
  setLong(lng);
},
error => {
  console.error(error);
}
);

/////////////////////////////////////////////////////////////////


    const onSubmit = (e) => {
        // ¿ Para que no te lleve a otro sitio ?
         e.preventDefault();

        const datosForm = document.getElementById("datosmascotas");


        const formData = new FormData(datosForm);

        console.log(formData)


        fetch(process.env.REACT_APP_BACK_URL + 'api/datosMascota', {
            method: "POST",
            body: formData,
            
        })
            .then((respuesta) => {
                alert("se ha subido mascota correctamente");
                console.log(respuesta.status);
            })
            .catch((err) => {
                console.log(err);
            });
            
    };


    ////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="container-form">

            <div className="centrado content">

                <div className="title">
                    <img src={Logo} alt="Foto logo Lucky" />
                </div>

                <div className="text">
                    <h2>Registro de Mascota</h2>
                    <h2>Protectora</h2>
                </div>

                <div>
                    <form encType="multipart/form-data" onSubmit={onSubmit} id="datosmascotas">
                        <div>
                            <label htmlFor="name"></label>
                            <input className="input-form" name="nombre" id="name"
                                 placeholder="Nombre" />
                        </div>

                        <div>
                            <label htmlFor="especie"></label>
                            <input className="input-form" name="especie" id="especie"
                                 placeholder="Especie ejem.. reptil" />
                        </div>

                        <div>
                            <label htmlFor="tipo"></label>
                            <input className="input-form" name="tipo" id="tipo"
                                placeholder="Tipo ejem..serpiente" />
                        </div>

                        <div>
                            <label htmlFor="sexo"></label>
                            <input className="input-form" name="sexo" id="sexo"
                                 placeholder="Sexo ejem..macho o hembra" />
                        </div>

                        <div>
                            <label htmlFor="tamaño"></label>
                            <input className="input-form" name="tamaño" id="tamaño"
                                 placeholder="ejem....grande, mediano, pequeño" />
                        </div>

                        <div>
                            <label htmlFor="peso"></label>
                            <input className="input-form" type="number" name="peso" id="peso"
                                 placeholder="peso" />
                        </div>
                        <div>
                            <label htmlFor="ciudad"></label>
                            <input className="input-form"  name='ciudad' id="ciudad"
                                 placeholder="ciudad" />
                        </div>
                        <div>
                            <label htmlFor="direccion2"></label>
                            <input className="input-form"  name='direccion' id="direccion"
                                 placeholder="direccion" onChange={e => setDirect(e.target.value)} />
                        </div>
                        {/* latitud y longitud */}
                        <div>
                            <label htmlFor="lat1"></label>
                            <input className="input-form"  name='lat' id="lat1" type="hidden"
                                 value={lati} />
                        </div>
                        <div>
                            <label htmlFor="long1"></label>
                            <input className="input-form"  name='long' id="long1" type="hidden"
                                 value={long} />
                        </div>

                        <div>
                            <label htmlFor="personalidad"></label>
                            <input className="input-form" name="personalidad" id="personalidad"
                                 placeholder="Personalidad" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="historia"></label>
                            <input className="input-form" name="historia" id="historia"
                                 placeholder="Historia" />
                        </div>
                        <div className="form-group1">
                            <label className="fechaDeNacimiento" htmlFor="fechaDeNacimiento">Nacimiento</label>
                        </div>
                        <div className="form-group">
                            <input type="date" id="fechaDeNacimiento" name="fechaDeNacimiento" className="input-form"
                                placeholder="Fecha de Nacimiento"/>
                        </div>
                        <div>
                            <label htmlFor="requisitos"></label>
                            <input className="input-form" name="requisitos" id="requisitos"
                                 placeholder="Requisitos" />
                        </div>
                        <div>
                            <label htmlFor="tasas"></label>
                            <input className="input-form" name="tasas" id="tasas" type="number"
                                 placeholder="tasas en €" />
                        </div>
                        <div>
                            <label htmlFor="queCiudad"></label>
                            <input className="input-form" name="queCiudad" id="queCiudad" 
                                 placeholder="Envia a otra ciudad. cual?" />
                        </div>
                        <div>
                            <label htmlFor="sano"></label>
                            <input className="input-form" name="sano" id="sano" 
                                 placeholder="Esta sano SI o NO" />
                        </div>

                        <div>
                            <label htmlFor="esterilizado"></label>
                            <input className="input-form" name="esterilizado" id="esterilizado" 
                                 placeholder="Estirilizado ? SI o NO" />
                        </div>
                        <div>
                            <label htmlFor="vacunado"></label>
                            <input className="input-form" name="vacunado" id="vacunado" 
                                 placeholder="Vacunado ? SI o NO" />
                        </div>
                        <div>
                            <label htmlFor="desparasitado"></label>
                            <input className="input-form" name="desparasitado" id="desparasitado" 
                                 placeholder="Desparasitado ? SI o NO" />
                        </div>
                        <div>
                            <label htmlFor="identificado"></label>
                            <input className="input-form" name="identificado" id="identificado" 
                                 placeholder="Identificado ? SI o NO" />
                        </div>
                        <div>
                            <label htmlFor="microship"></label>
                            <input className="input-form" name="microchip" id="microship" 
                                 placeholder="Microchip ? SI o NO" />
                        </div>

                        <div className="btnfile3">
                            <p className="parrafobtn3">subir imagen</p>
                            <input className="loadimg3" type="file" name="img"  />
                           
                        </div>

                        <div>
  
                            <button className="button-form3">Publicar</button>
                        </div>

                    </form>
                </div>
            </div>

         
        </div>
    );
}

export default PetFormProtectora;