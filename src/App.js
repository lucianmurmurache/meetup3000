import React, { Component } from 'react';

import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { getEvents } from './api';
import './App.css';

class App extends Component {

  state = {
    events: [],
    page: 32,
    lat: null,
    lon: null,
    infoText: null
  }

  componentDidMount() {
    this.updateEvents();
    window.addEventListener('online', this.offlineAlert());
  }

  warningAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        infoText: 'No internet access, the results are now locally stored and may not be up to date. Reconnect for an updated list of results.',
      });
    } else {
      this.setState({
        infoText: '',
      });
    }
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => this.setState({ events, lat, lon }));
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events, page }));
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events =>
        this.setState({ events })
      );
    }
  }

  render() {
    return (
      <div className="App" >

        <h1>Meetup3000</h1>

        <CitySearch updateEvents={this.updateEvents} />

        <div className="text-alert">
          <WarningAlert text={this.state.infoText} />
        </div>

        <NumberOfEvents updateEvents={this.updateEvents} />

        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;