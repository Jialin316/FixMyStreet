Feature: User authentification
Scenario: Create account
Given User_name is not already used
And E-mail is not already used
And password exist
And full_name exist
Then Add the account in the database