import React, { useState } from 'react';
import './FilterPage.scss';
import { API } from '../../Shared/Servicios/Api';


import Perro1 from '../../ImgAppLucky/iconosAnimales/perroChico.png';
import Perro2 from '../../ImgAppLucky/iconosAnimales/perrop.png';
import Ave1 from '../../ImgAppLucky/iconosAnimales/ave.png';
import Ave2 from '../../ImgAppLucky/iconosAnimales/aveSecundario.png';
import PeqMamifero1 from '../../ImgAppLucky/iconosAnimales/pequeñoMafifero.png';
import PeqMamifero2 from '../../ImgAppLucky/iconosAnimales/pequeñoMamiferoSecundario.png';
import Gato1 from '../../ImgAppLucky/iconosAnimales/gatoChico.png';
import Gato2 from '../../ImgAppLucky/iconosAnimales/catSecundario.png';

import Cobaya from '../../ImgAppLucky/iconosAnimales/Cobaya.png';
import Conejo from '../../ImgAppLucky/iconosAnimales/Conejo.png';
import Reptil from '../../ImgAppLucky/iconosAnimales/reptil(2).png';
import Huron from '../../ImgAppLucky/iconosAnimales/huron (3).png';
import Amfibio from '../../ImgAppLucky/iconosAnimales/anfibioPequeño.png';
import Aracnido from '../../ImgAppLucky/iconosAnimales/aracnido-Insecto.png';
import Pez from '../../ImgAppLucky/iconosAnimales/pezChico.png';


import Macho1 from '../../ImgAppLucky/iconosAnimales/male.png';
import Hembra1 from '../../ImgAppLucky/iconosAnimales/female.png';

import Macho2 from '../../ImgAppLucky/iconosAnimales/machoSecundario.png';
import Hembra2 from '../../ImgAppLucky/iconosAnimales/hembraSecundario.png';


import tamChico1 from '../../ImgAppLucky/iconosAnimales/perritoPequeño.png';
import tamMediano1 from '../../ImgAppLucky/iconosAnimales/perritoMediano.png';
import tamGrande1 from '../../ImgAppLucky/iconosAnimales/groupCopy2@2x.png';

import tamChico2 from '../../ImgAppLucky/iconosAnimales/perritoPequeñoSecundario.png';
import tamMediano2 from '../../ImgAppLucky/iconosAnimales/perritoPequeñoSecundario (2).png';
import tamGrande2 from '../../ImgAppLucky/iconosAnimales/perritoMedianoSecundario.png';
import flecha from '../../ImgAppLucky/flecha-atras.png';

import ResultFilter from '../ResultFilter/ResultFilter';

const NO_CITY = "NO_CITY";
const NO_ESPECIE = "NO_ESPECIE";
const NO_EDAD = "NO_EDAD";
const NO_SEXO = "NO_SEXO";
const NO_TAM = "NO_TAM";

function FilterPage(props) {

    const [itemsMascotas, setItemsMascotas] = useState([]);


    // Variable de estado para la ciudad del filtro
    const [ciudad, setCiudad] = useState(NO_CITY);
    const [especie, setEspecie] = useState(NO_ESPECIE);
    const [edad, setEdad] = useState(NO_EDAD);
    const [sexo, setSexo] = useState(NO_SEXO);
    const [tam, setTam] = useState(NO_TAM);

    // Funcion que hace una peticion get a la api
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(ciudad)
        console.log(edad)
        let url = "/api/datosMascota";
        if (ciudad !== NO_CITY || especie !== NO_ESPECIE || edad !== NO_EDAD || sexo !== NO_SEXO || tam !== NO_TAM) {
            url += '/filtro?';
            // Se usa para saber si es el primer filtro y usar el &
            let filterAdded = false;
            if (ciudad !== NO_CITY) {
                url += 'ciudad=' + ciudad;
                filterAdded = true;
            }
            if (especie !== NO_ESPECIE) {
                url += filterAdded ? '&especie=' + especie : 'especie=' + especie;
                filterAdded = true;
            }
            if (edad !== NO_EDAD) {
                url += filterAdded ? '&edad=' + edad : 'edad=' + edad;
                filterAdded = true;
            }
            if (sexo !== NO_SEXO) {
                url += filterAdded ? '&sexo=' + sexo : 'sexo=' + sexo;
                filterAdded = true;
            }
            if (tam !== NO_TAM) {
                url += filterAdded ? '&tamaño=' + tam : 'tamaño=' + tam;
                filterAdded = true;
            }

            //  window.location.href = "/gallery";
            //  window.location.href = "/resultfilter";
        }

        API.get(url)
            .then((mascotas) => {
                console.log(mascotas.data);
                setItemsMascotas(mascotas.data);
                localStorage.setItem('mascotaFiltrada', JSON.stringify(mascotas.data));
                setTimeout(() => {
                    window.location.href = "/resultfilter"
                }, 100);


            })
            .catch((error) => {
                console.log(error);
            })
    }




    function handleCityChange(e) {
        setCiudad(e.target.options[e.target.selectedIndex].value)
    }

    function handleSelectEspecie(newEspecie) {
        if (newEspecie === especie) {
            console.log("Has desmarcado un icono")
            setEspecie(NO_ESPECIE);
            document.getElementById(newEspecie).classList.remove("color-icons-selected");
            document.getElementById(newEspecie).classList.add("color-icons");
        } else {
            console.log("Has marcado  un icono")
            setEspecie(newEspecie);
            document.getElementById(newEspecie).classList.remove("color-icons");
            document.getElementById(newEspecie).classList.add("color-icons-selected");
        }
    }

    function handleEdadChange(e) {
        setEdad(e.target.options[e.target.selectedIndex].value)
    }

    function handleSelectSexo(newSexo) {
        if (newSexo === sexo) {
            console.log(NO_SEXO)
            setSexo(NO_SEXO);
            document.getElementById(newSexo).classList.remove("color-icons-selected");
            document.getElementById(newSexo).classList.add("color-icons");
        } else {
            console.log(newSexo)
            setSexo(newSexo);
            document.getElementById(newSexo).classList.remove("color-icons");
            document.getElementById(newSexo).classList.add("color-icons-selected");
        }
    }

    function handleSelectTam(newTam) {
        if (newTam === tam) {
            console.log(NO_TAM)
            setTam(NO_TAM);
            document.getElementById(newTam).classList.remove("color-icons-selected");
            document.getElementById(newTam).classList.add("color-icons");
        } else {
            console.log(newTam)
            setTam(newTam);
            document.getElementById(newTam).classList.remove("color-icons");
            document.getElementById(newTam).classList.add("color-icons-selected");
        }
    }

    const volver = () => {
        window.location.href = "/misMascotas"
    }

    

    return (
        <div>
            <div>
                <img style={{ position: 'fixed', top: '0', zIndex: '1000', width: '35px', marginLeft: '15px', marginTop: '10px' }} onClick={volver} src={flecha} alt="" />
            </div>

            <div >
                <form onSubmit={onSubmit}>

                    <div  >
                        <h3 className="tituloFiltro">Filtros</h3>
                    </div>

                    <div>
                        <h5 className="titulo-secundario">Ciudad</h5>
                        <select className="select" id="select_ciudad" onChange={handleCityChange}>
                            <option value={NO_CITY}>Cualquiera</option>
                            <option value="madrid">Madrid</option>
                            <option value="barcelona">Barcelona</option>
                            <option value="valencia">Valencia</option>
                            <option value="galicia">Galicia</option>
                            <option value="bogota">Bogota</option>
                            <option value="toledo">Toledo</option>
                            <option value="cadiz">Cádiz</option>
                            <option value="ibiza">Ibiza</option>
                            <option value="jaen">Jaén</option>
                            <option value="medellin">Medellín</option>
                            <option value="huelva">Huelva</option>
                        </select>
                    </div>

                    <div>
                        <h5 className="titulo-secundario">Especie</h5>
                        <div className="content-div">
                            <div id="perro" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("perro")}>
                                <img className="perro-especial-especie" src={especie === "perro" ? Perro2 : Perro1} alt="logo mascota" />
                                <p>Perro</p>
                            </div>
                            <div id="gato" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("gato")}>
                                <img className="icono-especial gato-conejo-especial-especie" src={especie === "gato" ? Gato2 : Gato1} alt="logo mascota" />
                                <p>Gato</p>
                            </div>
                            <div id="conejo" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("conejo")}>
                                <img className="icono-especial gato-conejo-especial-especie" src={Conejo} alt="logo mascota" />
                                <p>Conejo</p>
                            </div>
                            <div id="cobaya" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("cobaya")}>
                                <img className="icono-especial" src={Cobaya} alt="logo mascota" />
                                <p className="p-especial">Cobaya</p>
                            </div>
                            <div id="pequeño mamifero" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("pequeño mamifero")}>
                                <img src={especie === "pequeño mamifero" ? PeqMamifero2 : PeqMamifero1} alt="logo mascota" />
                                <p>Pequeño mamifero</p>
                            </div>
                            <div id="huron" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("huron")}>
                                <img className="icono-especial" src={Huron} alt="logo mascota" />
                                <p className="p-especial">Hurón</p>
                            </div>
                            <div id="pez" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("pez")}>
                                <img className="icono-especial" src={Pez} alt="logo mascota" />
                                <p className="p-especial">Pez</p>
                            </div>
                            <div id="reptil" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("reptil")}>
                                <img className="icono-especial" src={Reptil} alt="logo mascota" />
                                <p>Reptil</p>
                            </div>
                            <div id="anfibio" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("anfibio")}>
                                <img className="icono-especial" src={Amfibio} alt="logo mascota" />
                                <p className="p-especial">Anfibio</p>
                            </div>
                            <div id="insecto" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("insecto")}>
                                <img src={Aracnido} alt="logo mascota" />
                                <p>Arácnido o insecto</p>
                            </div>
                            <div id="ave" className="content-div__iconos color-icons" onClick={() => handleSelectEspecie("ave")}>
                                <img src={especie === "ave" ? Ave2 : Ave1} alt="logo mascota" />
                                <p>Ave</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h5 className="titulo-secundario">Edad</h5>
                        <select className="select" onChange={handleEdadChange}>
                            <option value={NO_EDAD}>Cualquiera</option>
                            <option value="joven">Joven</option>
                            <option value="adulto">Adulto</option>
                        </select>
                    </div>

                    <div>
                        <h5 className="titulo-secundario">Sexo</h5>
                        <div className="content-div-sexo">
                            <div id="hembra" className="content-div__iconos color-icons" onClick={() => handleSelectSexo("hembra")}>
                                <img src={sexo === 'hembra' ? Hembra2 : Hembra1} alt="logo hembra" />
                                <p>Hembra</p>
                            </div>
                            <div id="macho" className="content-div__iconos color-icons" onClick={() => handleSelectSexo("macho")}>
                                <img src={sexo === 'macho' ? Macho2 : Macho1} alt="logo macho" />
                                <p>Macho</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className="titulo-secundario">Tamaño</h5>
                        <div className="content-div-sexo">
                            <div id="pequeño" className="content-div__iconos color-icons" onClick={() => handleSelectTam("pequeño")}>
                                <img className="logo-perro-pequeño" src={tam === 'pequeño' ? tamChico2 : tamChico1} alt="logo animal pequeño" />
                                <p className="p-perro-pequeño">Pequeño</p>
                            </div>
                            <div id="mediano" className="content-div__iconos color-icons" onClick={() => handleSelectTam("mediano")}>
                                <img src={tam === 'mediano' ? tamMediano2 : tamMediano1} alt="logo animal mediano" />
                                <p className="p-perro-mediano">Mediano</p>
                            </div>
                            <div id="grande" className="content-div__iconos color-icons" onClick={() => handleSelectTam("grande")}>
                                <img className="logo-perro-grande" src={tam === 'grande' ? tamGrande2 : tamGrande1} alt="logo animal grande" />
                                <p>Grande</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-botones">
                        <button className="boton-limpiar">Borrar filtros</button>
                        <button>Aplicar</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default FilterPage;