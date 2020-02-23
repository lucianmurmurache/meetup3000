import React, { Component } from 'react';

import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { getEvents } from './api';
import './App.css';

class App extends Component {

  state = {
    events: []
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App" >
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;