Feature: User authentification
Scenario: Create account
Given User_name is not already used
And E-mail is not already used
And password is valid
And full_name exist
Then Create the account