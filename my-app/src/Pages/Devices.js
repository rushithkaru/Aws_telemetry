import React from 'react'
import DeviceCard from '../components/DeviceCard'
import '../css/Card.css'
import { useState, useEffect } from "react"

function Devices() {
  const [devices,setDevices] = useState([]);

  useEffect(() => {
    fetch('/devices')
      .then(response => response.json())
      .then((data) => { 
        const devs = []
        for (let i = 0; i < 10 ; i++){
          devs.push(JSON.parse(data[i]));
        }
        setDevices(devs); console.log(devs); 
      });
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
          
        </div>
        
    </div>
  )
}

export default Devices