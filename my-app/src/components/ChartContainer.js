import React, { useState, useEffect } from 'react';
import ChartTest from './ChartTest';
import { Button, Modal, Accordion, InputGroup, FormControl, Form, Spinner, Table} from 'react-bootstrap';

function ChartContainer(){

    return (
        <div style={{ display: 'flex', width: '100%' }}>

            <ChartTest></ChartTest>
            
            <Button style={{ width: "10%" }}>Delete</Button>
        </div>
        
    )

}



export default ChartContainer;

