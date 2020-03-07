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
                    <div className="event-overview-name">
                        {this.props.event.name}
                    </div>
                    <div className="event-overview-date"> <span>Event date: </span>
                        {this.props.event.local_date}
                    </div>
                    <div className="event-overview-time"> <span>Event time: </span>
                        {this.props.event.local_time}
                    </div>
                    <button
                        className="event-details-btn"
                        onClick={() => this.handleShowDetails()}
                    >
                        Show more
                    </button>
                </div>
                {showDetails &&
                    <div className="event-details">
                        <div className="event-details-venue"> <span>Venue name: </span>
                            {this.props.event.venue && this.props.event.venue.name}
                        </div>
                        <div className="event-details-max"> <span>Max capacity: </span>
                            {this.props.event.rsvp_limit}
                        </div>
                        <div className="event-details-going"> <span>Going: </span>
                            {this.props.event.yes_rsvp_count}
                        </div>
                        <div className="event-details-waitlist"> <span>Waitlist: </span>
                            {this.props.event.waitlist_count}
                        </div>
                        <div
                            className="event-details-description"
                            dangerouslySetInnerHTML={{ __html: this.props.event.description }}>
                        </div>
                        <br />
                        <button
                            className="event-details-btn"
                            onClick={() => this.handleShowDetails()}
                        >
                            Show less
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default Event;