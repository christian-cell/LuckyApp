import React from "react";
import Navegation from "../Navegation/Navegation";
import GoogleMaps from "simple-react-google-maps";
import "./Map.scss";
import lupa from "../../ImgAppLucky/lupa.png";
export default function Map() {
  const API = process.env.REACT_APP_API_KEY
  console.log("este es el key", API)
  return (

    <div className="buscador">
      
      <div className="input-buscador">
        <input className="inputBuscador" type="text" placeholder=" ¿Qué estás buscando?" />
        {/* <div classname="input-group-buscar">
          <span className=" searcher-icon fas fa-buscar"><img className="imagen-lupa" src={lupa}></img></span>
        </div> */}
      </div>
        

      <div className="container-mapa">
        <GoogleMaps
          apiKey={API}
          style={{ height: "550px", width: "375px" }}
          zoom={10}
          center={{
            lat: 40.4167,
            lng: -3.70325,
          }}
          

          markers={{ lat: 40.4588114, lng: -3.6946848 }, { lat: 40.432857, lng: -3.660869 }, { lat: 40.3818135, lng: -3.6543583 }}
        />
      </div>

      <Navegation></Navegation>
    </div>
  );
}
