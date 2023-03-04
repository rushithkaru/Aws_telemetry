import React from 'react'
import '../css/Card.css'
import esp from '../imgs/esp32.jpeg'
import rasp from '../imgs/raspberry.jpeg'

function DeviceCard(props) {
  return (
    <div className='card'  style={{backgroundColor: 'grey', borderRadius: '20px'}}>
        <div className='card-title'></div>
            <div className='card-body'></div>
        <div className="card__title">
            <h5>
            Device {props.deviceData.id}
            </h5>
        </div>
        <div className="card__body" style={{color: 'black'}}>
            {props.deviceData.id == 1 ? <p>Device: Raspberry Pi 4</p> : <p>Device: ESP32</p>}
            {props.deviceData.greengrass == 1 ?     
                <div className='card_button' style={{color: 'lime'}}>
                    <p>Green Grass Device</p> <button style={{color: 'green', borderRadius: '20px'}}>Update Firmware</button>
                </div> : <></>
            }
        </div>
       
        <div className="card__image">
           {props.deviceData.device == 1 ? < img src={rasp}   alt="esp"/> : < img src={esp}   alt="esp"/>}
        </div>
    </div>
  )
}
/*
    Title
    ID
    connected?
    if rasberry pi? 
        and greengrass
        update firmware button
    if esp32
        disable
    show on home page?
*/
export default DeviceCard