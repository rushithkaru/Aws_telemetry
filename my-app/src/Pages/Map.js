import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';
import { Icon } from "leaflet";



function Map() {
  return (
    <div>
       <MapContainer center={[-37.8327,145.0681]} zoom={6}scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

          <Marker
            key={"33"}
            position={[
              -37.8327,
              145.0681
            ]}
            onClick={() => {
              console.log("test");
            }}
            
          />
        </MapContainer>

    </div>
  )
}

export default Map