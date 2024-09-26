Feature: User authentication
Scenario: ADD incident
Given the user is logged in
When the user submits a new incident report
And the incident ID is unique
And the description is valid
And the incident type is valid
And the incident time is valid
And the number of injuries is valid
And the location is valid
Then the incident should be added successfully
And a confirmation message should be displayed to the user
