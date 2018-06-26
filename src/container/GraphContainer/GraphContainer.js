import React, { Component } from 'react';
import * as ReactD3 from 'react-d3-components';
import axios from 'axios';

class SomeComponent extends Component {

    state = {
        data: [{
            values: [
                { 'x': 'Spears', 'y': 10 },
                { 'x': 'Norris', 'y': 4 },
                { 'x': 'Althea', 'y': 3 },
                { 'x': 'Bobbie', 'y': 5 },
                { 'x': 'Ola', 'y': 1 }
            ]
        }]
    }

    getDataHandler = () => {
        axios.get('http://www.json-generator.com/api/json/get/crcFXVFrGW?indent=2')
            .then(response => {
                const data = { ...this.state.data }
                data.values = response.data;
                this.setState({ data });
                console.log(data);
            })
    }
    render() {
        let BarChart = ReactD3.BarChart;
        return (
            <div>
                <BarChart
                    data={this.state.data}
                    width={400}
                    height={400}
                    margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
                <button onClick={this.getDataHandler}>UPDATE DATA</button>
            </div>
        );

    }
}

export default SomeComponent;