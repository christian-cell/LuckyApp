
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { useState } from 'react';
import './MapContainer.scss';
import { API } from '../../Shared/Servicios/Api';
import Navigator from '../../pages/Navegation/Navegation'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const MapContainer = (props) => {


    const dato = props.masco
    const [datos, setdatos] = useState([{}])

    for (let index = 0; index < datos.length; index++) {
        const element = datos[index];


        setdatos(element)

    }


    //   console.log("este es usestate",mdato)
    // console.log( `{ lat: ${dato[0].lat} , lng: ${dato[0].long} }`)

    //    const inform = [{
    //         informacion:"Jack",
    //         img:"https://www.65ymas.com/uploads/s1/65/73/5/bigstock-dog-beagle-having-fun-running-294325987-1.jpeg",
    //         position : { lat: 40.4167, lng: -3.70325 }
    //     },
    //     {
    //         informacion:"thor",
    //         img:"https://static.nationalgeographic.es/files/styles/image_3200/public/2928.600x450.jpg?w=1900&h=1425",
    //         position : { lat: 36.5299, lng:-6.29241 }
    //     },
    //     {
    //         informacion:"firulais",
    //         img:"https://animaleshoy.net/wp-content/uploads/2015/02/perro_feo_2.jpg",
    //         position : { lat:  39.46975 , lng:  -0.37739 }
    //     }

    // ];

    const [state, setState] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

    });

    const onMarkerClick = (props, marker, e) =>
        setState({
            // selectedPlace: props,
            activeMarker: marker,
            // para enseñar info window
            showingInfoWindow: true,

        });

    const onMapClicked = (props) => {
        if (state.showingInfoWindow) {
            setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };



    return (
        <div>

            <Map google={props.google}
                initialCenter={{
                    lat: 40.463667,
                    lng: -3.74922
                }}
                zoom={6}
                onClick={onMapClicked}
                onClick={onMapClicked}>




                {dato && dato.map((dato1, i) =>
                    <Marker key={i} onClick={onMarkerClick}

                        name={dato1.nombre}
                        position={{ lat: dato1.lat, lng: dato1.long }}


                    />)}
                {dato && dato.map((dato2, i) =>

                    <InfoWindow key={i}
                         position={{ lat: dato2.lat, lng: dato2.long }}
                        // marker={state.activeMarker}

                        visible={state.showingInfoWindow}>


                        <div className="infow">
                            <Router>
                                <Link to={"profilepet/" + dato2.nombre}>
                               
                                    <h5>{dato2.nombre}</h5>
                                    <img className="infoimg" src={dato2.img} alt="" />
                                    {/* <p>{dato2.direccion}</p> */}
                                </Link>
                            </Router>
                        </div>

                    </InfoWindow>)}



            </Map>

            <Navigator></Navigator>

        </div >
    );
}


export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY)

})(MapContainer)