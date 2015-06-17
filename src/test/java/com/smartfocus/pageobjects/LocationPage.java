package com.smartfocus.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.concurrent.TimeUnit;
import java.util.Set;
import org.openqa.selenium.support.ui.*;
import org.openqa.selenium.interactions.*;

import java.lang.*;

/**
 * Created by bothees on 09/06/2015.
 */



public class LocationPage {

    WebDriver browser = new FirefoxDriver();


    public void opensmartfocus() {
        browser.get("http://test.per.smartfocus.com/#/sites");
    }


    public void clicknewmenu() {

        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement newmenu = browser.findElement(By.cssSelector("button.dropdown-toggle.btn"));

        newmenu.click();


    }

    public void clicklocation() {

        WebElement loc = browser.findElement(By.cssSelector(".directory-action.type-site>span"));

        loc.click();

    }

    public boolean modalcontrol() {
        WebElement headername = browser.findElement(By.className("modal-header"));
        String modalname = headername.getText();
        if (modalname.equalsIgnoreCase("New Location")) {
            return true;
        } else {
            return false;
        }
    }


    public void addnewlocation() {
        opensmartfocus();
        clicknewmenu();
        clicklocation();
    }

    public void addname(String locname) {
        //this.locname = locname;

        WebElement name = browser.findElement(By.name("name"));
        name.sendKeys(locname);
    }

    public void addmajor(String major) {

        WebElement majorvalue = browser.findElement(By.name("major"));
        majorvalue.sendKeys(major);
    }


    public void adddesc(String desc) {
        WebElement description = browser.findElement(By.name("description"));
        description.sendKeys(desc);
    }

    public void addpostcode(String pc) {

        WebElement postcode = browser.findElement(By.name("addressLookup"));
        postcode.sendKeys(pc);

    }

    public void autopopulatepc() {
        WebElement autopop = browser.findElement(By.cssSelector("ul.typeahead-results > li > a\n"));
        autopop.click();
    }


    public boolean verifylatlong(String lat, String longi) {
        String populatedlattitude = browser.findElement(By.name("latitude")).getAttribute("value");
        String populatedlongitude = browser.findElement(By.name("longitude")).getAttribute("value");

        if (populatedlattitude.equalsIgnoreCase(lat) && populatedlongitude.equalsIgnoreCase(longi)) {

            return true;
        } else {
            return false;
        }
    }


    public void addradius(int rad) {
        WebElement radius = browser.findElement(By.name("radius"));
        radius.sendKeys(String.valueOf(rad));
    }

    public void addcatcharea(int ca) {
        WebElement catcharea = browser.findElement(By.name("catchmentArea"));
        catcharea.sendKeys(String.valueOf(ca));
        browser.findElement(By.name("externalSiteId")).sendKeys("111");
    }

    public void clickcreatebutton() {

        WebElement create = browser.findElement(By.xpath(".//*[@id='site-wrapper']/div/div[3]/div/div[2]/div/div/div[2]/div/footer/div/button[1]"));

        Actions action = new Actions(browser);
        action.click(create);
        action.perform();
       // Actions build = new Actions(browser);
       // System.out.println(build);
        //build.moveToElement(create,71,34).click();
    }

    public boolean confirmnewlocation() {

        return browser.getCurrentUrl().contains("#/sites/site/");

    }
    public boolean confirmnewlocationname(String createdname) {
        WebElement locname = browser.findElement(By.className(" directory-header-title"));
        return locname.getText().contains(createdname);

    }

    public boolean navlatlong(String lat, String longi) {
        String newlattitude = browser.findElement(By.name("latitude")).getAttribute("value");
        String newlongitude = browser.findElement(By.name("longitude")).getAttribute("value");

        if (newlattitude.equalsIgnoreCase(lat) && newlongitude.equalsIgnoreCase(longi)) {

            return true;
        } else {
            return false;
        }
    }

        public void login() {
            WebElement loginlink = browser.findElement(By.xpath("//span[2]"));
            loginlink.click();
            browser.switchTo().window("gm-master");
            browser.findElement(By.id("Email")).sendKeys("smartautotester@gmail.com");
            browser.findElement(By.id("next")).click();
            browser.findElement(By.id("Passwd")).sendKeys("sdet2015");
            browser.findElement(By.id("signIn")).submit();

       }
}