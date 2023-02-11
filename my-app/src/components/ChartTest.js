import { Line } from 'react-chartjs-2';
import { useState,useEffect } from 'react';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


function ChartTest() {
  const [numbers, setNumbers] = useState([]);
  const MINUTE_MS = 60000;
  useEffect(() => {
    
    async function fetchData() {
      fetch("/vals").then(
        res => res.json()
      ).then(
        data => {
          setNumbers(data)
          console.log(data)
        }
      )
    }
    
    fetchData();
  },[]);


  const data = {
    labels: ['Mon','Tue','Wed','Mon','Tue','Wed','Mon','Tue','Wed'],
    datasets: [{
      labels: 'Sales',
      data: numbers,
      backgroundColor: 'red',
      borderColor: 'blue',
      tension: 0.5
    }]
  }

  const options = {
    plugins : {
      legend : true
    },
    scales : {
      y: {
        min: 0,
        max: 7
      }
    }
  }

  return (
    <div className="App">
      <h>Hii</h>
      <div style={
        {
        width: '500px',
        height: '600px'
        }
      }>
      <Line 
      data = {data}
      options = {options}
      >
      </Line>
      </div>
    </div>
  );
}

export default ChartTest;
