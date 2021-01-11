import React from 'react';
import Navegation from '../Navegation/Navegation';
import './MiPerfil.scss';
import chica from '../../ImgAppLucky/chica.png';
import localization from '../../ImgAppLucky/localization.png';
import favoritos from '../../ImgAppLucky/favoritosCopy.png';
import notificaciones from '../../ImgAppLucky/notificaciones.png';
import mascota from '../../ImgAppLucky/barraperfil/mascota.png';
import apadrina from '../../ImgAppLucky/apadrina.png';
import donar from '../../ImgAppLucky/donar.png';
import arrow from '../../ImgAppLucky/arrow.png';
import { Link } from 'react-router-dom';
export default function MiPerfil() {
    const profile = JSON.parse(localStorage.getItem('usuario'));
    return (
        <div className="container-perfil">
            <div className="container-avatar">
                <img className="avatar" src={profile.imagen} alt="" />
            </div>
            <Link className="linkmiperfil" to= 'UploadImage'>
            <div className="div-info">
                
                <div><img className="iconos-perfil" src={chica} alt="" /></div>
                <div className="label-perfil">  Mi Perfil</div>
                <div><img className="arrow-perfil1" src={arrow} alt="" /></div>
               
            </div>
            </Link>
            <div className="div-info">
                <div><img className="iconos-perfil" src={localization} alt="" /></div>
                <div className="label-perfil">  Direcciones</div>
                <div><img className="arrow-perfil2" src={arrow} alt="" /></div>
            </div>
            <div className="div-info">
                <div><img className="iconos-perfil" src={favoritos} alt="" /></div>
                <div className="label-perfil">  Favoritos</div>
                <div><img className="arrow-perfil3" src={arrow} alt="" /></div>
            </div>
            <div className="div-info">
                <div><img className="iconos-perfil" src={notificaciones} alt="" /></div>
                <div className="label-perfil">  Notificaciones</div>
                <div><img className="arrow-perfil4" src={arrow} alt="" /></div>
            </div>
            <Link className="linck-estado" to='estadoadopcion'>
            <div className="div-info">
                <div><img className="iconos-perfil" src={mascota} alt="" /></div>
                <div className="label-perfil">  Estado de la adopcion</div>
                <div><img className="arrow-perfil5" src={arrow} alt="" /></div>
            </div>
            </Link>
            <div className="div-info">
                <div><img className="iconos-perfil" src={apadrina} alt="" /></div>
                <div className="label-perfil">  Apadrinar</div>
                <div><img className="arrow-perfil6" src={arrow} alt="" /></div>
            </div>
            <div className="div-info">
                <div><img className="iconos-perfil" src={donar} alt="" /></div>
                <div className="label-perfil">  Donar</div>
                <div><img className="arrow-perfil7" src={arrow} alt="" /></div>
            </div>

            <Navegation></Navegation>
        </div>
    )
}
