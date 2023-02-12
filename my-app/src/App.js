import React from 'react';
import './App.css';
import ChartTest from './components/ChartTest';
import Test from './components/Test';
import ChartContainer from './components/ChartContainer'

function App() {
  return (
    <div className='App' style={{
      display: "flex",flexDirection: "column", alignItems: "center", color: "beige"
    }}>
      <h1 style={{ font: "caption" }}>ESP32 telemetry</h1>
      <div style={{ height: '100%', minHeight: '400px', width: '100%' }}><ChartContainer></ChartContainer></div>
      <div style={{ height: '100%', minHeight: '400px', width: '100%' }}><ChartContainer></ChartContainer></div>
      <div style={{ height: '100%', minHeight: '400px', width: '100%' }}><ChartContainer></ChartContainer></div>
      
      
    </div>
    
    
  );
}

export default App;
