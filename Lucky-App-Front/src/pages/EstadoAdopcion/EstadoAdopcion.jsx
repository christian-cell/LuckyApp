import React, { useState, useEffect } from 'react';
import lupa from "../../ImgAppLucky/lupa.png";
import atras from "../../ImgAppLucky/atras.png";
import enproceso from "../../ImgAppLucky/estado-en-proceso.png";
import rechazada from "../../ImgAppLucky/oval.png";
import aceptada from "../../ImgAppLucky/verde.jpg";
import lineasverticales from "../../ImgAppLucky/adopcionLineasVerticales.png";
import './EstadoAdopcion.scss';
import { API } from '../../Shared/Servicios/Api';
import { Link } from 'react-router-dom';


export default function EstadoAdopcion() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const [solicitudes2, setSolicitudes2] = useState([])
  useEffect(() => {
    API.get('/solicitudAdopcion').then(res => {
      setSolicitudes2(res.data)
    })

    /* .then((solicitudes2) => {
      setSolicitudes2(solicitudes2.data)

    })
    .catch((error) => {
      console.log(error);
    }) */

  }, [])



  console.log("aqui esta", solicitudes2 && solicitudes2)

  // console.log(solicitudes2.idMascota && solicitudes2.idMascota.nombre)
  return (
    <div className="estado-adopcion">

      <div className="buscar-estado-adopcion">
        <div className="input-buscador-adopcion">
          <input className="inputBuscadorAdopcion" type="text" placeholder=" Buscar" />
          <span className="input-group-buscar-adopcion">
            <span className=" searcher-icon fas fa-buscar-adopcion">
              <img className="imagen-lupa-adopcion" src={lupa}></img>
            </span>
          </span>
        </div>
        <span className="flecha-atras">
          <Link to="/home">
            <img className="imagen-flecha" src={atras}></img>
          </Link>
        </span>
      </div>
      <div className="divpeti">
        <h3 className="tuspet">Tus peticiones de adopcion {usuario.nombreApellidos}</h3>
      </div>

      {solicitudes2 && solicitudes2.map((dato, i) =>


        dato.idUsuario._id === usuario._id ?
          <div key={i} className="div-adopcion">


            {/* <span className="texto-adopcion">
              <p className="text-adopcion">Adopción de :{dato.idMascota.nombre} </p>
            </span>  */}

            <span className="proceso-adopcion">
              <p className="text-proceso" >{dato.estadoAdopcion} </p>
            </span>

            <span className="punto-proceso">
              <img className="imagen-proceso" src={dato.estadoAdopcion === "Aceptada" ? aceptada : dato.estadoAdopcion === "Rechazada" ? rechazada : enproceso}></img>
            </span>
            <span className="adopcion-proceso-loro">
              <img className="imagen-proceso-loro" src={dato.idMascota.img}></img>
            </span>
            <div className="datos-proceso">
              <div className="nombre-proceso">Nombre </div>
              <div className="ciudad-proceso" >Ciudad</div>
              <div className="sexo-proceso">Sexo</div>
            </div>
            <div className="informacion-adopcion">
              <div className="nombre-adopcion">{dato.idMascota.nombre}</div>
              <div className="ciudad-adopcion">{dato.idMascota.ciudad}</div>
              <div className="sexo-adopcion">{dato.idMascota.sexo}</div>
            </div>
            <span className="adopcion-lineas-verticales">
              <img className="imagen-lineas-verticales" src={lineasverticales}></img>
            </span>
          </div> : <div>

          </div>)}

    </div>
  );
}
