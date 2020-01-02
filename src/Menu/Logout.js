import React, {Component} from 'react';
import {Button} from "primereact/button";
import {BrowserRouter as Router, Link} from "react-router-dom";

/**
 * Logout Component
 *
 * Displays the Logout button that could be used to return to the login screen.
 */

class Logout extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/login">
                        <Button label="Logout" icon="pi pi-power-off"
                                style={{marginRight: "5%", backgroundColor: "#1976d2"}}/>
                    </Link>
                </Router>
            </div>
        );
    }
}

export default Logout;