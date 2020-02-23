import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

import { mockEvents } from '../mock-events';

describe('<App /> component', () => {

  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents,', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })

});

describe('<App /> integration', () => {

  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.4, 1.5);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.4, 1.5);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.4, 1.5);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
    expect(AppWrapper.find('.event')).toHaveLength(4);
    AppWrapper.unmount();
  });

});

/*
23.02.2020
==============================================ERROR MESSAGE=====================================================================


PASS src/__tests__/Event.test.js (6.099s)
FAIL src/__tests__/App.test.js (6.316s)
  ● Console

    console.error node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/virtual-console.js:29
      Error: Not implemented: navigation (except hash changes)
          at module.exports (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-environment-jsdom\node_modules\jsdom\lib\jsdom\browser\not-implemented.js:9:17)
          at navigateFetch (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-environment-jsdom\node_modules\jsdom\lib\jsdom\living\window\navigation.js:74:3)
          at exports.navigate (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-environment-jsdom\node_modules\jsdom\lib\jsdom\living\window\navigation.js:52:3)
          at LocationImpl._locationObjectNavigate (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-environment-jsdom\node_modules\jsdom\lib\jsdom\living\window\Location-impl.js:29:5)
          at LocationImpl._locationObjectSetterNavigate (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-environment-jsdom\node_modules\jsdom\lib\jsdom\living\window\Location-impl.js:23:17)
          at LocationImpl.set href [as href] (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-environment-jsdom\node_modules\jsdom\lib\jsdom\living\window\Location-impl.js:45:10)
          at Location.set [as href] (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-environment-jsdom\node_modules\jsdom\lib\jsdom\living\generated\Location.js:143:27)
          at getAccessToken (C:\Users\lucia\meetup3000\meetup3000\src\api.js:12:13)
          at getEvents (C:\Users\lucia\meetup3000\meetup3000\src\api.js:58:25)
          at App.updateEvents (C:\Users\lucia\meetup3000\meetup3000\src\App.js:16:5) undefined

  ● <App /> integration › change state after get list of events

    expect(received).toEqual(expected) // deep equality

    - Expected
    + Received

    - Array [
    -   Object {
    -     "created": 1581676443000,
    -     "date_in_series_pattern": false,
    -     "description": "<p>In this session Mohit Chhabra will give you insights how to run real apps on the most popular container orchestrator in Azure.</p> <p>We’ll review a high-level overview of the Azure Kubernetes Service (AKS) service and Azure Container Registry (ACR). We will start with the basic concepts of Kubernetes followed by understanding how AKS is different from the vanilla Kubernetes. Finally we'll be setting up and deploying a real world app on AKS. Feel free to follow along!</p> <p>Our speaker Mohit is working as Software Engineer at medialesson GmbH, Germany. He is currently Microsoft Most Valuable Professional for Microsoft Azure and former leader of BDotnet (India's Biggest offline community). He has delivered more than 50 sessions in the community and international conferences. Prior to this, Mohit was Microsoft Student Partner and Mozilla Student Representative. He was also India's first Azure Champion and the first person to intern in Microsoft Technology Center.</p> <p>This meetup will be hosted by medialesson, food and drinks will be provided. The session language is English. Please make sure you update your RSVP status 24h in advance so we don't waste any food!</p> ",
    -     "duration": 5400000,
    -     "group": Object {
    -       "country": "de",
    -       "created": 1520252901000,
    -       "id": 27731423,
    -       "join_mode": "open",
    -       "lat": 48.13999938964844,
    -       "localized_location": "München, Germany",
    -       "lon": 11.579999923706055,
    -       "name": "Software, Technology & Design Meetup München",
    -       "region": "en_US",
    -       "state": "",
    -       "timezone": "Europe/Berlin",
    -       "urlname": "Software-Technology-Meetup-Munchen",
    -       "who": "Mitglieder",
    -     },
    -     "how_to_find_us": "The entry to building No. 8 is directly accessible from Leopoldstr. near Siegestor, walk down the broad spiral stairs down to the basement and enter trough the first glass door on the right hand.",
    -     "id": "268705764",
    -     "link": "https://www.meetup.com/Software-Technology-Meetup-Munchen/events/268705764/",
    -     "local_date": "2020-03-05",
    -     "local_time": "18:30",
    -     "member_pay_fee": false,
    -     "name": "Running Kubernetes on Azure",
    -     "rsvp_limit": 80,
    -     "status": "upcoming",
    -     "time": 1583429400000,
    -     "updated": 1581927279000,
    -     "utc_offset": 3600000,
    -     "venue": Object {
    -       "address_1": "Leopoldstr. 8-10",
    -       "address_2": "c/o Nutrion Coworking Space",
    -       "city": "München",
    -       "country": "de",
    -       "id": 25766821,
    -       "lat": 48.153099060058594,
    -       "localized_country_name": "Germany",
    -       "lon": 11.583580017089844,
    -       "name": "medialesson - Büro München",
    -       "repinned": true,
    -     },
    -     "visibility": "public",
    -     "waitlist_count": 0,
    -     "yes_rsvp_count": 36,
    -   },
    -   Object {
    -     "created": 1581605836000,
    -     "date_in_series_pattern": false,
    -     "description": "<p>Join us for our first meetup in March with our colleagues Srishti and Mario!</p> <p>In this talk we are going to talk about building lean backends in Kotlin, using a functional approach.</p> <p>The language is well suited for this, as it is pragmatic, not afraid of borrowing ideas and has a burgeoning ecosystem. Many talks focus on Android development, but we want to go in the other direction and speak about server side code. Specifically, our focus will be on small services that interact with other services using REST APIs and JSON, in a microservices ecosystem.</p> <p>Kotlin is already quite functional, supporting things like immutability and null safety out of the box. Starting from there we will expand on these and other patterns, like avoiding exceptions and expressing logic as a sequence of transformations, with the help of the excellent Arrow library. We will show code that runs in our production applications that is both elegant and maintainable. You will be able to adopt some of our ideas incrementally and see the benefits for yourself.</p> <p>ABOUT SRISHTI:<br/>Srishti is a software developer and tech enthusiast. She is passionate about clean code, problem-solving, test-driven development, and constantly learning topics that help her to develop quality software.</p> <p>ABOUT MARIO:<br/>Mario develops software for a living. Then he goes home and continues reading about software because he just cannot get enough.<br/>At some point, somebody thought it was a good idea to make him the technical lead of an agile team. He quickly discovered that building things himself is not the same as helping somebody else figure it out.<br/>He learned, somewhat to his surprise, that he really enjoys sharing ideas. According to their feedback, other developers have managed to learn something from Mario. At least they don't tend to run away screaming, which is, as he thinks, a good thing.</p> <p>SNACKS:<br/>As always we are offering various snacks and, beer and soft drinks. No full meal, but something to nibble on.</p> <p>AGENDA:<br/>18:30 Doors open for snacks, drinks and mingle<br/>19:00 Talk and questions<br/>20:00 More questions, drinks and mingle</p> ",
    -     "duration": 9000000,
    -     "group": Object {
    -       "country": "de",
    -       "created": 1413448074000,
    -       "id": 17658472,
    -       "join_mode": "open",
    -       "lat": 48.13999938964844,
    -       "localized_location": "München, Germany",
    -       "lon": 11.579999923706055,
    -       "name": "ThoughtWorks Munich",
    -       "region": "en_US",
    -       "state": "",
    -       "timezone": "Europe/Berlin",
    -       "urlname": "ThoughtWorks-Muenchen",
    -       "who": "Mitglieder",
    -     },
    -     "how_to_find_us": "The entrance is right next to the entrance of the big bike shop “Stadler”. If you are standing in front of the entrance of Holiday Inn you have to go around the whole building to find our entrance.",
    -     "id": "268682611",
    -     "link": "https://www.meetup.com/ThoughtWorks-Muenchen/events/268682611/",
    -     "local_date": "2020-03-05",
    -     "local_time": "18:30",
    -     "member_pay_fee": false,
    -     "name": "TW presents: Lean backends using functional Kotlin",
    -     "rsvp_limit": 140,
    -     "status": "upcoming",
    -     "time": 1583429400000,
    -     "updated": 1581606039000,
    -     "utc_offset": 3600000,
    -     "venue": Object {
    -       "address_1": "Bothestraße 11",
    -       "city": "München",
    -       "country": "de",
    -       "id": 25852478,
    -       "lat": 48.135501861572266,
    -       "localized_country_name": "Germany",
    -       "lon": 11.613557815551758,
    -       "name": "ThoughtWorks Munich ",
    -       "repinned": true,
    -     },
    -     "visibility": "public",
    -     "waitlist_count": 3,
    -     "yes_rsvp_count": 140,
    -   },
    -   Object {
    -     "created": 1581930400000,
    -     "date_in_series_pattern": false,
    -     "description": "<p>IMPORTANT:<br/>We're still checking who can host this event, so there will be updates!</p> <p>---</p> <p>Zsófia Herendi, IBM</p> <p>Zsófia is a product manager who has spent more than 14 years bringing developers and business people together, 10+ years working on different teams and 6+ years working in an agile environment. She is a skilled modeler with a passion for diagramming and an addiction to optimizing flow.</p> <p>---</p> <p>Find the common language between business and IT</p> <p>Did you know that there are large corporates out there with hundreds of customised versions of the same ERP system built by different teams serving the same purpose? Or, have you observed shadow IT, where business departments take matters into their own hands when not getting attention in the IT department?<br/>Complex legacy architecture all too often reduce the competitive edge and business agility in large organisations, as well as becoming both more costly to maintain and expand upon. Resolving service problems takes a long time and new initiatives to fix and improve takes too long to realise, if at all.<br/>Value stream mapping and business process diagrams may provide some insight, but they will not necessarily give you the proper context as duplications and bias in your ecosystem often is well hidden. You lack the necessary situational awareness.<br/>When walking out of this session you will have the tools needed to gain a holistic view of your company, including the ability to map out IT’s current situation.</p> ",
    -     "duration": 12600000,
    -     "group": Object {
    -       "country": "de",
    -       "created": 1510734921000,
    -       "id": 26604821,
    -       "join_mode": "open",
    -       "lat": 48.13999938964844,
    -       "localized_location": "München, Germany",
    -       "lon": 11.579999923706055,
    -       "name": "DDD MUC",
    -       "region": "en_US",
    -       "state": "",
    -       "timezone": "Europe/Berlin",
    -       "urlname": "DDD-MUC",
    -       "who": "Mitglieder",
    -     },
    -     "id": "268770204",
    -     "link": "https://www.meetup.com/DDD-MUC/events/268770204/",
    -     "local_date": "2020-03-11",
    -     "local_time": "18:00",
    -     "member_pay_fee": false,
    -     "name": "Find the common language between business and IT (with Zsófia Herendi)",
    -     "rsvp_limit": 60,
    -     "status": "upcoming",
    -     "time": 1583946000000,
    -     "updated": 1582043298000,
    -     "utc_offset": 3600000,
    -     "visibility": "public",
    -     "waitlist_count": 0,
    -     "yes_rsvp_count": 40,
    -   },
    - ]
    + Array []

      47 |     AppWrapper.instance().updateEvents(1.4, 1.5);
      48 |     await AppWrapper.update();
    > 49 |     expect(AppWrapper.state('events')).toEqual(mockEvents.events);
         |                                        ^
      50 |   });
      51 |
      52 |   test('render correct list of events', () => {

      at Object.<anonymous> (src/__tests__/App.test.js:49:40)

PASS src/__tests__/NumberOfEvents.test.js
PASS src/__tests__/EventList.test.js
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 App.js   |      100 |      100 |      100 |      100 |                   |
 Event.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|

Test Suites: 1 failed, 3 passed, 4 total
Tests:       1 failed, 14 passed, 15 total
Snapshots:   0 total
Time:        9.973s
Ran all test suites related to changed files.



*/