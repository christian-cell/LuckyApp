import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './MapContainer.scss';
export class MapContainer extends Component {
    inform = [{
        informacion:"Jack",
        img:"https://www.65ymas.com/uploads/s1/65/73/5/bigstock-dog-beagle-having-fun-running-294325987-1.jpeg",
        position : { lat: 40.4167, lng: -3.70325 }
    },
    {
        informacion:"thor",
        img:"https://static.nationalgeographic.es/files/styles/image_3200/public/2928.600x450.jpg?w=1900&h=1425",
        position : { lat: 36.5299, lng:-6.29241 }
    },
    {
        informacion:"firulais",
        img:"https://animaleshoy.net/wp-content/uploads/2015/02/perro_feo_2.jpg",
        position : { lat:  39.46975 , lng:  -0.37739 }
    }

];
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render(

        
    ) {
        
        return (
            <Map google={this.props.google}
                initialCenter={{
                    lat: 40.463667,
                    lng: -3.74922
                }}
                zoom={2}
                onClick={this.onMapClicked}
                onClick={this.onMapClicked}>
                    {this.inform.map((dato,i) =>
                <Marker onClick={this.onMarkerClick}
                    name={dato.informacion}
                    position={dato.position}
                    img={dato.img}
                />)}
                
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div className="infow">
                        <h1>{this.state.selectedPlace.name}</h1>
                        <img className="infoimg" src={this.state.selectedPlace.img} alt=""/>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY)

})(MapContainer)
