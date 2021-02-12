fixture("differentes commands")
  .meta("description", "script to review differents commands")
  .page("https://devexpress.github.io/testcafe/example/");

// test to review navigateTo. After the test with navigateTo, the other test continue with the page of fixture or your page
test
  .meta("command", "navigateTo")
  ("navigateTo command", async t => {
    await t
      .navigateTo("https://www.google.com")
      .typeText("input[name=q]", "Automation testing university");
  });

test
  .meta("command", "navigateTo")
  .meta("env", "testing")
  ("Test on demo", async t => {
    await t
      .typeText('#developer-name', 'TAU')
      .click('#macos')
      .click('#submit-button');
  });

