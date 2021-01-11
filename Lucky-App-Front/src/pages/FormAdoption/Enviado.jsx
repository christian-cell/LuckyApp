import React from 'react';
import './Enviado.scss';
import imagenFormEnviado from '../../ImgAppLucky/IconosUsados/Primario/imagenFormEnviado.png';

export default function Enviado() {
    return (
        <div className="enviado-container" >

            <h2 className="h2enviado" >¡Enviado!</h2>
            <p>
                Hemos enviado tu formulario a la protectora .Si quieres ponerte en 
                contacto con ellos puedes hacerlo vía email o whatsapp
            </p>
            <p>
                Recuerda que la protectora se pondrá en contacto contigo para 
                poder hacer la entrevista personal
            </p>
            <img src={imagenFormEnviado} alt=""/>
            
        </div>
    )
}
