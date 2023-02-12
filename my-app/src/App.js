import React from 'react';
import './App.css';
import ChartTest from './components/ChartTest';
import Test from './components/Test';
import ChartContainer from './components/ChartContainer';
import Header from './components/Header/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='App' style={{
      display: "flex",flexDirection: "column", color: "beige"
    }}>
      
      <Header />
      <h1 style={{ font: "caption" }}>ESP32 telemetry</h1>
      <div style={{ height: '100%', minHeight: '300px', width: '100%' }}><ChartContainer deviceNum = {1}></ChartContainer></div>
      <div style={{ height: '100%', minHeight: '300px', width: '100%' }}><ChartContainer deviceNum = {2}></ChartContainer></div>
      <div style={{ height: '100%', minHeight: '300px', width: '100%' }}><ChartContainer deviceNum = {3}></ChartContainer></div>
      
      
    </div>
    
    
  );
}

export default App;
