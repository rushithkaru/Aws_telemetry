import React, { useState } from 'react';
import Calendar from 'react-calendar';
import CalendarContainer from '../components/CalendarContainer';
//import 'react-calendar/dist/Calendar.css';
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
    <div>
        <h1>
            Download CSV of Data
        </h1>
        <p>Idea is to be able to download telemtry data as a csv file from s3 bucket (AWS)</p>

        <div>
          <CalendarContainer/>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Calendar onChange={handleDateChange} value={value} />
        </div>

        

    </div>
  )
}

export default FileDown