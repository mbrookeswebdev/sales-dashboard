import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

/**
 * Mail Component
 *
 * Displays the envelope icon with the number of received emails.
 */

class Mail extends Component {
    render() {
        return (
            <div>
               <span className="fa-layers fa-fw fa-2x" style={{backgroundColor: "#ffffff"}}>
               <FontAwesomeIcon icon={faEnvelope} style={{color: "#455a64"}}/>
                   {/*the number below could be changed to the number of real emails from API, for example, {data.emails}*/}
               <span className="fa-layers-counter" style={{backgroundColor: "#dd2c00"}}>16</span>
               </span>
            </div>
        );
    }
}

export default Mail;