import React, { useState, useEffect } from 'react';
import  MapContainer  from './MapContainer';
import { API } from '../../Shared/Servicios/Api';
import './MapInfo.scss';


const MapInfo = () => {
    const [masco, setMasco] = useState  ([{}])

    useEffect(() => {

        API.get('api/datosMascota').then(res => {

            setMasco(res.data);


        })

    }, [])
    const masco1= masco && masco
    console.log(masco1)
    return (
        <div className="containermapinfo">
            <MapContainer masco={masco1}></MapContainer>
            
        </div>

    );
}

export default MapInfo;