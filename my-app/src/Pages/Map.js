import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';
import PopupData from '../components/PopupData'



function Map() {
  const [markers, setMarkers] = useState([]);


  useEffect(() => {
    fetch("/positions").then(res => res.json()).
    then(data => {setMarkers(data); console.log(data)});
    
    
  }, [])
  
  return (
    <div>
       <MapContainer center={[-37.8327,145.0681]} zoom={8}scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          {markers.map(marker => (
            <Marker position={[marker.latitude, marker.longitude]}>
              <Popup>
                <PopupData active={true}></PopupData>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

    </div>
  )
}

export default Map