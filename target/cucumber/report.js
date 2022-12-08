$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/SkyBlue.feature");
formatter.feature({
  "line": 2,
  "name": "Sky Blue Background Functionality",
  "description": "",
  "id": "sky-blue-background-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Bluebackground"
    }
  ]
});
formatter.before({
  "duration": 2896073000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "1 Sky Blue Background",
  "description": "",
  "id": "sky-blue-background-functionality;1-sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the button as \"Set SkyBlue Background\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "SkyBlueBackground.button_exists(String)"
});
formatter.result({
  "duration": 157451300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 26
    }
  ],
  "location": "SkyBlueBackground.i_click_on_the_button_as(String)"
});
formatter.result({
  "duration": 2078966900,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlueBackground.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 92671700,
  "status": "passed"
});
formatter.before({
  "duration": 1894305400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "2 White Background Change",
  "description": "",
  "id": "sky-blue-background-functionality;2-white-background-change",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the button as \"Set White Background\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "SkyBlueBackground.button_exists(String)"
});
formatter.result({
  "duration": 45809900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Background",
      "offset": 26
    }
  ],
  "location": "SkyBlueBackground.i_click_on_the_button_as(String)"
});
formatter.result({
  "duration": 2078991800,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlueBackground.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 38846700,
  "status": "passed"
});
});