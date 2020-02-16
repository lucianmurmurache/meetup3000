import React, { Component } from 'react';

class Event extends Component {
    state = {
        event: {},
        showDetails: false
    }

    handleShowDetails = () => {
        this.setState({ showDetails: true });
    }

    render() {

        const showDetails = this.state.showDetails;

        return (
            <div className="event">
                <div className="event-overview">
                    <p className="event-name">
                        {this.state.event.name}
                    </p>
                    <p className="event-local_date">
                        {this.state.event.local_date}
                    </p>
                    <p className="event-local_time">
                        {this.state.event.local_time}
                    </p>
                    <button
                        className="event-expand-btn"
                        onClick={() => this.handleShowDetails()}
                    >
                        More details
                    </button>
                </div>
                {showDetails &&
                    <div className="event-details">
                        <p className="event-details-description">
                            {this.state.event.description}
                        </p>
                    </div>
                }
            </div>
        );
    }
}

export default Event;