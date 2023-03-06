import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import { Button, Modal, Accordion, InputGroup, FormControl, Form, Spinner, Table} from 'react-bootstrap';
function ChartContainer(props){
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
            
                
        }
        else{
            setBorderColorChart('green');
            setButtonMess("Pause Device")
        }
        console.log(props);
    }

    return (
        <div  style={{ display: 'flex', width: '100%', flexDirection: "column", alignItems: "center" }}>

            <Chart colorS={borderColorChart} deviceNum = {props.deviceNum}  ></Chart>
           
            <Button style={{ width: "10%"}} onClick={() => handlePause()}>{buttonMess}</Button>
            
        </div>
        
       
    )

}



export default ChartContainer;

