import React from "react";
import { useHistory } from "react-router-dom";
import salir from "../../../ImgAppLucky/perfil-mas-plus/salir.png";


export default function AuthButton(props) {
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem('usuario'));


    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        localStorage.removeItem('mascotaFiltrada');
        props.fnSetIsLogged(false);
        history.push("/");
    }


    return props.isLogged ? (
        
        <div>
          <img className="iconos-salir" onClick={signOut}  src={salir} alt="" />
        </div>
    ) : (
            <p>You are not logged in.</p>
        );
}
// 