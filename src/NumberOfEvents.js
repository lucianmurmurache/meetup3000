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
        } else if (value >= 100) {
            this.setState({
                infoText: '100 events will take longer to load, how about a smaller number?',
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
                <label>Number of results</label>
                <input
                    type="text"
                    id="numberOfEventsInput"
                    placeholder="32"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <div className="text-alert">
                    <ErrorAlert text={this.state.infoText} />
                </div>
            </div>
        );
    }
}

export default NumberOfEvents;