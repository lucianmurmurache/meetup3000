Feature: Specify number of events

    Scenario: When the user has not specified the number of events it defaults to 32
        Given the app is open
        When the user has not specified the number of events
        Then the number of events displayed is 32

    Scenario: User can update the number of events displayed
        Given the app is open
        When the user specifies the number of events
        Then the number of events specified will be displayed