import React, { useEffect,useState } from 'react';
import './FormAdoption.scss';
import atras from '../../ImgAppLucky/atras.png';
import { useForm } from "react-hook-form";
import { API } from '../../Shared/Servicios/Api';
import modalCat from '../../ImgAppLucky/IconosUsados/Primario/modalCat.png';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import flecha from '../../ImgAppLucky/flecha-atras.png'

export default function FormAdoption() {

    const [datopet, setdatopet] = useState([]);
    const nombre = useParams().nombre;

    const { register, handleSubmit, errors } = useForm();

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    useEffect(() => {

        API.get('api/datosMascota/' + nombre).then(res => {

            setdatopet(res.data[0]);

        

        })


    }, [])

    console.log(datopet && datopet);



    const onSubmit = formData => {
        console.log(formData);

        console.log(formData.vivesConOtrasPersonas)
        API.post('solicitudAdopcion', formData).then(res => {
            console.log('Solicitud añadida',);
            showModal();

        })


    }


    const volver = () => {
        window.location.href = "/filtro"
    }





    function showModal() {
        document.getElementById('openModal').style.display = 'block';
    }

    

    function CloseModal() {
        document.getElementById('openModal').style.display = 'none';
    }

    console.log(errors)


    return (

        <body className="body" style={{ position: 'relative' }} >
            

            <div id="comienzo" >
                <button style={{marginLeft:'325px',zIndex:'1000',top:'0',position:'fixed',marginTop:'5px'}} className="botonVolverFiltro"  
                onClick={volver} > Filtro </button>
            </div>

            

            <div onClick={CloseModal} id="openModal" style={{ backgroundColor: 'rgba(175 ,211 ,219, 0.75)', textAlign: 'center', paddingTop: '65px' }} class="modalDialog">
                <div style={{ height: '493px', width: '315px' }} >

                    <h2>¡Enviado!</h2>
                    <p>Hemos enviado tu formulario a la protectora .Si quieres ponerte en
                       contacto con ellos puedes hacerlo vía email o whatsapp</p>
                    <p>Recuerda que la protectora se pondrá en contacto contigo para
                        poder hacer la entrevista personal</p>
                    <img style={{ width: '161px', height: '161px', marginLeft: '18px' }} src={modalCat} alt="" />

                </div>
            </div>



            <div className="form-container"  >

                <h4 className="h4-formulario-adopcion" id="formAdopcion" >Formulario de adopción</h4>
                <div className="form-container" >


                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="firstForm" >
                            <div>
                                <meter className="meter" min="0" max="100" low="33" high="66" value="33" ></meter>

                                <div className="input-container" >
                                    <h2 className="h2-tus-datos" >Tus datos</h2>
                                </div>
                                <div className="input-container" >
                                    <input className="adoption-input-control" type="hidden" 
                                        name="idUsuario" value={usuario._id} ref={register({ required: false })} />

                                </div>
                                {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
                                <div className="input-container" >
                                    <input className="adoption-input-control" type="hidden" 
                                        name="idMascota" value={datopet._id} ref={register({ required: false })} />

                                </div>

                                <div className="input-container" >
                                    <input className="adoption-input-control" type="text"
                                        value={usuario.nombreApellidos} />

                                </div>
                                <div className="input-container" >
                                    <input className="adoption-input-control"
                                        type="text" value={usuario.email} />
                                </div>
                                <div className="input-container" >
                                    <input className="adoption-input-control"
                                        type="text" value={usuario.telefono} />
                                </div>
                                <div className="input-container" >
                                    <input className="adoption-input-control"
                                        type="text" value={usuario.dni} />
                                </div>

                            </div>

                            <div>

                                <div className="input-container" >
                                    <h2 className="h2-tus-datos" >Direccion</h2>
                                </div>
                                <div className="input-container" >
                                    <input className="adoption-input-control" type="text" name="direccion" value={usuario.direccion} />

                                </div>
                                <div className="input-container" >
                                    <input className="adoption-input-control" type="text" name="" value={usuario.codigoPostal} />
                                </div>
                                <div className="input-container" >
                                    <input className="adoption-input-control" type="text" name="" value={usuario.ciudad} />
                                </div>




                            </div>

                            <div className="continuarAlSegundoButton-container" >
                                <div className="buttonContinuarAlSegungo" >
                                    <a className="aEnviar" href="#secondForm"> Continuar </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '50px', width: '100%', marginTop: '100px' }} id="comienzoSegundo" >

                        </div>

                        <div className="secondForm" >
                            <div id="secondForm" >

                                <div className="formulario-container" >
                                    <div className="iconoContainer" >
                                        <a href="#comienzo">
                                            <img src={atras} alt="" />
                                        </a>
                                    </div>
                                    <div className="formulario-adopcion-container" >
                                        <h4 id="formAdoption2" className="h4-formulario-adopcion" >Formulario de adopción</h4>

                                    </div>

                                </div>


                                <meter className="meter" min="0" max="100" low="33" high="66" value="66" ></meter>

                                <div className="input-container" >
                                    <h2 className="sobreLasMascotas" className="h2-tus-datos" >Sobre las mascotas</h2>
                                </div>
                                <div className="input-container">




                                    <div className="tienesAnimales" >
                                        <div className="spanOtros" >
                                            <span>¿Tienes otros animales?</span>
                                        </div>
                                        <div className="main-checkbox-container8" >
                                            <div className="checkbox-container" >
                                                <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                    <label htmlFor="siAnimales">si</label>

                                                </div>
                                                <div className="si-container">
                                                    <div>
                                                        <input /* ref={register({ required: false })} */ value={"si"} type="radio" name="tienesMasAnimales" id="siAnimales" />
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="checkbox-container" >
                                                <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                    <label htmlFor="noAnimales">no</label>

                                                </div>
                                                <div className="si-container">
                                                    <div>
                                                        <input value={"no"} /* ref={register({ required: false })} */ type="radio" name="tienesMasAnimales" id="noAnimales" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                    <div>
                                        <div>
                                            <input className="tienesMasAnimales" name="tienesOtrosAnimales"
                                                className="adoption-input-control"
                                                type="text"
                                                placeholder="¿Cuales?"
                                                name="cuales"
                                                ref={register({ required: false })}
                                            />

                                        </div>


                                    </div>

                                </div>
                                <div className="input-container" >
                                    <input ref={register({ required: false })} name="seLlevanBien" className="adoption-input-control" type="text"
                                        placeholder="¿Se lleva bien con otros animales?" />
                                </div>
                                <div className="input-container" >
                                    <label htmlFor="PorqueAdoptas">¿Porque has elegido adoptar?</label>
                                    <div className="answerInputs-container" >
                                        <input ref={register({ required: false })} id="PorqueAdoptas" className="answerInputs" type="text" name="porQueQuieresAdoptar" />
                                    </div>
                                </div>

                                <div className="input-container" >
                                    <label htmlFor="conocesSusNecesidades">¿Conoces las necesidades del animal?</label>
                                    <div className="answerInputs-container" >
                                        <input ref={register({ required: false })}
                                            id="conocesSusNecesidades"
                                            className="answerInputs" type="text" name="conocesSusNecesidades"
                                        />
                                    </div>
                                </div>

                                <div className="input-container" >
                                    <label htmlFor="PorqueAdoptas">¿Conoces sus gastos?</label>
                                    <div className="answerInputs-container" >
                                        <input ref={register({ required: false })} id="PorqueAdoptas"
                                            className="answerInputs" type="text" name="conocesSusGastos"
                                        />
                                    </div>
                                </div>

                                <div className="input-container" >
                                    <label htmlFor="PorqueAdoptas">¿Conoces su alimentación?</label>
                                    <div className="answerInputs-container" >
                                        <input ref={register({ required: false })}
                                            id="PorqueAdoptas" className="answerInputs" type="text" name="conocesSuAlimentacion" />
                                    </div>
                                </div>


                            </div>





                            <div className="continuarAlSegundoButton-container" >
                                <div className="buttonContinuarAlSegungo" >
                                    <a className="aEnviar" href="#enviar"> Continuar </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '50px', width: '100%', marginTop: '100px', marginBottom: '30px' }} id="comienzoTercero"  >

                        </div>


                        <div id="thirdForm" className="thirdForm" >
                            <div>
                                <div className="formulario-container" >
                                    <div className="iconoContainer" >
                                        <a href="#comienzoSegundo">
                                            <img src={atras} alt="" />
                                        </a>
                                    </div>
                                    <div className="formulario-adopcion-container" >
                                        <h4 className="h4-formulario-adopcion" >Formulario de adopción</h4>

                                    </div>

                                </div>

                                <meter className="meter" min="0" max="100" low="33" high="100" value="100" ></meter>



                            </div>

                            <div>

                                <div className="input-container" >
                                    <h2 className="sobreLasMascotas" className="h2-tus-datos" >Familia y hogar</h2>
                                </div>

                            </div>



                            <div className="padre" >

                                <div className="donde-vives" >
                                    <label htmlFor="dondeVives" >¿Donde vives?</label><br />
                                    <input ref={register({ required: false })}
                                        id="dondeVives" name="datosHogar" className="inputDondeVives"
                                        type="text" placeholder="Piso,Casa,Chalet" />
                                </div>




                                <div className="vivesAlquiler" >

                                    <div className="span" >
                                        <span>Vives de Alquiler?</span>
                                    </div>

                                    <div className="main-checkbox-container" >
                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="VivesDeAlquiler">si</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"si"} ref={register({ required: false })} type="radio"
                                                        name="vivesDeAlquiler" id="VivesDeAlquiler"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="VivesDeAlquiler">no</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"no"} ref={register({ required: false })} type="radio"
                                                        name="vivesDeAlquiler" id="VivesDeAlquiler" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="permite-animales" >

                                    <div className="span">
                                        <span>¿Tu casero permite animales?</span>
                                    </div>


                                    <div className="main-checkbox-container2" >
                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="tuCaseroPermite">si</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"si"} ref={register({ required: false })} type="radio"
                                                        name="tuCaseroPermiteAnimales" id="tuCaseroPermite" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="tuCaseroPermite">no</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"no"} ref={register({ required: false })} type="radio"
                                                        name="tuCaseroPermiteAnimales" id="tuCaseroPermite" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="te-mudas-pronto" >

                                    <div className="span" >
                                        <span>¿Crees que podrías mudarte pronto?</span>
                                    </div>

                                    <div className="main-checkbox-container3" >
                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="teMudasPronto">si</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"si"} ref={register({ required: false })} type="radio"
                                                        name="creesQuePodriasMudartePronto" id="teMudasPronto" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="teMudasPronto">no</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"no"} ref={register({ required: false })} type="radio"
                                                        name="creesQuePodriasMudartePronto" id="teMudasPronto" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="tienes-jardin" >
                                    <div className="span">
                                        <span> ¿Tienes jardín? </span>
                                    </div>

                                    <div className="main-checkbox-container4" >
                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="tienesJardin">si</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input ref={register({ required: false })} value={"si"} type="radio"
                                                        name="tienesJardin" id="tienesJardin" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="tienesJardin">no</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input ref={register({ required: false })} value={"no"} type="radio"
                                                        name="tienesJardin" id="tienesJardin" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>



                                <div className="vives-personas" >
                                    <div className="span" >
                                        <span>
                                            ¿Vives con otras personas?
                                    </span>
                                    </div>

                                    <div className="main-checkbox-container5" >
                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="vivesConOtrasPersonas">si</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"si"} ref={register({ required: false })} type="radio"
                                                        name="vivesConOtrasPersonas" id="vivesConOtrasPersonas" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="vivesConOtrasPersonas">no</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"no"} ref={register({ required: false, })} type="radio"
                                                        name="vivesConOtrasPersonas" id="vivesConOtrasPersonas" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div className="estasDeAcuerdo" >

                                    <div className="span">
                                        <span>¿Están todos de acuerdo con la adopción?</span>
                                    </div>

                                    <div className="main-checkbox-container6" >
                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="todosEstanDeAcuerdo">si</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"si"} ref={register({ required: false })} type="radio"
                                                        name="todosEstanDeAcuerdoConLaAdopcion"
                                                        id="todosEstanDeAcuerdo" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="todosEstanDeAcuerdo">no</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"no"} ref={register({ required: false })} type="radio"
                                                        name="todosEstanDeAcuerdoConLaAdopcion" id="todosEstanDeAcuerdo" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div className="deAcuerdo" >
                                    <div className="deAcuerdoSpan" >
                                        <span>¿Estás de acuerdo con que visitemos tu casa?</span>
                                    </div>


                                    <div className="main-checkbox-container7" >
                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="estasDeAcuerdoVisitemosTuCasa">si</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"si"} ref={register({ required: false })} type="radio" name="estasDeAcuerdoConQueVisitemosTuCasa"
                                                        id="estasDeAcuerdoVisitemosTuCasa" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="checkbox-container" >
                                            <div style={{ marginBottom: '10px', marginLeft: '7px' }} >
                                                <label htmlFor="estasDeAcuerdoVisitemosTuCasa">no</label>

                                            </div>
                                            <div className="si-container">
                                                <div>
                                                    <input value={"no"} ref={register({ required: false })} type="radio" name="estasDeAcuerdoConQueVisitemosTuCasa"
                                                        id="estasDeAcuerdoVisitemosTuCasa" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="terminosCondiciones-container" >
                                <div className="imageTerminosCondicionesContainer" >
                                    <input type="checkbox" />
                                </div>
                                <div className="spanTerminosCondicionesContainer" >
                                    <span className="spanTerminosCondiciones" > Acepto los términos y condiciones de la adopción </span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px' }} className="continuarAlSegundoButton-container" >
                                <button

                                    id="enviar"
                                    className="buttonContinuarAlSegungo"
                                > Enviar
                                  </button>

                            </div>



                        </div>



                    </form>
                </div>

            </div>
        </body>
    )
}
