import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            lat: 37.778519, 
            lng: -122.405640,
            activeMarker: null,
            showingInfoWindow: true
        }
    }

    componentDidMount(){}

 

  mapClicked = (mapProps, map, clickEvent)=>{ 
    
    this.setState({
      lat: clickEvent.latLng.lat(), 
      lng: clickEvent.latLng.lng(),
      showingInfoWindow : true,
    })

    this.props.getDetails({lat: clickEvent.latLng.lat(), 
        lng: clickEvent.latLng.lng()})
}


onMarkerClick = (props, marker, e) =>
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        });

onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        });
    }
};

  

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        onClick={this.mapClicked}
        style={mapStyles}
        initialCenter={{
         lat: 19.07283,
         lng: 72.88261
         }}
    >
        <Marker
          title={''}
          name={''}
          onClick={this.onMarkerClick}
          position={{
            lat: this.state.lat, 
            lng: this.state.lng
          }} />
      </Map>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
        getDetails: (data) => dispatch({ type: "API_GET_TIME_DETAILS", payload: data}),  
    };
};

export default connect(null, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyBVfCUDgvjAKdYun54khJN3w_OBkxCJ8x8'
})(MapContainer));
