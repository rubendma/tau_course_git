//command to execute by metadata "--test-meta"
//testcafe chrome tests/firstTest.js --test-meta type=regression,env=testing
import { Selector } from 'testcafe';

fixture.meta("Version", 1)
  .meta("Author", "Ruben")("First Fixture")
  .page("https://www.google.com/")
  .beforeEach(async t => {
    await t
      .setTestSpeed(0.1)
      .setPageLoadTimeout(0)
      .maximizeWindow();
  });

test
  .meta("type", "regression")
  .meta("env", "testing")
  .page("https://devexpress.github.io/testcafe/example/")
  ("First Test", async t => {
    const developerName = Selector('#developer-name');
    await t
      .expect(developerName.value).eql("", "field is empty")
      .typeText('#developer-name', 'TAU')
      .takeElementScreenshot('#developer-name')
      .expect(developerName.value).eql("TAU", "field has the TAU value")
      .debug()
      .click('#macos')
      .click('#submit-button')
      .takeScreenshot();
  });

test.meta("env", "testing")
  ("Type in google search textbox", async t => {
    await t
      .setTestSpeed(1)
      .typeText("input[name=q]", "Automation testing university");
  });

test.meta("env", "testing")
  ("Second Type in google search textbox", async t => {
    await t
      .setTestSpeed(1)
      .typeText("input[name=q]", "Automation testing university");
  });

test.meta("env", "testing")
  ("Other Type in google search textbox", async t => {
    await t
      .setTestSpeed(1)
      .typeText("input[name=q]", "Automation testing university");
  });