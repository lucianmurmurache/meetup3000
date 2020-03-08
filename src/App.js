import React, { Component } from 'react';

import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { getEvents } from './api';
import moment from 'moment';

import {
  ResponsiveContainer,
  CartesianGrid,
  ScatterChart,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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
    window.addEventListener('online', this.warningAlert());
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

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = []; //Empty array for the next 7 days
    const currentDate = moment(); //Today
    //Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); //Add one day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); //Format date
      //Use countEventsOnADate function to count "events on this date"
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); //Add date and number to list
    }
    return next7Days;
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events =>
        this.setState({ events, page })
      );
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

        <ResponsiveContainer height={400}>
          <ScatterChart
            width={800}
            height={400}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis
              type="category"
              dataKey="date"
              name="Date"
            />
            <YAxis
              type="number"
              dataKey="number"
              name="Number of events"
              allowDecimals={false}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter
              data={this.getData()}
              fill="#F2AA4C"
            />
          </ScatterChart>
        </ResponsiveContainer>

        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;