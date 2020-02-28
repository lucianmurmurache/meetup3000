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
                    <p className="event-overview-name">{this.props.event.name}</p>
                    <p className="event-overview-date">{this.props.event.local_date}</p>
                    <p className="event-overview-time">{this.props.event.local_time}</p>
                    <button className="event-details-btn" onClick={() => this.handleShowDetails()}>More details</button>
                </div>
                {showDetails &&
                    <div className="event-details">
                        <p className="event-details-description">{this.props.event.description}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Event;