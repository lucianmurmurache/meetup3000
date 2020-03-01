import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';

import { mockEvents } from '../mock-events';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('By default, the event details are collapsed', ({ given, when, then }) => {
        let AppWrapper;
        given('user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        when('the events are loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockEvents.events.length);
        });

        then('the event details are all collapsed', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });

        and('the events are loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockEvents.events.length);
        });

        when('the user clicks the show details button of an event', () => {
            AppWrapper.find('.event .event-details-btn').at(0).simulate('click');
        });

        then('the event description is shown', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });

        and('the user has clicked on the show details button of an event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .event-details-btn').at(0).simulate('click');
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });

        when('the user clicks the button again', () => {
            AppWrapper.find('.event .event-details-btn').at(0).simulate('click');
        });

        then('the event description collapses', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
        });
    });

});
