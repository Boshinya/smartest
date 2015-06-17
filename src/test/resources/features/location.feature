@addnewlocation
Feature: Adding New location
  As a user
  I should be able to add a new location
  so that the screen navigates to the new location

  Scenario: Adding new location showing modal
    Given I am on the smartfocus site page
    When I click on New menu
    And I click on location menu item
    Then I should see the New location modal

  Scenario Outline: Adding new location information
    Given I am adding new location
    When I enter Name as <Name>
    And I enter Major as<Major>
    And I enter Description as<Description>
    When I enter postcode as <postcode>
    And I select correct address from drop down list
    And latitude and longitude should be populated as <lat> and <long>
    And I enter radius as <radius>
    And I enter catchment area as <catchment area>
    And I click on create button
    Then New location should be created as <Name>
    And screen should be navigated to new location on <lat> and <long>
  Examples:
    | Name                      | Major | Description       | postcode | radius | catchment area |lat         |long               |
    | Automation Test-High road |90     | Ilford High street| IG1 1YT  | 10     | 20             |51.5623078  |0.07643529999995735|