import React from 'react'
import DeviceCard from '../components/DeviceCard'
import '../css/Card.css'
import { useState, useEffect } from "react"

function Devices() {
  const [devices,setDevices] = useState([]);
  const [filter,setFilter] = useState('All Devices');
  
  
    const handleOptionChange = (event) => {
        setFilter(event.target.value);
      };

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
            Configure Devices
        </h1>
        <label>
            Select an option  :
            <select value={filter} onChange={handleOptionChange}>
            <option value="All devices">All Devices</option>
            <option value="esp32">ESP32</option>
            <option value="raspberrypis">Raspberry pis</option>
            </select>
        </label>
        <p>Showing you: {filter}</p>
        <div className='cards-container' >
          {devices.map((device,id) => (
            <DeviceCard key={id} deviceData={device}/>
          ))}
          
        </div>
        
    </div>
  )
}

export default Devices