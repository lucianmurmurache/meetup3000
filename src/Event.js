import React, { Component } from 'react';

import {
    ResponsiveContainer,
    PieChart,
    Tooltip,
    Legend,
    Cell,
    Line,
    Pie
} from 'recharts';

class Event extends Component {
    state = {
        event: {},
        showDetails: false
    }

    // Show/Hide details
    handleShowDetails = () => {
        if (!this.state.showDetails) {
            this.setState({ showDetails: true });
        } else {
            this.setState({ showDetails: false });
        }
    }

    // PieChart Data
    getData = () => {
        const limit = this.props.event.rsvp_limit;
        const going = this.props.event.yes_rsvp_count;
        const free = limit - this.props.event.yes_rsvp_count;

        return (
            [
                { "name": "Going", "value": going },
                { "name": "Free", "value": free }
            ]
        )
    }

    render() {

        const showDetails = this.state.showDetails;
        let colors = ['#F2AA4C', '#F78C00']

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
                        {this.state.showDetails ? (
                            <span>Show less</span>
                        ) : (
                                <span>Show more</span>
                            )}
                    </button>
                </div>
                {showDetails &&
                    <div className="event-details">
                        {this.props.event.yes_rsvp_count && this.props.event.rsvp_limit ?
                            <ResponsiveContainer height={200}>
                                <PieChart width={200} height={200}>
                                    <Pie
                                        data={this.getData()}
                                        ourterRadius={80}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        label
                                    >
                                        {
                                            this.getData().map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={colors[index]}
                                                />
                                            ))
                                        }
                                    </Pie>
                                    <Tooltip />
                                    <Legend
                                        verticalAlign="top"
                                        height={35}
                                    >
                                        <Line
                                            name="Going"
                                            type="monotone"
                                            dataKey="going"
                                            stroke="#F2AA4C"
                                        />
                                        <Line
                                            name="Free"
                                            type="monotone"
                                            dataKey="free"
                                            stroke="#F78C00"
                                        />
                                    </Legend>
                                </PieChart>
                            </ResponsiveContainer>
                            : null}
                        <div className="event-details-venue"> <span>Venue name: </span>
                            {this.props.event.venue && this.props.event.venue.name}
                        </div>
                        <div className="event-details-address"> <span>Venue address: </span>
                            {this.props.event.venue && this.props.event.venue.address_1}
                        </div>
                        <div
                            className="event-details-description"
                            dangerouslySetInnerHTML={{ __html: this.props.event.description }}>
                        </div>
                        <br />
                    </div>
                }
            </div>
        );
    }
}

export default Event;