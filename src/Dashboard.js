import React, {Component} from 'react';
import './App.css';
import 'primeflex/primeflex.css'
import Customers from "./Customers/Customers";
import Orders from "./Orders/Orders";
import Revenue from "./Revenue/Revenue";
import SalesChart from "./SalesChart/SalesChart";
import PendingOrders from "./PendingOrders/PendingOrders";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import SalesOriginChart from "./SalesOrigin/SalesOriginChart";
import MobileMenu from "./Menu/MobileMenu";
import LargeScreenMenu from "./Menu/LargeScreenMenu";
import Greeting from "./Greeting/Greeting";
import Footer from "./Footer/Footer";

/**
 * Dashboard Component
 *
 * Displays all available dashboard components in a grid
 */

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="p-grid">
                    <div className="mobileMenu p-col-12 m-md-12 p-lg-12"><MobileMenu/></div>
                    <div className="largeScreenMenu p-col-12 m-md-12 p-lg-12"><LargeScreenMenu/></div>
                </div>

                <div className="main app p-grid">
                    <div className="p-col-12 m-md-12 p-lg-12"><Greeting/></div>
                </div>

                <div className="p-grid">

                    <div className="p-grid p-nogutter p-col-12 p-md-12 p-lg-6" style={{backgroundColor: "#e3f2fd"}}>
                        <div className="p-col-12 p-md-12 p-lg-6" style={{padding: "1%"}}><Customers/></div>
                        <div className="p-col-12 p-md-12 p-lg-6" style={{padding: "1%"}}><Orders/></div>
                        <div className="p-col-12 p-md-12 p-lg-6" style={{padding: "1%"}}><Revenue/></div>
                        <div className="p-col-12 p-md-12 p-lg-6" style={{padding: "1%"}}><PendingOrders/></div>
                    </div>

                    <div className="p-col-12 p-md-12 p-lg-6" style={{backgroundColor: "#e3f2fd"}}><SalesChart/></div>
                </div>

                <div className="p-grid" style={{backgroundColor: "#e3f2fd"}}>
                    <div className="p-col-12 p-md-12 p-lg-6" style={{backgroundColor: "#e3f2fd"}}><TopSellingProducts/>
                    </div>
                    <div className="p-col-12 p-md-12 p-lg-6" style={{backgroundColor: "#e3f2fd"}}><SalesOriginChart/>
                    </div>
                </div>

                <div className="p-grid" style={{backgroundColor: "#e3f2fd"}}>
                    <div className="p-col-12 m-md-12 p-lg-12"><Footer/></div>
                </div>

            </div>
        );
    }
}

export default Dashboard;
