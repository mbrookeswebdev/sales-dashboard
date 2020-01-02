import React, {Component} from 'react';
import './Revenue.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faMoneyBillWaveAlt} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
//methods used in several components are placed in the shared code file to avoid repetition
import {calculatePercentage} from '../SharedCode/SharedCode.js';

/**
 * Revenue Component
 *
 * Displays a panel with the total revenue number for the current year.
 */

class Revenue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            sum: null,
            percentage: null
        };

        this.calculateSum = this.calculateSum.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        // fake data comes from a json file, but the url can be easily changed if an API is available
        let response = await axios.get('http://localhost:3000/data/Revenue.json');
        if (response.data) {
            const number = this.calculateSum(response.data);
            const percentage = calculatePercentage(response.data);
            this.setState({data: response.data, sum: number, percentage: percentage});
        } else {
            console.log('error');
        }
    }

    calculateSum(data) {
        let number = 0;
        for (let i = 0; i < data.length; i++) {
            number += data[i].sum;
        }
        return number;
    }

    render() {
        if (this.state.data === null) {
            return null;
        }
        return (
            <div className="revenue p-grid">
                <div className={"p-col p-lg-10"}>
                    <h5>Total revenue this year:</h5>
                    <div><h5>{this.state.sum}</h5>
                        {(this.state.positive ?
                            <FontAwesomeIcon icon={faArrowUp} style={{color: 'green'}}/> :
                            <FontAwesomeIcon icon={faArrowDown} style={{color: 'red'}}/>)}
                        <span style={{color: this.state.positive ? 'green' : 'red'}}> {this.state.percentage}% since last month</span>
                    </div>
                </div>
                <div className={"p-col p-lg-2"} style={{textAlign: "right"}}>
                    <FontAwesomeIcon className="fa-2x" icon={faMoneyBillWaveAlt} style={{
                        color: "#9e9e9e",
                        backgroundColor: "#e3f2fd",
                        borderRadius: "15%",
                        padding: "3%"
                    }}/>
                </div>
            </div>
        );
    }
}

export default Revenue;