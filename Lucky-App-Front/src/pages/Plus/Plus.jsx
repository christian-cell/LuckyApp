import React,{useState} from "react";
import "./Plus.scss";
import asociaciones from "../../ImgAppLucky/perfil-mas-plus/asociaciones.png";
import eventos from "../../ImgAppLucky/perfil-mas-plus/eventos.png";
import curiosidades from "../../ImgAppLucky/perfil-mas-plus/curiosidades.png";
import ayuda from "../../ImgAppLucky/perfil-mas-plus/ayuda.png";
import configuracion from "../../ImgAppLucky/perfil-mas-plus/configuracion.png";
import salir from "../../ImgAppLucky/perfil-mas-plus/salir.png";
import arrow from "../../ImgAppLucky/arrow.png";
import Navegation from "../Navegation/Navegation";
import AuthButton from '../../Shared/Componentes/Authbutton/Authbutton';

export default function Plus() {
  const profile = JSON.parse(localStorage.getItem("usuario"));
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  return (
    <div className="perfil-mas">
      <div className="div-mas">
        <div className="div-image">
          <img className="iconos-mas" src={asociaciones} alt="" />
        </div>

      <div className="label-window"> Asociaciones protectoras</div>
        <div className="div-arrow">
          <img className="arrow-plus1" src={arrow} alt="" />
        </div>
      </div>

      <div className="div-mas">
        <div>
          <img className="iconos-mas" src={eventos} alt="" />
        </div>
        <div className="label-window"> Eventos </div>
        <div>
          <img className="arrow-plus2" src={arrow} alt="" />
        </div>
      </div>

      <div className="div-mas">
        <div>
          <img className="iconos-mas" src={curiosidades} alt="" />
        </div>
        <div className="label-window"> Curiosidades</div>
        <div>
          <img className="arrow-plus3" src={arrow} alt="" />
        </div>
      </div>

      <div className="div-mas">
        <div>
          <img className="iconos-mas" src={ayuda} alt="" />
        </div>
        <div className="label-window"> Ayuda </div>
        <div>
          <img className="arrow-plus4" src={arrow} alt="" />
        </div>
      </div>

      <div className="div-mas">
        <div>
          <img className="iconos-mas" src={configuracion} alt="" />
        </div>
        <div className="label-window"> Configuración </div>
        <div>
          <img className="arrow-plus5" src={arrow} alt="" />
        </div>
      </div>

      <div className="div-salir">
      <AuthButton  className="iconos-salir" isLogged={isLogged} fnSetIsLogged={setIsLogged} />
        <div className="label-window"> Salir </div>
        <div>
          <img className="arrow-plus6" src={arrow} alt="" />
        </div>
      </div>
      <Navegation></Navegation>
    </div>
  );
}
