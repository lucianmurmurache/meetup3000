Feature: Show/hide an event details

    Scenario: By default, the event details are collapsed
        Given user opens the app
        When the events are loaded
        Then the event details are all collapsed

    Scenario: User can expand an event to see details
        Given the app is open
        And the events are loaded
        When the user clicks the show details button of an event
        Then the event description is shown

    Scenario: User can collapse an event to hide details
        Given the app is open
        And the user has clicked on the show details button of an event
        When the user clicks the button again
        Then the event description collapses