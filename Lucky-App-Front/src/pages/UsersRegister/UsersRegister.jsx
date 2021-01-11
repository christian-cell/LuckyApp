import React from 'react';
import { useForm } from "react-hook-form";
import { API } from '../../Shared/Servicios/Api';
import Logo from '../../ImgAppLucky/logoFormRegister.png';
import './UsersRegister.scss';
import { Link } from 'react-router-dom';

const UserRegister = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = formData => {
        API.post('perfilUsuario', formData).then(res => {
            console.log('Te has registrado con exito',);
            window.location.href = "/login";
        })
    }


    return (

        <div className="centrado content">

            <div className="title">
                <img src={Logo} alt="Foto logo Lucky"/>
            </div>

            <div className="text">
                <h2>¡Hola! introduce tus datos para registrate</h2>
            </div>

            <div>
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name"></label>
                        <input className="input-form" name="nombreApellidos" id="name"
                            ref={register({ required: true })} placeholder="Celia García Montés"/>
                    </div>

                    <div>
                        <label htmlFor="email"></label>
                        <input className="input-form" name="email" id="email"
                            ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} 
                            placeholder="celia.bhb@gmail.com"
                            />
                    </div>

                    <div>
                        <label htmlFor="phone"></label>
                        <input className="input-form" name="telefono" id="phone"
                            ref={register({ required: true })} placeholder="722-34-56-78"/>
                    </div>

                    <div>
                        <label htmlFor="dni"></label>
                        <input className="input-form" name="dni" id="dni"
                            ref={register({ required: true })} placeholder="85345647K"/>
                    </div>

                    <div>
                        <label htmlFor="direccion"></label>
                        <input className="input-form" name="direccion" id="address"
                            ref={register({ required: true })} placeholder="Calle la victoria nº 12" />
                    </div>

                    <div>
                        <label htmlFor="postalcode"></label>
                        <input className="input-form" name="codigoPostal" id="postalcode"
                            ref={register({ required: true })}  placeholder="11510"/>
                    </div>
                    <div>
                        <label htmlFor="city"></label>
                        <input className="input-form" name="ciudad" id="city"
                            ref={register({ required: true })} placeholder="Cádiz" />
                    </div>

                    <div>
                        <label htmlFor="password"></label>
                        <input className="input-form" name="contraseña" id="password" type="password"
                            ref={register({ required: true, })}  placeholder="Contraseña"/>
                    </div>

                      {/* <div>
                        <input type="file" className="input-form" name="imagen" id="imagen"  default="http://res.cloudinary.com/dro8tyauo/image/upload/v1604009037/by044kgluq7v0ghzkimr.jpg"
                            ref={register({ required: false})} />
                    </div>   */}

                    <div>
                        {/* pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ */}
                            <button className="button-form">Regístrate!!</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default UserRegister;