package steps;

import org.junit.After;
import org.junit.Assert;
//import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

//import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import junit.framework.Assert;
import pages.SkyBlueBackgroundPage;
import pages.TestBase;

public class SkyBlueBackground extends TestBase{

	SkyBlueBackgroundPage skyBlue;
	WebDriver driver;
	@Before
	public void setUp()
	{
		driver = initDriver();
		skyBlue = PageFactory.initElements(driver, SkyBlueBackgroundPage.class); 
		driver.get("https://techfios.com/test/101/");
		
	} 
	
	
	@Given("^\"([^\"]*)\" button exists$")
	public void button_exists(String Button)throws Throwable {
		
		if (Button == "Set SkyBlue Background") {
			String actualButton = skyBlue.skyBlueButton();
			String expectedButton = "Set SkyBlue Background";
			Assert.assertEquals("Button is not exists ", expectedButton, actualButton);
		} else {
			String actualButton = skyBlue.whiteButton();
			String expectedButton = "Set White Background";
			Assert.assertEquals("Button is not exists ", expectedButton, actualButton);
		}
		
//		skyBlue.skyBlueButton();
//		skyBlue.whiteButton();
	}

	@When("^I click on the button as \"([^\"]*)\"$")
	public void i_click_on_the_button_as(String button) throws Throwable {
	    
		switch(button)
		{
		case "Set SkyBlue Background" : skyBlue.clickSkyBlueButton();
		Thread.sleep(2000);
		break;
		
		case "Set White Background"  : skyBlue.clickWhiteButton();
		Thread.sleep(2000);
		break;
		
		default:
			break;
		}
		
		
	}
	
	@Then("^The background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue()
	{
			String expectedColor = "rgba(135, 206, 235, 1)";
			String actualColor = skyBlue.colorSkyValidation();
			
			Assert.assertEquals("Page color is not matching", expectedColor, actualColor);
			

	}
	
	@Then("^The background color will change to white$")
	public void the_background_color_will_change_to_white() 
	{
			String expectedColor = "rgba(255, 255, 255, 1)";
			//String actualColor=body.getAttribute("style");
			String actualColor = skyBlue.colorWhiteValidation();
			
			

			Assert.assertEquals("Page color is not matching", expectedColor, actualColor);
	}
	
	
	@After
	public void teardown()
	{
		driver.close();
		driver.quit();
	}

	
	
}
