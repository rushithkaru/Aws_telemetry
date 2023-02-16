import React, { useState, useEffect } from 'react';
import ChartTest from './ChartTest';
import { Button, Modal, Accordion, InputGroup, FormControl, Form, Spinner, Table} from 'react-bootstrap';

function ChartContainer(props){
    const [borderColorChart,setBorderColorChart] =  useState("green");
    const [buttonMess,setButtonMess] = useState("Pause Device");
    const  handlePause = async () => {
        fetch("/pause").then(
            res => console.log(res)
          );
        if (borderColorChart == 'green'){
            setBorderColorChart('red');
            setButtonMess("Restart Device");
            
                
        }
        else{
            setBorderColorChart('green');
            setButtonMess("Pause Device")
        }
        console.log(props);
    }

    return (
        <div style={{ display: 'flex', width: '100%', flexDirection: "column", alignItems: "center" }}>

            <ChartTest colorS={borderColorChart} deviceNum = {props.deviceNum}  ></ChartTest>
            
            <Button style={{ width: "10%"}} onClick={() => handlePause()}>{buttonMess}</Button>
        </div>
        
    )

}



export default ChartContainer;

