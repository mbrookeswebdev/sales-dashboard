import React, {Component} from 'react';
import './PendingOrders.css';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruck} from "@fortawesome/free-solid-svg-icons";

/**
 * PendingOrders Component
 *
 * Displays the number of unprocessed orders.
 */

class PendingOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        // fake data comes from a json file, but the url can be easily changed if an API is available
        let response = await axios.get('http://localhost:3000/data/PendingOrders.json');
        if (response.data) {
            this.setState({data: response.data[0].pending});
        } else {
            console.log('error');
        }
    }

    render() {
        if (this.state.data === null) {
            return null;
        }
        return (
            <div className="pendingOrders p-grid">
                <div className={"p-col p-lg-10"}>
                    <h5>Pending orders:</h5>
                    <div><h5>{this.state.data &&
                    this.state.data}</h5></div>
                </div>
                <div className={"p-col p-lg-2"} style={{textAlign: "right"}}>
                    <FontAwesomeIcon className="fa-2x" icon={faTruck} style={{
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

export default PendingOrders;