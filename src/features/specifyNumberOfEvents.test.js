import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';

import { mockEvents } from '../mock-events';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When the user has not specified the number of events it defaults to 32', ({ given, when, then }) => {
        let AppWrapper;
        given('the app is open', () => {
            AppWrapper = mount(<NumberOfEvents />);
        });

        when('the user has not specified the number of events', () => {

        });

        then('the number of events displayed is 32', () => {
            expect(AppWrapper.state('query')).toBe(32);
        });
    });

    test('User can update the number of events displayed', ({ given, when, then }) => {
        let AppWrapper;
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user specifies the number of events', () => {
            const eventsNumber = { target: { value: 3 } };
            AppWrapper.find('.numberOfEventsInput').simulate('change', eventsNumber);
        });

        then('the number of events specified will be displayed', () => {
            const numberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            expect(numberOfEventsWrapper.state('query')).toBe(3);
        });
    });

})