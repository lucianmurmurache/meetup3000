import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('numnerOfEvents input is generated', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('render text input correctly', () => {
        const queryNumber = NumberOfEventsWrapper.state('query');
        expect(NumberOfEventsWrapper.find('#numberOfEventsInput').prop('value')).toBe(queryNumber);
    });

    test('render label with numer of events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
    });

    test('number of events is 32 if not changed by user', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
    });
});
