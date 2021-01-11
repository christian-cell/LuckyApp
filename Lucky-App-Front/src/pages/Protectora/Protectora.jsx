import React, { useState, useEffect } from 'react';
import './Protectora.scss';
import { API } from '../../Shared/Servicios/Api';
import { Link, useParams } from 'react-router-dom';
import masSecundario from '../../ImgAppLucky/iconosAnimales/masSecundario.png';
export default function Protectora() {




    const [solicitudes, setSolicitudes] = useState([])
    const [estadosolicitud, setEstadosolicitud] = useState([])

    useEffect(() => {
        API.get('/solicitudAdopcion')

            .then((res) => {
                setSolicitudes(res.data);




            })
            .catch((error) => {
                console.log(error);
            })

    }, [])



    const finalSolicitudes = (solicitudes && solicitudes)

    // console.log(finalSolicitudes)


    const aprobarItem = (id, idSolicitud) => {

        const fordata = {
            estado: "Aceptada"
        }
        const solicitud = [...solicitudes]
        solicitud.splice(id, 1)
        setSolicitudes(solicitud);

        API.post('solicitudAdopcion/cambiarEstado/' + idSolicitud, fordata)

            .then((res) => {
                // setSolicitudes(res.data); 

                //  setTimeout(() => {
                //     
                //  }, 500);


            })


            .catch((error) => {
                console.log(error);
            })



        document.getElementById('openModal').style.display = 'block';
        setTimeout(() => {
            document.getElementById('openModal').style.display = "none"
        }, 1500);
    }

    const rechazarItem = (id, idSolicitud) => {
        const fordata = {
            estado: "Rechazada"
        }

        API.post('solicitudAdopcion/cambiarEstado/' + idSolicitud, fordata)

            .then((res) => {



            })


            .catch((error) => {
                console.log(error);
            })


        const solicitud = [...solicitudes]
        solicitud.splice(id, 1)
        setSolicitudes(solicitudes);

        document.getElementById('rechazado').style.display = 'block';
        setTimeout(() => {
            document.getElementById('rechazado').style.display = "none"
        }, 1500);
    }

    // const estructurasolicitus=[];

    // for (let index = 0; index < solicitudes.length; index++) {
    //     const element = array[index];

    // }
    const volverLogin = () => {
        window.location.href = "/AccessLogin"
    }

    return (

        <div className="protectora-container" >
            <div className="contenedor-de-boton" >
                <button onClick={volverLogin} className="boton-logout" > Log Out </button>
            </div>
            <div id="openModal" style={{
                backgroundColor: 'rgba(175 ,211 ,219, 0.75)',
                textAlign: 'center', paddingTop: '65px'
            }} className="modalDialog">
                <div style={{ height: '83px', width: '315px' }} >

                    <h2>!Solicitud aprobada!</h2>



                </div>
            </div>


            <div id="rechazado" style={{
                backgroundColor: 'rgba(175 ,211 ,219, 0.75)',
                textAlign: 'center', paddingTop: '65px'
            }} className="modalDialog">
                <div style={{ height: '83px', width: '315px' }} >

                    <h2>!Solicitud rechazada!</h2>



                </div>
            </div>


            <div  >
                <span className="solicitudes" style={{ color: 'rgb(1, 116 ,142)' }} >Solicitudes de nuestros usuarios</span>
            </div>
            <div>
                <div className="span-container"><span> Registra tu mascota aqui </span><span className="imageMore" ><Link  to="petformprotectora"> <img src={masSecundario} alt="" /></Link>  </span></div>
            </div>

            <div id="padre" >
                {solicitudes.map((solicitud, i) =>



                    <div className="main" key={i}>
                        {console.log("esto es el id", solicitud._id)}

                        <div className="identificacion-container" style={{ margin: 'auto', width: '30%', marginTop: '40px' }} >
                            <div>
                                <span className="spanId" >Identificación de usuario:</span>
                            </div>
                            <div >
                                <span className="span-id" > {solicitud.idUsuario._id} </span>
                            </div>
                        </div>



                        <div className="main2-container" >

                            <div className="secundary-container" >

                                <span className="header" > Datos del usuario </span>
                                <div className="padre">
                                    <div>
                                        <span className="titulo" >Nombre y Apellidos:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.idUsuario.nombreApellidos} </span>
                                    </div>
                                </div>



                                <div className="padre">
                                    <div>
                                        <span className="titulo" >Dirección:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.idUsuario.direccion} </span>
                                    </div>
                                </div>



                                <div className="padre">
                                    <div>
                                        <span className="titulo" >D.N.I:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.idUsuario.dni} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >Teléfono:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.idUsuario.telefono} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >Email:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.idUsuario.email} </span>
                                    </div>
                                </div>


                            </div>

                            <div className="secundary-container" >

                                <span className="header" > Sobre las mascotas </span>
                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Por qué quieres adoptar?</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosMascotas.porQueQuieresAdoptar} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Tienes más mascotas?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosMascotas.seLlevanBien} </span>
                                    </div>
                                </div>



                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Cuales?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosMascotas.cuales} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Conoces sus necesidades?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosMascotas.conocesSusNecesidades} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Conoces sus gastos?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosMascotas.conocesSusGastos} </span>
                                    </div>
                                </div>


                            </div>

                            <div className="secundary-container" >

                                <span className="header" > Sobre familia y hogar </span>
                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Vives de alquiler?</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosHogar.vivesDeAlquiler} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Vives con otras personas?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosHogar.vivesConOtrasPersonas} </span>
                                    </div>
                                </div>



                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Están todos de acuerdo con la adopción?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosHogar.todosEstanDeAcuerdoConLaAdopcion} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >¿Tu casero permite animales?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosHogar.tuCaseroPermiteAnimales} </span>
                                    </div>
                                </div>

                                <div className="padre">
                                    <div>
                                        <span className="titulo" >?Tienes jardín?:</span>
                                    </div>
                                    <div>
                                        <span className="answer" > {solicitud.datosHogar.tienesJardin} </span>
                                    </div>
                                </div>


                            </div>




                        </div>

                        <div className="botones-container" >

                            {/* <button onClick={() => props.fnDeleteItem(props.index)}>X</button> */}
                            <div>

                                <button onClick={() => aprobarItem(solicitudes._id, solicitud._id)}
                                    style={{
                                        width: '60px', fontSize: '8px', height: '25px',
                                        border: 'none', marginRight: '10px', borderRadius: '5px', color: 'white',
                                        background: 'rgb(1, 116 ,142)'
                                    }} >Aceptar solicitud</button>
                            </div>

                            <div>
                                <button onClick={() => rechazarItem(solicitudes._id, solicitud._id)} style={{ width: '60px', fontSize: '8px', height: '25px', border: 'none', borderRadius: '5px', color: 'white', background: 'rgb(1, 116 ,142)' }} >Rechazar solicitud</button>
                            </div>
                        </div>



                    </div>




                )}

            </div>




        </div>
    )
}
