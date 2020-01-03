import React, {Component} from 'react';
import './Customers.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserFriends, faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
//methods used in several components are placed in the shared code file to avoid repetition
import {calculateNumber, calculatePercentage} from '../SharedCode/SharedCode.js';

/**
 * Customers Component
 *
 * Displays a panel with a number of new customers acquired in the current month.
 */

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            numberOfCustomers: null,
            percentage: null
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        // fake data comes from a json file, but the url can be easily changed if an API is available
        let response = await axios.get('http://localhost:3000/data/NumberOfCustomersPerMonth.json');
        if (response.data) {
            const number = calculateNumber(response.data);
            const percentage = calculatePercentage(response.data);
            this.setState({data: response.data, numberOfCustomers: number, percentage: percentage});
        } else {
            console.log('error');
        }
    }

    render() {
        if (this.state.data === null) {
            return null;
        }
        return (
            <div className="customers p-grid">
                <div className={"p-col p-lg-10"}>
                    <h3>Customers:</h3>
                    <div><h4>{this.state.numberOfCustomers}</h4>
                        {(Math.sign(this.state.percentage) === 1 ?
                            <div style={{color: 'green'}}><FontAwesomeIcon icon={faArrowUp}/> {this.state.percentage}%
                                since last month</div> :
                            <div style={{color: 'red'}}><FontAwesomeIcon icon={faArrowDown}/> {this.state.percentage}%
                                since last month</div>)}
                    </div>
                </div>
                <div className={"p-col p-lg-2"} style={{textAlign: "right"}}>
                    <FontAwesomeIcon className="fa-2x" icon={faUserFriends} style={{
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

export default Customers;