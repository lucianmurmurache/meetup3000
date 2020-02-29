import React, { Component } from 'react';

class Event extends Component {
    state = {
        event: {},
        showDetails: false
    }

    handleShowDetails = () => {
        if (!this.state.showDetails) {
            this.setState({ showDetails: true });
        } else {
            this.setState({ showDetails: false });
        }
    }

    render() {

        const showDetails = this.state.showDetails;

        return (
            <div className="event">
                <div className="event-overview">
                    <p className="event-overview-name">{this.props.event.name}</p>
                    <p className="event-overview-date"><span className="label">When: </span>{this.props.event.local_date}</p>
                    <p className="event-overview-time"><span className="label">Time: </span>{this.props.event.local_time}</p>
                    <button className="event-details-btn" onClick={() => this.handleShowDetails()}>Show more</button>
                </div>
                {showDetails &&
                    <div className="event-details">
                        <p className="event-venue"><span className="label">Venue name: </span>{this.props.event.venue && this.props.event.venue.name}</p>
                        <p className="event-overview-max"><span className="label">Max capacity: </span>{this.props.event.rsvp_limit}</p>
                        <p className="event-overview-going"><span className="label">Going: </span>{this.props.event.yes_rsvp_count}</p>
                        <p className="event-overview-waitlist"><span className="label">Waitlist: </span>{this.props.event.waitlist_count}</p>
                        <p className="event-details-description">{this.props.event.description}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Event;