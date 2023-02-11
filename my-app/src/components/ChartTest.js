import { Line } from 'react-chartjs-2';
import { useState,useEffect } from 'react';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title
} from 'chart.js';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


function ChartTest() {
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
    labels: ['Mon','Tue','Wed','Mon','Tue','Wed','Mon','Tue','Wed'],
    datasets: [{
      labels: 'Sales',
      data: d,
      backgroundColor: 'red',
      borderColor: 'blue',
      tension: 0.5,
      fill: true
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
    },
    title : {
      display: true,
      text: "hi"
    }
  }

  return (
    <div>

      <div style={
        {
        width: '400px',
        height: '200px',
        backgroundColor: 'rgb(133, 227, 246)'
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
