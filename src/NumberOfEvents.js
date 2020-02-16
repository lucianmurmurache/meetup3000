import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        NumberOfEvents: 10
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });
    }

    render() {
        return (
            <div className="numberOfEvents">
                <label>
                    Number of events:
                </label>
                <input
                    type="text"
                    id="numberOfEvents-input"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;