import React from 'react';
import ChartContainer from '../components/ChartContainer';

function Homepage() {
  return (
    <div>
        <h1 style={{ font: "caption" }}>ESP32 telemetry</h1>
        <div style={{ height: '100%', minHeight: '300px', width: '100%' }}><ChartContainer deviceNum = {1}></ChartContainer></div>
        <div style={{ height: '100%', minHeight: '300px', width: '100%' }}><ChartContainer deviceNum = {2}></ChartContainer></div>
        <div style={{ height: '100%', minHeight: '300px', width: '100%' }}><ChartContainer deviceNum = {3}></ChartContainer></div>
    </div>
  )
}

export default Homepage