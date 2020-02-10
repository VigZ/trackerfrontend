import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


import './MapWrapper.scss';

import { DEFAULT_COORDS, DEFAULT_ZOOM, GOOGLE_MAP_KEY } from '../../constants'


class MapWrapper extends Component {

  displayMarkers = () => {
  return this.props.locations.map((location, index) => {
    return <Marker
      key={index}
      id={index}
      position={{
         lat: location.coordinates.latitude,
         lng: location.coordinates.longitude,
       }}
      icon={{
        url: require("./flower-marker.png"),
        scaledSize: new this.props.google.maps.Size(30, 30),
        anchor: new this.props.google.maps.Point(30, 30),}}
      onClick={() => window.open(location.url, '_blank')} />
  })
}

  render() {
    return (
      <div className="mapWrapper">
        <Map
          google={this.props.google}
          zoom={DEFAULT_ZOOM}
          styles={mapStyles}
          initialCenter={{ lat: DEFAULT_COORDS.lat, lng: DEFAULT_COORDS.lng}}>
        {this.displayMarkers()}
        </Map>
      </div>
  );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(MapWrapper);

MapWrapper.propTypes = {
  locations: PropTypes.array
}

MapWrapper.defaultProps = {
  locations: []
}

const mapStyles = [
{
   'featureType': 'administrative',
   'elementType': 'all',
   'stylers': [
       {
           'saturation': '-100'
       }
   ]
},
{
   'featureType': 'administrative.province',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'landscape',
   'elementType': 'all',
   'stylers': [
       {
           'saturation': -100
       },
       {
           'lightness': 65
       },
       {
           'visibility': 'on'
       }
   ]
},
{
   'featureType': 'landscape.man_made',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'poi',
   'elementType': 'all',
   'stylers': [
       {
           'saturation': -100
       },
       {
           'lightness': '50'
       },
       {
           'visibility': 'simplified'
       }
   ]
},
{
   'featureType': 'poi.attraction',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'poi.business',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'poi.government',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'poi.place_of_worship',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'poi.school',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'poi.sports_complex',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'road',
   'elementType': 'all',
   'stylers': [
       {
           'saturation': '-100'
       }
   ]
},
{
   'featureType': 'road.highway',
   'elementType': 'all',
   'stylers': [
       {
           'visibility': 'off'
       }
   ]
},
{
   'featureType': 'road.arterial',
   'elementType': 'all',
   'stylers': [
       {
           'lightness': '30'
       }
   ]
},
{
   'featureType': 'road.local',
   'elementType': 'all',
   'stylers': [
       {
           'lightness': '40'
       }
   ]
},
{
   'featureType': 'transit',
   'elementType': 'all',
   'stylers': [
       {
           'saturation': -100
       },
       {
           'visibility': 'simplified'
       }
   ]
},
{
   'featureType': 'water',
   'elementType': 'geometry',
   'stylers': [
       {
           'hue': '#ffff00'
       },
       {
           'lightness': -25
       },
       {
           'saturation': -97
       }
   ]
},
{
   'featureType': 'water',
   'elementType': 'labels',
   'stylers': [
       {
           'lightness': -25
       },
       {
           'saturation': -100
       }
   ]
 }
]
