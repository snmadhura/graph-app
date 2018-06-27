import React, { Component } from 'react';
import './App.css';
import GraphContainer from './container/GraphContainer/GraphContainer';
import Chart from './container/Chart/Chart';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <GraphContainer /> */}
        <Chart />
      </div>
    );
  }
}

export default App;
