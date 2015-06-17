package com.smartfocus.stepdefs;
import com.smartfocus.pageobjects.*;
/**
 * Created by bothees on 09/06/2015.
 */

import com.smartfocus.pageobjects.LocationPage;
import cucumber.api.java.en.*;
import cucumber.api.PendingException;
import static org.junit.Assert.*;

public class LocationStepDef {
   LocationPage location = new LocationPage();

    @Given("^I am on the smartfocus site page$")
    public void i_am_on_the_smartfocus_site_page() throws Throwable {
        location.opensmartfocus();

    }

    @When("^I click on New menu$")
    public void i_click_on_New_menu() throws Throwable {
       location.clicknewmenu();

    }

    @When("^I click on location menu item$")
    public void i_click_on_location_menu_item() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        location.clicklocation();
    }

    @Then("^I should see the New location modal$")
    public void i_should_see_the_New_location_modal() throws Throwable {
        //location.newmodal();
        assertFalse("Modal window not opened",location.modalcontrol());
    }

    @Given("^I am adding new location$")
    public void i_am_adding_new_location() throws Throwable {
        location.addnewlocation();

    }

    @When("^I enter Name as (.*)$")
    public void i_enter_Name_as_High_road(String locname) throws Throwable {
        location.addname(locname);
    }

    @When("^I enter Major as(.*)$")
    public void i_enter_Major(String major) throws Throwable {
        location.addmajor(major);
    }

    @When("^I enter Description as(.*)$")
    public void i_enter_Description(String desc) throws Throwable {
        location.adddesc(desc);
    }

    @When("^I enter postcode as (.*)$")
    public void i_enter_postcode(String pc) throws Throwable {
        location.addpostcode(pc);
    }

    @When("^I select correct address from drop down list$")
    public void i_select_correct_address_from_drop_down_list() throws Throwable {
        location.autopopulatepc();
    }

    @When("^latitude and longitude should be populated as (.*) and (.*)$")
    public void latitude_and_longitude_should_be_populated(String lat, String longi) throws Throwable {
        assertFalse("invalid lattitude and longitude",location.verifylatlong(lat,longi));
    }

    @When("^I enter radius as (.*)$")
    public void i_enter_radius_as(int rad) throws Throwable {
        location.addradius(rad);
    }

    @When("^I enter catchment area as (.*)$")
    public void i_enter_catchment_area_as(int ca) throws Throwable {
        location.addcatcharea(ca);
    }

    @When("^I click on create button$")
    public void i_click_on_create_button() throws Throwable {
        location.clickcreatebutton();
    }

    @Then("^New location should be created as (.*)$")
    public void new_location_should_be_created(String createdname) throws Throwable {
        assertFalse("New location not created",location.confirmnewlocation());
        assertFalse("New location not created",location.confirmnewlocationname(createdname));
    }

    @Then("^screen should be navigated to new location on (.*) and (.*)$")
    public void screen_should_be_navigated_to_new_location(String latt, String longitude) throws Throwable {
        assertFalse("invalid lattitude and longitude",location.navlatlong(latt,longitude));

    }




}
