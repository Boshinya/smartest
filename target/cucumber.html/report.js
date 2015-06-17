$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("location.feature");
formatter.feature({
  "line": 2,
  "name": "Adding New location",
  "description": "As a user\r\nI should be able to add a new location\r\nso that the screen navigates to the new location",
  "id": "adding-new-location",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addnewlocation"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Adding new location showing modal",
  "description": "",
  "id": "adding-new-location;adding-new-location-showing-modal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the smartfocus site page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on New menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on location menu item",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the New location modal",
  "keyword": "Then "
});
formatter.match({
  "location": "LocationStepDef.i_am_on_the_smartfocus_site_page()"
});
formatter.result({
  "duration": 16428818295,
  "status": "passed"
});
formatter.match({
  "location": "LocationStepDef.i_click_on_New_menu()"
});
formatter.result({
  "duration": 4474040228,
  "status": "passed"
});
formatter.match({
  "location": "LocationStepDef.i_click_on_location_menu_item()"
});
formatter.result({
  "duration": 563554840,
  "status": "passed"
});
formatter.match({
  "location": "LocationStepDef.i_should_see_the_New_location_modal()"
});
formatter.result({
  "duration": 162288187,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Adding new location information",
  "description": "",
  "id": "adding-new-location;adding-new-location-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am adding new location",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter Name as \u003cName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Major as\u003cMajor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Description as\u003cDescription\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter postcode as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select correct address from drop down list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "latitude and longitude should be populated as \u003clat\u003e and \u003clong\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter radius as \u003cradius\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter catchment area as \u003ccatchment area\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on create button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "New location should be created as \u003cName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "screen should be navigated to new location on \u003clat\u003e and \u003clong\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "adding-new-location;adding-new-location-information;",
  "rows": [
    {
      "cells": [
        "Name",
        "Major",
        "Description",
        "postcode",
        "radius",
        "catchment area",
        "lat",
        "long"
      ],
      "line": 27,
      "id": "adding-new-location;adding-new-location-information;;1"
    },
    {
      "cells": [
        "Automation Test-High road",
        "90",
        "Ilford High street",
        "IG1 1YT",
        "10",
        "20",
        "51.5623078",
        "0.07643529999995735"
      ],
      "line": 28,
      "id": "adding-new-location;adding-new-location-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Adding new location information",
  "description": "",
  "id": "adding-new-location;adding-new-location-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addnewlocation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am adding new location",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter Name as Automation Test-High road",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Major as90",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Description asIlford High street",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter postcode as IG1 1YT",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select correct address from drop down list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "latitude and longitude should be populated as 51.5623078 and 0.07643529999995735",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter radius as 10",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter catchment area as 20",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on create button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "New location should be created as Automation Test-High road",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "screen should be navigated to new location on 51.5623078 and 0.07643529999995735",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LocationStepDef.i_am_adding_new_location()"
});
formatter.result({
  "duration": 20109519788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Test-High road",
      "offset": 16
    }
  ],
  "location": "LocationStepDef.i_enter_Name_as_High_road(String)"
});
formatter.result({
  "duration": 2500648507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 16
    }
  ],
  "location": "LocationStepDef.i_enter_Major(String)"
});
formatter.result({
  "duration": 536787481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ilford High street",
      "offset": 22
    }
  ],
  "location": "LocationStepDef.i_enter_Description(String)"
});
formatter.result({
  "duration": 1702760596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IG1 1YT",
      "offset": 20
    }
  ],
  "location": "LocationStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 279398489,
  "status": "passed"
});
formatter.match({
  "location": "LocationStepDef.i_select_correct_address_from_drop_down_list()"
});
formatter.result({
  "duration": 873931609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51.5623078",
      "offset": 46
    },
    {
      "val": "0.07643529999995735",
      "offset": 61
    }
  ],
  "location": "LocationStepDef.latitude_and_longitude_should_be_populated(String,String)"
});
formatter.result({
  "duration": 157538878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "LocationStepDef.i_enter_radius_as(int)"
});
formatter.result({
  "duration": 595085623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 26
    }
  ],
  "location": "LocationStepDef.i_enter_catchment_area_as(int)"
});
formatter.result({
  "duration": 1052096586,
  "status": "passed"
});
formatter.match({
  "location": "LocationStepDef.i_click_on_create_button()"
});
formatter.result({
  "duration": 384881406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Test-High road",
      "offset": 34
    }
  ],
  "location": "LocationStepDef.new_location_should_be_created(String)"
});
formatter.result({
  "duration": 1953341644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51.5623078",
      "offset": 46
    },
    {
      "val": "0.07643529999995735",
      "offset": 61
    }
  ],
  "location": "LocationStepDef.screen_should_be_navigated_to_new_location(String,String)"
});
formatter.result({
  "duration": 1424713003,
  "status": "passed"
});
});