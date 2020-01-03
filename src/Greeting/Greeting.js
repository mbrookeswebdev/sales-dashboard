import React, {Component} from 'react';
import './Greeting.css';

/**
 * Greeting Component
 *
 * Displays the greeting and today's date
 */

class Greeting extends Component {

    render() {
        let date = new Date().toLocaleDateString();
        return (
            <div className="greeting">
                {/*the fake name below could be substituted with the real name from the API, for example, {data.managerName}*/}
                <h2 style={{marginLeft: "2%", paddingTop: "1%"}}>Welcome back, John</h2>
                <div style={{marginLeft: "2%"}}>{date}</div>
                <hr/>
            </div>
        );
    }
}

export default Greeting;