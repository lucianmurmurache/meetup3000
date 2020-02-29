import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import Event from '../Event';

describe('<Event /> component', () => {

    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });

    test('event is rendered', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('event overview is rendered', () => {
        expect(EventWrapper.find('.event').children()).toHaveLength(1);
    });

    test('event show details button works', () => {
        EventWrapper.setState({
            showDetails: false
        });
        EventWrapper.find('.event-details-btn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('event details are rendered', () => {
        expect(EventWrapper.find('.event-details'))
    });

    test('event overview is renredered', () => {
        expect(EventWrapper.find('.event-overview')).toHaveLength(1);
    });

    test('event overview children are rendered', () => {
        expect(EventWrapper.find('.event-overview').children()).toHaveLength(6);
    });

    test('event details is rendered', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });

    test('event details children are rendered', () => {
        EventWrapper.setState({ showDetails: true });
        expect(EventWrapper.find('.event-details').children()).toHaveLength(1);
    });

    test('event mock data setState', () => {
        EventWrapper.setState({
            event:
            {
                created: 1580903282000,
                duration: 10800000,
                id: "268475456",
                name: "Graduate wellbeing and mental health in the workplace",
                rsvp_limit: 200,
                date_in_series_pattern: false,
                status: "upcoming",
                time: 1582650000000,
                local_date: "2020-02-25",
                local_time: "18:00",
                updated: 1580976737000,
                utc_offset: 3600000,
                waitlist_count: 0,
                yes_rsvp_count: 165,
                venue: {
                    id: 26647072,
                    name: "Kurfürstenstraße 72",
                    lat: 52.50353240966797,
                    lon: 13.349799156188965,
                    repinned: true,
                    address_1: "Kurfürstenstraße 72",
                    city: "Berlin",
                    country: "de",
                    localized_country_name: "Germany"
                },
                group: {
                    created: 1470126927000,
                    name: "N26 Tech, Product & Design Events in Berlin",
                    id: 20270305,
                    join_mode: "open",
                    lat: 52.52000045776367,
                    lon: 13.380000114440918,
                    urlname: "N26-Tech-Product-Design-Events-Berlin",
                    who: "Members",
                    localized_location: "Berlin, Germany",
                    state: "",
                    country: "de",
                    region: "en_US",
                    timezone: "Europe/Berlin"
                },
                link: "https://www.meetup.com/N26-Tech-Product-Design-Events-Berlin/events/268475456/",
                description: "<p>Topic description:</p> <p>In this 1-hour taster session we will introduce and explore concepts that can help you and your managers to better support this transition, including:</p> <p>- Research obtained from the UK on graduate wellbeing during this transition and how those insights relate to EU Graduate programmes<br/>- The difference between wellbeing and mental health<br/>- The intersectionality between diagnosis and wellness<br/>- The difference between positive pressure and stress<br/>- The inter-generational rise in perfectionism as a behavioural trait and how this presents<br/>- Mindset, self-talk and reflexive confidence to<br/>- Employee development ideas to support your colleagues</p> <p>🎤 Moderator: Jeffery Lovejoy Jr. , Global Operations and Future Talent Recruiting Manager @N26</p> <p>Jeff is renowned for always being incredibly passionate about attracting, retaining and developing talent, not only cross industry, but on a global scale too. His journey within recruitment began with Enterprise Rent-A-Car in London as a Talent Acquisition Specialist demonstrating excellence in diversity hiring across 20+ Universities. This enabled him to be promoted to Talent Acquisition Manager for Enterprise Rent-A-Car covering Scotland and Northern Ireland, where he fostered long standing relationships and supported hyper growth across the regions with hiring both intern and graduates, many of whom have gone on to senior management positions. Jeffery has since gone on to oversee recruitment across the EU and North America for FDM Group( IT consulting) where he oversaw record breaking hiring numbers in volume and diversity. Now based in Berlin, with N26 GmbH he is tasked to design, build and support the execution of a best in class global Future Talent recruitment programme .</p> <p>🗣Speaker #1: Rebecca Fielding, Founder and MD, @Gradconsult</p> <p>Over the last twenty years Rebecca has recruited and developed thousands of people for some of the world’s biggest names. Her most recent corporate roles were as Talent Manager for the UK&amp;I with HJ Heinz and as the Head of Leadership and Culture with Asda (Walmart). These roles encompassed all aspects of training, coaching, talent, culture, employee engagement, programmatic development, executive education and leadership development for 175,000 colleagues and 20,000 leaders managers in the U.K. with a global Director and Top Talent remit. Rebecca has been a Board Director of both the Institute of Student Employers and AGCAS in the U.K., both judged and won various national awards for her work and sat on multiple careers advisory bodies. Frequently a key note speaker and presenter at international conferences and in the press you can find her in the FT, People Management, TedX, Training Journal, Guardian and BBC Radio 4 amongst others. You can find out more on LinkedIn</p> <p>🗣Speaker #2: Kylie Cook, Senior Consultant, @Gradconsult</p> <p>Since joining Gradconsult in 2014 Kylie has worked with hundreds of clients across all sectors in the early careers space - both Universities and employers. Alongside her work Kylie has also recently completed an MSc in Human Resource Management, specialising in HRD practices in high-growth SMEs. She has become a recognised talent management specialist, working with everyone from students to executive boards, winning awards and speaking at a range of national conferences on innovation in the sector. You can read her award-winning piece on perfectionism in WonkHE or find our more on LinkedIn</p> <p>Agenda 🕒<br/>18:00 - Guests Arriving<br/>18:30 - Intro to N26<br/>18:35- Topic Discussion and Q&amp;A<br/>20:00 - Networking with guests 💬, food &amp; drinks will be served<br/>21:00 - Closing</p> <p>❗️Please show your ID on the registration.</p> <p>❗️Note that we will be photographing the event for use on our social media channels. We cannot guarantee that you will not appear in any of the photographs- please consider this if you plan to attend.</p> ",
                visibility: "public",
                member_pay_fee: false
            },
        });
        expect(EventWrapper.state('event').name).toBe('Graduate wellbeing and mental health in the workplace');
    });
});