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
                    <p className="event-overview-date">When: {this.props.event.local_date}</p>
                    <p className="event-overview-time">Time: {this.props.event.local_time}</p>
                    <p className="event-overview-max">Max capacity: {this.props.event.rsvp_limit}</p>
                    <p className="event-overview-going">Going: {this.props.event.yes_rsvp_count}</p>
                    <p className="event-overview-waitlist">Waitlist: {this.props.event.waitlist_count}</p>
                    <button className="event-details-btn" onClick={() => this.handleShowDetails()}>Show more</button>
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