import { Line } from 'react-chartjs-2';
import { useState,useEffect } from 'react';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
)


function ChartTest(props) {
  const [numbers, setNumbers] = useState([]);
  const [d,setD] = useState([]);
  const MINUTE_MS = 60000;
  const tel = [];
  useEffect(() => {
    
    async function fetchData() {
      console.log(props.colorS);
      fetch("/vals").then(
        res => res.json()
      ).then(
        data => {
          setNumbers(data)
          
        }
      )
    }
    async function getData() {
      fetch("/get-items").then(
        res => res.json()
      ).then(
        data => {
          setD(data)
          
        }
      )
    }
    
    const intervalId = setInterval(async () => {
      fetchData();
      getData();
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  },[]);


  const data = {
    labels: ['0','1','2','3','4','5','6','7','8'],
    datasets: [{
      label: 'Voltage',
      data: d,
      backgroundColor: 'red',
      borderColor: 'blue',
      tension: 0.5,
      fill: true
    }]
  }

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Device 1',
      },
      
   
    },
    scales : {
      y: {
        min: 0,
        max: 7
      }
    },
   
  }

  return (
   

      <div style={
        {
        width: '400px',
        height: '200px',
        backgroundColor: 'rgb(133, 227, 246)',
        borderRadius: '20px',
        border: '2px solid ' + props.colorS,
        
        }
      }>
      <Line 
      data = {data}
      options = {options}
      >
      </Line>
      </div>
    
  );
}

export default ChartTest;
