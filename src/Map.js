import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css";

  
class SimpleExample extends Component  {
    state = {
        lat: 50,
        lng: 20,
        zoom: 4,
      }
  
    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        <Map className='map' center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              
            </Popup>
          </Marker>
        </Map>
      )
    }
  }
  export default SimpleExample;