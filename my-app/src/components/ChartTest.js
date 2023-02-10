import { Line } from 'react-chartjs-2';

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

  const data = {
    labels: ['Mon','Tue','Wed'],
    datasets: [{
      labels: 'Sales',
      data: [3,6,1,9],
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
        min: 3,
        max: 15
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
