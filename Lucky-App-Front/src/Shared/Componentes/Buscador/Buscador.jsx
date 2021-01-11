import React from "react";
import "./Buscador.scss";
export default function Buscador() {
    const profile = JSON.parse(localStorage.getItem('usuario'));

    return(
    <div className="input-search">
                <input className="inputSearcher" type="text" placeholder="Buscar" />
                <span className="input-group-addon">
                    <span className=" searcher-icon fas fa-search"></span>
                </span>
            </div>
    )
}
