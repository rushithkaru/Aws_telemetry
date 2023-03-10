import React, { useState } from 'react';
import Calendar from 'react-calendar';
import CalendarCustom from '../components/CalendarCustom';
import SelectDevice from '../components/SelectDevice';

import '../css/Calendar.css'
function FileDown() {
  const [value, onChange] = useState(new Date());

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    console.log(date);
    if (startDate === null) {
      setStartDate(date);
    } else if (endDate === null) {
      if (date > startDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
        setEndDate(null);
      }
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
        <h1>Download Sensor Data</h1>
        <CalendarCustom></CalendarCustom>
        <SelectDevice></SelectDevice>
        
    </div>
  )
}

export default FileDown