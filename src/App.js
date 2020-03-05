import React, { Component } from 'react';

import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { getEvents } from './api';
import './App.css';

class App extends Component {

  state = {
    events: [],
    page: 32,
    lat: null,
    lon: null
  }

  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => this.setState({ events, lat, lon }));
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events, page }));
    } else {
      console.log("nothing changed, nothing to update");
    }
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