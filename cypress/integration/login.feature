Feature: Login Feature

    #This feature is required for a user to login.
    Scenario: Sucess Login with valid data
    Given A user opens the login page
    When A user enter the email "aleksandar@gmail.com"
    And A user enter the password "123"
    And A user clicks on the login button
    Then A user will be logged in

    Scenario: Sucess Logout 
    When A user clicks on the log out button
    Then A user logged out

    Scenario: Failed Login with invalid data
    Given A user opens the login page
    When A user enter the email "ggg@gmail.com"
    And A user enter the password "eee"
    And A user clicks on the login button
    Then A user will be receiveing a faild message