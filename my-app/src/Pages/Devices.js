import React from 'react'
import DeviceCard from '../components/DeviceCard'
import '../css/Card.css'
import { useState, useEffect } from "react"

function Devices() {
  const [devices,setDevices] = useState([]);

  useEffect(() => {
    fetch('/devices')
      .then(response => response.json())
      .then((data) => {data = JSON.parse(data); setDevices(data); console.log(typeof data[0]); });
  }, []);

  return (
    <div>
        <h1>
            Select device for home page
        </h1>
        <div className='cards-container' >
          {devices.map((device,id) => (
            <DeviceCard key={id} deviceData={device}/>
          ))}
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          
        </div>
        
    </div>
  )
}

export default Devices