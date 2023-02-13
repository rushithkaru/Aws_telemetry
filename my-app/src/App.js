import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Map from './Pages/Map';
import FileDown from './Pages/FileDown';
import Signals from './Pages/Signals';
import Devices from './Pages/Devices';
//

function App() {
  return (
    <div className='App' style={{
      display: "flex",flexDirection: "column", color: "beige"
    }}>
      <Routes>
        <Route  path = '/' element = {<Homepage/>}/>
        <Route  path = '/devices' element = {<Devices/>}/>
        <Route  path = '/maps' element = {<Map/>}/>
        <Route  path = '/file' element = {<FileDown/>}/>
        <Route  path = '/signals' element = {<Signals/>}/>
      </Routes>
      <Header />
      
    </div>
    
    
  );
}

export default App;
