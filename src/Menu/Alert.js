import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons";

/**
 * Alert Component
 *
 * Displays the Bell Icon with the number of received alerts
 */

class Alert extends Component {
    render() {
        return (
            <div>
               <span className="fa-layers fa-fw fa-2x" style={{backgroundColor: "#ffffff"}}>
               <FontAwesomeIcon icon={faBell} style={{color: "#455a64"}}/>
               {/*the number below could be changed to the number of real alerts from API, for example, {data.alerts}*/}
                   <span className="fa-layers-counter" style={{backgroundColor: "#dd2c00"}}>23</span>
               </span>
            </div>
        );
    }
}

export default Alert;