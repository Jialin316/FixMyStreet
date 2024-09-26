Feature: User authentication
Scenario: LOGIN
Given the username is already used
And the email is registered
And the password is correct
When the user submits the login form
Then the user should be logged in successfully
Scenario: LOGIN with incorrect password
Given the username is already used
And the email is registered
And the password is incorrect
When the user submits the login form
Then the user should see a "Forgot Password?" button
When the user clicks on the "Forgot Password?" button
Then the user should choose a recovery method # CHATGBT UTILISER ICI 
    | Method         |
    | Email          |
    | Phone Number   |
When the user selects Email
Then a link should be sent to the user's email to reset the password
When the user selects Phone Number
Then a link should be sent to the user's phone number to reset the password
When the user clicks on the reset link
Then the user should be able to set a new password
When the user returns to the login page
And enters the new password
Then the user should be logged in successfully
Scenario: LOGIN with unregistered email
Given the username is already used
And the email is not registered
And the password is correct
When the user submits the login form
Then the user should see a message saying "Email does not exist"