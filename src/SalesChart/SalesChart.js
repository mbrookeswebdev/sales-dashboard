import React, {Component} from 'react';
import './SalesChart.css';
import {Chart} from "primereact/chart/";
import axios from "axios";

/**
 * SalesChart Component
 *
 * Displays a bar chart of anticipated sales vs sales received this month.
 *
 */

export class SalesChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        // fake data comes from a json file, but the url can be easily changed if an API is available
        let response = await axios.get('http://localhost:3000/data/AnticipatedSalesVSActualSales.json');
        if (response.data) {
            this.setState({data: response.data});
            return response.data;
        } else {
            console.log('error');
        }
    }

    render() {
        if (this.state.data === null) {
            return null;
        }
        const stackedData = {
            labels: this.state.data.map((entry) => entry.month),
            datasets: [{
                type: 'bar',
                label: 'Anticipated',
                backgroundColor: '#1976d2',
                data: this.state.data.map((entry) => entry.anticipated)
            }, {
                type: 'bar',
                label: 'Actual',
                backgroundColor: '#FFCA28',
                data: this.state.data.map((entry) => entry.actual)
            }
            ]
        };

        const stackedOptions = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };

        return (
            <div className="chart">
                {(this.state.data) &&
                <div>
                    <h3 style={{textAlign: "center"}}>Projected sales VS actual sales</h3>
                    <Chart type="bar" data={stackedData} options={stackedOptions}/>
                </div>}
            </div>
        )
    }
}

export default SalesChart;