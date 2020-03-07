import React, { Component } from 'react';
import { getSuggestions } from './api';

import { InfoAlert } from './Alert';

class CitySearch extends Component {

    state = {
        query: '',
        infoText: '',
        suggestions: []
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
        getSuggestions(value).then(suggestions => {
            this.setState({ suggestions });

            if (value && suggestions.length === 0) {
                this.setState({
                    infoText: 'Unable to find this city, check the spelling or try another city!',
                });
            } else if (value && suggestions.length <= 1) {
                this.setState({
                    infoText: 'At least 2 characters are required to trigger autocomplete!',
                });
            } else {
                this.setState({
                    infoText: '',
                });
            }
        });
    }

    handleItemClicked = (value, lat, lon) => {
        this.setState({ query: value, suggestions: [] });
        this.props.updateEvents(lat, lon);
    }

    render() {
        return (
            <div className="CitySearch">
                <div className="text-alert">
                    <InfoAlert text={this.state.infoText} />
                </div>
                <input
                    type="text"
                    className="city"
                    placeholder="Search for a location..."
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <ul className="suggestions">
                    {this.state.suggestions.map(item =>
                        <li
                            key={item.name_string}
                            onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}
                        >
                            {item.name_string}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default CitySearch;