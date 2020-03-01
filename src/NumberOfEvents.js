import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        query: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
    }

    render() {
        return (
            <div className="numberOfEvents">
                <label>Number of results</label>
                <input type="number" id="numberOfEventsInput" placeholder="32" value={this.state.query} onChange={this.handleInputChanged} />
            </div>
        );
    }
}

export default NumberOfEvents;