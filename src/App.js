import React, { Component } from 'react';

import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { getEvents } from './api';
import './App.css';

class App extends Component {

  state = {
    events: [],
    page: null,
    lat: null,
    lon: null
  }

  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    getEvents(lat, lon, page).then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App" >
        <h1>Meetup3000</h1>

        <CitySearch updateEvents={this.updateEvents} />

        <NumberOfEvents updateEvents={this.updateEvents} />

        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;