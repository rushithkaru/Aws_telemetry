
import React, { useState, useEffect } from 'react';
import { Button, Modal, Accordion, InputGroup, FormControl, Form, Spinner, Table} from 'react-bootstrap';

import {FaInfo} from "react-icons/fa";

import {AiOutlineDelete,AiOutlinePlusCircle} from 'react-icons/ai';

import { CiCircleChevDown } from "react-icons/ci";

function ChartSettings(props) {
    const [borderColorChart,setBorderColorChart] =  useState("green");
    const [buttonMess,setButtonMess] = useState("Pause Device");

    const  handlePause = async () => {
        fetch("/pause",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props.deviceNum),
        }).then(
            res => console.log(res)
          );
        if (borderColorChart == 'green'){
            setBorderColorChart('red');
            setButtonMess("Restart Device");
            props.chooseColor('red')
                
        }
        else{
            setBorderColorChart('green');
            setButtonMess("Pause Device")
            props.chooseColor('green')
        }
        console.log(props);
    }

  return (
    
    <div style={{ height: '200px', marginLeft: "2px",marginRight: "15px" ,backgroundColor: 'rgba(97, 104, 69, 0.86)', borderRadius: '5px'}}>
                {/* whenClicked is a property not an event, per se. */}
                <div style={{ position: 'relative',margin: '10px',color: 'yellow'}}>
                    <FaInfo style={{ position: 'absolute', top: 0, right: 0 }} />
                </div>
                <div style={{  margin: '30px' }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px"}}>Device {props.deviceNum}</p>
                    <p style={{ fontSize: "12px" }}>Click the button to remotely control the device</p>
                    <Button style={{ width: "75%",alignItems: "center"}} onClick={() => handlePause()}>{buttonMess}</Button>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '1rem' }}>
                     
                    <AiOutlineDelete style={{ fontSize: '1.25rem', color: 'red' }} />
                    <AiOutlinePlusCircle style={{ fontSize: '1.25rem', color: '#1da1f2' }} />
                    
                    <CiCircleChevDown style={{ fontSize: '1.25rem', color: 'cyan' }} />
                   
                    
                </div>
            

    </div>
  )
}

export default ChartSettings
