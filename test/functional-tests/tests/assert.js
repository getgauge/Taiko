const assert = require('assert');
var _selectors = require('./selectors');

const {
  title,
  text,
  textBox,
  toLeftOf,
} = require('../../../lib/taiko');

step('Assert title to be <userTitle>', async function(userTitle) {
  assert.ok((await title()).includes(userTitle));
});

step('Assert Exists <table>', async function(table) {
  assert.ok(await _selectors.getElement(table).exists());
});

step('assert text should be empty into <table>', async function(
  table,
) {
  assert.equal((await _selectors.getElement(table).text())[0], '');
});

step('Assert text is not empty <table>', async function(table) {
  assert.ok((await _selectors.getElement(table).text()) != '');
});

step('Assert text <content> exists on the page.', async function(
  content,
) {
  assert.ok(await text(content).exists());
});

step('Assert text <content> does not exist', async function(content) {
  assert.ok(!(await text(content).exists()));
});

step(
  'Assert text <arg0> exists on the textArea. <arg1>',
  async function(arg0, arg1) {
    var valueis = await textBox(
      toLeftOf(_selectors.getElement(arg1)),
    ).value();
    console.log('Length of the string is::: ' + valueis.length);
    assert.equal(valueis, 0);
  },
);
