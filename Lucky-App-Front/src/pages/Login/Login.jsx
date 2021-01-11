import React from 'react';
import { useForm } from "react-hook-form";
import loginImage2 from '../../ImgAppLucky/loginImage2.png';
import './Login.scss';
import { API } from "../../Shared/Servicios/Api";
// import ojo from '../../ImgAppLucky/IconosUsados/Primario/ojo.png';
import { Link } from 'react-router-dom';

export default function Login(props) {

    const { register, handleSubmit } = useForm();

    const onSubmit = formData => {

        API.post('/perfilUsuario/login', formData).then(res => {

            localStorage.setItem('token', res.data.token)
            localStorage.setItem('usuario', JSON.stringify(res.data.usuario))
            props.fnSetIsLogged(true);
            console.log('le diste al boton', formData, res.data.token)
            window.location.href = "/home";
        })
    }

    return (
        <div className="login-container1" >
            <img className="dogImageLogin" src={loginImage2} alt="imagen de la cara de un perro" />
            <div className="header-container" >
                <span className="message-login">¡Hola! para continuar , inicia sesión o crea una cuenta</span>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)} >

                <div className="input-container" >
                    <input className="login-input1" autoComplete="off" name="email" placeholder="celiabbb@gmail.com" id="email"
                        // defaultValue="cristohp@gmail.com"
                        ref={register({
                            required: true,
                            // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                        })} /><br />
                </div>

                <div className="input-container" >

                    <input className="login-input2" autoComplete="off" name="contraseña" id="contraseña" type="password" /* defaultValue={'ABCedf123'} */
                        ref={register({
                            required: true,
                            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                        })} />
                </div>

                <div className="olvidar-contraseña-container" >
                    <span className="span-olvidar-contraseña" >
                        ¿Has olvidado tu contraseña?
                </span>
                </div>
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                <div className="button-container" >
                    <button className="button-login"   >Iniciar Sesion</button>
                </div>
            </form>
            <Link to = "/register" >
                <button className="button-crear-cuenta" >Crear cuenta</button>
            </Link>
        </div>
    )
}
