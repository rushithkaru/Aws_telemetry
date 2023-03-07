import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import ChartSettings from './ChartSettings';
import { Button, Modal, Accordion, InputGroup, FormControl, Form, Spinner, Table} from 'react-bootstrap';
import '../css/Card.css'
function ChartContainer(props){
    const [borderColorChart,setBorderColorChart] =  useState("green");
    const [buttonMess,setButtonMess] = useState("Pause Device");
    
    const chooseColor = (message) => {
        setBorderColorChart(message);
      };

    return (
        <div  className='cards-container'>

            <div style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                <Chart colorS={borderColorChart} deviceNum={props.deviceNum} />
                <ChartSettings deviceNum={props.deviceNum} chooseColor= {chooseColor}></ChartSettings>
            </div>

            
        </div>
        
       
    )

}



export default ChartContainer;

