import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        query: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });

        if (value <= 0) {
            this.setState({
                infoText: 'Must be at least 1',
            });
        } else {
            this.setState({
                infoText: '',
            });
            this.props.updateEvents(null, null, value);
        }
    }

    render() {
        return (
            <div className="numberOfEvents">
                <div className="text-alert">
                    <ErrorAlert text={this.state.infoText} />
                </div>
                <label>Number of results</label>
                <input
                    type="text"
                    id="numberOfEventsInput"
                    placeholder="32"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;