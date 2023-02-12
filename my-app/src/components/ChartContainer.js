import React, { useState, useEffect } from 'react';
import ChartTest from './ChartTest';
import { Button, Modal, Accordion, InputGroup, FormControl, Form, Spinner, Table} from 'react-bootstrap';

function ChartContainer(){
    const [borderColorChart,setBorderColorChart] =  useState("green");
    const  handlePause = () => {
        setBorderColorChart('red');
    }

    return (
        <div style={{ display: 'flex', width: '100%', flexDirection: "column", alignItems: "center" }}>

            <ChartTest colorS={borderColorChart} ></ChartTest>
            
            <Button style={{ width: "10%",border: '2px solid red' }} onClick={() => handlePause()}>Pause Device</Button>
        </div>
        
    )

}



export default ChartContainer;

