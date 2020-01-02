import React, {Component} from 'react';
import "./Menu.css";
import Mail from "./Mail";
import Alert from "./Alert";
import Logout from "./Logout";
import Search from "./Search";

/**
 * LargeScreenMenu Component
 *
 * Displays the search box, alert, mail and logout icons if the resolution of the screen is more than 576px.
 */

export class LargeScreenMenu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="p-grid">
                    <div className="p-col-6 p-md-6 p-lg-6">
                        <Search/>
                    </div>
                    <div className="p-grid p-col-6 p-md-6 p-lg-6 p-align-center p-justify-end">
                        <div className="p-col-2 p-md-2 p-lg-2" style={{textAlign: "right"}}>
                            <Mail/>
                        </div>
                        <div className="p-col-2 p-md-2 p-lg-2">
                            <Alert/>
                        </div>
                        <div className="p-col-2 p-md-2 p-lg-2">
                            <Logout/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LargeScreenMenu;
