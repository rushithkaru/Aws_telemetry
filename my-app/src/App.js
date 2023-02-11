import React from 'react';
import './App.css';
import ChartTest from './components/ChartTest';
import Test from './components/Test';
import ChartContainer from './components/ChartContainer'

function App() {
  return (
    <div >
      <h1 style={{ backgroundColor: 'blue' }}>ESP32 telemetry</h1>
      <div style={{ height: '100%', minHeight: '400px', width: '100%' }}><ChartContainer></ChartContainer></div>
      <div style={{ height: '100%', minHeight: '400px', width: '100%' }}><ChartContainer></ChartContainer></div>
      <div style={{ height: '100%', minHeight: '400px', width: '100%' }}><ChartContainer></ChartContainer></div>
      
    </div>
    
    
  );
}

export default App;
