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
                infoText: 'The value must be at least 1',
            });
        } else if (value >= 100) {
            this.setState({
                infoText: 'Expect longer loading time!',
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
                <label>
                    Show
                    <input
                        type="text"
                        id="numberOfEventsInput"
                        placeholder="32"
                        value={this.state.query}
                        onChange={this.handleInputChanged}
                    />
                    results
                </label>

                <div className="text-alert">
                    <ErrorAlert text={this.state.infoText} />
                </div>
            </div>
        );
    }
}

export default NumberOfEvents;