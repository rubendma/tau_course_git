import { Selector } from 'testcafe';

const triedCheckbox = Selector('label').withText("I have tried TestCafe");
const slider = Selector('#slider');

fixture('Drag and Hover Test')
  .page('https://devexpress.github.io/testcafe/example/');

test('Drag Testcase', async t => {
  await t
    .setTestSpeed(0.01)
    .click(triedCheckbox)
    .drag(slider, 360, 0, { offsetX: 10, offsetY: 10 });
});

test('Hover test', async t => {
  await t
    .setTestSpeed(0.1)
    .hover('input#populate');
});