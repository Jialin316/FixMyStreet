Feature: User authentication
Scenario: Create account
Given the username is not already used
And the email is not already used
And the mobile number is not already used
And the password is valid
And the full name exists
And the reCAPTCHA is valid # antirobot
When the user submits the account creation form
Then a confirmation email should be sent to the user
And the user confirms the account creation via the email link
Then the account should be created successfully

Scenario: Create account with already registered email or phone
Given the username is not already used
And the email is already registered
And the mobile number is already registered
And the password is valid
And the full name exists
And the reCAPTCHA is valid
When the user submits the account creation form
Then the user should see a message saying "This email or phone number is already registered. Please logg in or use a different email or phone number."
