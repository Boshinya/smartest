package com.smartfocus; /**
 * Created by bothees on 09/06/2015.
 */
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)

@CucumberOptions(format = {"pretty","html:target/cucumber.html"},
        features =  {"src/test/resources/features/"},
        tags = "@addnewlocation"
        )

public class TestRunner {


    public static void main (String [] args)throws Throwable{

        new TestRunner();


    }


}
