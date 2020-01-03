import React, {Component} from 'react';

/**
 * Footer Component
 *
 * Displays the name of the company and today's date
 */

class Footer extends Component {
    render() {
        let date = new Date().getFullYear();
        return (
            <div style={{textAlign: "center", margin: "5%"}}>Copyright &copy; Electric City {date} </div>
        );
    }
}

export default Footer;