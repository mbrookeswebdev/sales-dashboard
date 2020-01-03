import React, {Component} from 'react';
import './SalesOriginChart.css';
import {Chart} from "primereact/chart";
import axios from "axios";

/**
 * SalesOriginChart Component
 *
 * Displays a pie chart of sale channels.
 *
 */

class SalesOriginChart extends Component {
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
        let response = await axios.get('http://localhost:3000/data/SalesOrigin.json');
        if (response.data) {
            this.setState({data: response.data});
            return response.data;
        } else {
            console.log('error');
        }
    }

    render() {
        const data = {
            labels: this.state.data.map((entry) => entry.type),
            datasets: [
                {
                    data: this.state.data.map((entry) => entry.number),
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "green"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "green"
                    ]
                }]
        };
        return (
            <div className="salesOrigin">
                {(this.state.data) &&
                <div>
                    <h3 style={{textAlign: "center"}}>Total sales origin:</h3>
                    <Chart type="pie" data={data}/>
                </div>}
            </div>
        );
    }
}

export default SalesOriginChart;