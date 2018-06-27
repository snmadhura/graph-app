import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';

class Chart extends Component {
  //constructor(props) {
  // super(props);

  state = {
    chartData: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ]
      }]
    }
  }
  //}

  updateDataHandler = () => {
    
    console.log(this.state.chartData);
    axios.get('http://www.json-generator.com/api/json/get/cfWnunPFvm?indent=2')
      .then(response => {
        
        let nchartData = [...this.state.chartData];
        const newdata = Object.values(response.data);
        console.log(Object.values(response.data));
        nchartData.datasets = newdata;
        // console.log(Object.values(chartData.datasets));
        //console.log(chartData.datasets);
        //const mapa = Object.values(chartData.datasets);
        //const result = Object.values(mapa).map((key) => mapa[key]);

        console.log(nchartData);
        this.setState({chartData:nchartData});
        console.log(this.state.chartData);
      })
  }
  render() {
    return (
      <div className="chart">
        <Bar
        data={this.state.chartData}
        />

        <button onClick={this.updateDataHandler}>Update Data</button>
      </div>
    );
  }

}

export default Chart;