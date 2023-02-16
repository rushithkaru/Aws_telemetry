import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import {FiAlertTriangle} from "react-icons/fi";

function PopupData(props) {
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: "column", alignItems: "center" }}>
        <h5>Device 1</h5>
        <div style={{ display: 'flex', alignItems: 'center' }} >
            <b>{props.active ? 'ACTIVE' : 'OFFLINE'}</b>
            {props.active ? 
             (<FcCheckmark/>) :
             (<FiAlertTriangle/>)
            }
            
        </div>
       
    </div>
  )
}

export default PopupData