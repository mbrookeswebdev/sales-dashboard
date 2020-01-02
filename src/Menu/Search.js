import React, {Component} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

/**
 * Search Component
 *
 * Displays the search box and the button to initiate the search.
 */

class Search extends Component {
    render() {
        return (
            <div className="search">
                    <InputText placeholder="Search" type="text" style={{marginTop: 8, marginLeft: 5}}/>
                        <Button label="Search"
                                style={{marginTop: 4, marginLeft: 8, backgroundColor: "#1976d2"}}/>
            </div>
        );
    }
}

export default Search;