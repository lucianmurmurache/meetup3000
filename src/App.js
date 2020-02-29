import React, { Component } from 'react';

import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { getEvents } from './api';
import './App.css';

class App extends Component {

  state = {
    events: [],
    lat: null,
    lon: null
  }

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));
    this.updateEvents(32);
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App" >
        <h1>Meetup3000</h1>

        <CitySearch updateEvents={this.updateEvents} />

        <NumberOfEvents />

        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;