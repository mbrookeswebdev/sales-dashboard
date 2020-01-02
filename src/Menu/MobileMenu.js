import React, {Component} from 'react';
import Mail from "./Mail";
import Alert from "./Alert";
import Logout from "./Logout";

/**
 * MobileMenu Component
 *
 * Displays alert, mail and logout icons when the resolution of the screen is less than 576px.
 */

class MobileMenu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="p-grid">
                <div className="p-grid p-col-6 p-justify-start">
                    <div className="p-col-3 p-md-2 p-lg-2">
                        <Mail/>
                    </div>
                    <div className="p-col-3 p-md-2 p-lg-2">
                        <Alert/>
                    </div>
                </div>
                <div className="p-col-6 p-md-6 p-lg-6" style={{textAlign: "right"}}>
                    <Logout/>
                </div>
            </div>
            </div>
        );
    }
}

export default MobileMenu;