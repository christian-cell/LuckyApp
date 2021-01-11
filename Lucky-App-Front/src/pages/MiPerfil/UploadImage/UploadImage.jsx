import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../../../Shared/Servicios/Api';
import './UploadImage.scss'
import Navegation from '../../Navegation/Navegation'


function UploadImage() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    //  console.log(usuario)
    console.log(usuario.imagen)
    const id = usuario._id;
    // console.log(id)

    const [datouser, setdatouser] = useState([]);

    useEffect(() => {

        API.get('perfilUsuario/' + id).then(res => {

            setdatouser(res.data);


        })

    }, [])


    console.log(datouser && datouser)
    // console.log(datouser.nombreApellidos&&datouser.nombreApellidos)


    const onSubmit = (e) => {
        // ¿ Para que no te lleve a otro sitio ?
        e.preventDefault();

        const imageForm = document.getElementById("profileImageform");


        const formData = new FormData(imageForm);

        console.log("este es form data", formData)

        const userToken = localStorage.getItem("token");
        if (!userToken) {
            return (window.location.href = "/Usuarios/login.html");
        }
        API.post('perfilUsuario/profileImage/' + id, formData).then(res => {

            console.log('your pic was updated successfully');
            window.location.href = "/uploadImage"
        });


    };


    return (
        <>
            {datouser && datouser.map((dato) =>

                <div className="containeruser">

                    <div className="image-user-container">

                        <img className="image-user" src={dato.imagen}></img>

                        <form encType="multipart/form-data" onSubmit={onSubmit} id="profileImageform">
                            <div className="btnfile">
                                <input className="loadimg" type="file" name="avatar" />
                                <i className="fas fa-edit"></i>
                            </div>
                            <div className="btnbtn">
                                <button className="btnloadimg">Editar</button>
                            </div>

                        </form>
                    </div>



                    <div className="datos-user">
                        <div> <p className="datousup">Nombre: {dato.nombreApellidos}  </p> </div>
                        <div> <p className="datousup">Ciudad:  {dato.ciudad}  </p></div>
                        <div> <p className="datousup">Email:  {dato.email}  </p></div>
                    </div>

                    <Navegation></Navegation>
                </div>)}
        </>
    );

}


export default UploadImage;
 // fetch(process.env.REACT_APP_BACK_URL + "perfilUsuario/profileImage", {
        //     method: "POST",
        //     body: formData,
        //     headers: {
        //         Authorization: "Bearer " + userToken,
        //     },
        // })
        //         .then((respuesta) => {
        //             alert("Tu foto se ha actualizado correctamente");
        //             console.log(respuesta.status);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });