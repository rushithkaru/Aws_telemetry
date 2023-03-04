import React from 'react'
import '../css/Card.css'
import esp from '../imgs/esp32.jpeg'
import rasp from '../imgs/raspberry.jpeg'

function DeviceCard(props) {
  return (
    <div className='card'  style={{backgroundColor: 'grey', borderRadius: '20px'}}>
        <div className='card-title'></div>
            <div className='card-body'></div>

        <p>{props.deviceData}
        </p>
        <div className="card__image"><img src={rasp} alt="esp"/></div>
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