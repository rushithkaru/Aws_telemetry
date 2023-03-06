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


function Chart(props) {
  const [numbers, setNumbers] = useState([]);
  const [d,setD] = useState([]);
  const MINUTE_MS = 60000;
  const tel = [];
  useEffect(() => {
    
    async function fetchData() {
      fetch("/vals").then(
        res => res.json()
      ).then(
        data => {
          setNumbers(data)
          
        }
      )
    }
    async function getData() {
      fetch("/get-items",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(props.deviceNum),
    }).then(
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
    labels: Array.from({length: 9}, (v, i) => i+1),
    datasets: [{
      label: 'Voltage (V)',
      data: d,
      backgroundColor: 'red',
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.5,
      fill: true
    },
    {
      label: 'Sensor Reading',
      //Fake data for now
      data: [2,3,1,6,4,7,2,1,0,5,2,3,3],
      backgroundColor: 'green',
      borderColor: 'orange',
      tension: 0.5,
      fill: true
    },
   
    ]
  }

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Device ' + props.deviceNum,
      },
      
   
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
   
  }

  return (
   

      <div style={
        {
        width: '950px',
        height: '200px',
        backgroundColor: 'beige',
        borderRadius: '20px',
        border: '2px solid ' + props.colorS,
        
        }
      }>
      <Line 
      data = {data}
      options = {options}
      width={20} height={0}
      >
      </Line>
      </div>
    
  );
}

export default Chart;