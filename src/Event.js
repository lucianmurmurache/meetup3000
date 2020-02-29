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
                    <p className="event-overview-date"><span>Event date: </span>{this.props.event.local_date}</p>
                    <p className="event-overview-time"><span>Event time: </span>{this.props.event.local_time}</p>
                    <button className="event-details-btn" onClick={() => this.handleShowDetails()}>Show more</button>
                </div>
                {showDetails &&
                    <div className="event-details">
                        <p className="event-details-venue"><span>Venue name: </span>{this.props.event.venue && this.props.event.venue.name}</p>
                        <p className="event-details-max"><span>Max capacity: </span>{this.props.event.rsvp_limit}</p>
                        <p className="event-details-going"><span>Going: </span>{this.props.event.yes_rsvp_count}</p>
                        <p className="event-details-waitlist"><span>Waitlist: </span>{this.props.event.waitlist_count}</p>
                        <p className="event-details-description">{this.props.event.description}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Event;