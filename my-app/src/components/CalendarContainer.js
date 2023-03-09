import React, { useState } from 'react';
import { Button, Modal, Accordion, InputGroup, FormControl, Form, Spinner, Table} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarContainer() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker popperPlacement="auto"   selected={startDate} onChange={(date) => setStartDate(date)} />

        </div>
    )
}

export default CalendarContainer