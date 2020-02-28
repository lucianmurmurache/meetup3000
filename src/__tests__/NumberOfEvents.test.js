import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('#numberOfEvents-input').prop('value')).toBe(numberOfEvents);
    });

    test('update state when input is changed', () => {
        const eventObject = { target: { value: 32 } };
        NumberOfEventsWrapper.find('#numberOfEvents-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });

    test('render label with numer of events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
    });
});