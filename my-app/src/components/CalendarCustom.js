import React from 'react'
import CalendarContainer from './CalendarContainer';
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsCalendarPlus } from "react-icons/bs";
function CalendarCustom() {
  return (
   
    
    <div style={{backgroundColor: 'grey', position: 'absolute', top: '75px', right: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '500px', borderRadius: '27px' }}>
      <BsCalendarPlus style={{ fontSize: '5rem', color: 'white', margin: '5px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <h5 style={{ color: 'white', textAlign: 'center', margin: '20px' }}>Select the date range for sensor data download.</h5>
          <div style={{ backgroundColor: 'grey', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ color: 'white' }}>Start :</label>
            <CalendarContainer />
            <label style={{ color: 'white' }}>End  :</label>
            <CalendarContainer />
          </div>
        </div>
      </div>
  )
}

export default CalendarCustom