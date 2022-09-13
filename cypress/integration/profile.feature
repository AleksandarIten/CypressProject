Feature: Profile Feature

    #This feature is required for a view profile and Edit Profile.
    Scenario: View profile data
    Given A user opens the login page
    When A user login with email and password "aleksandar@gmail.com" "123"
    Then A user clicks the tab Profile, user cant see profile data

    Scenario: Edit profile data
    When A user clicks the tab Edit Profile
    And A user enter surname "surname"
    Then A user clicks Update User, and nothing happened