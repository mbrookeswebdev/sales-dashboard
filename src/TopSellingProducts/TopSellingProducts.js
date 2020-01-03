import React, {Component} from 'react';
import './TopSellingProducts.css';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import axios from "axios";

/**
 * TopSellingProducts Component
 *
 * Displays a table with the information about the shop's best-selling products.
 *
 */

class TopSellingProducts extends Component {
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
        let response = await axios.get('http://localhost:3000/data/TopSellingProducts.json');
        if (response.data) {
            this.setState({data: response.data});
        } else {
            console.log('error');
        }
    }

    render() {
        if (this.state.data === null) {
            return null;
        }
        return (
            <div className="topProducts">
                <h3 style={{textAlign: "center"}}>Top selling products:</h3>
                <DataTable value={this.state.data} autoscale="true">
                    <Column style={{textAlign: "left"}} field="title" header="Title"/>
                    <Column style={{textAlign: "left"}} field="price" header="Price(£)"/>
                    <Column style={{textAlign: "left"}} field="quantity" header="Quantity"/>
                    <Column style={{textAlign: "left"}} field="amount" header="Amount Sold(£)"/>
                </DataTable>
            </div>
        );
    }
}

export default TopSellingProducts;