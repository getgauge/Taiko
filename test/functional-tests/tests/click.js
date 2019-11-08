'use strict';
var _selectors = require('./selectors');

const {
  link,
  click,
  below,
  image,
  above,
  toRightOf,
  toLeftOf,
  button,
  rightClick,
  doubleClick,
  near,
} = require('taiko');

step('Click link <userlink> below <table>', async function(
  userlink,
  table,
) {
  await click(link(userlink, below(_selectors.getElement(table))));
});

step('Click an element that contains <text>', async function(text) {
  await click(text);
});

step('Click link <userlink>', async function(userlink) {
  await click(link(userlink));
});

step('Click <selector>', async function(selector) {
  await click(selector);
});

step('Click image above <table>', async function(table) {
  var element = _selectors.getElement(table);
  await click(image(above(element)));
});

step('Click link above <table>', async function(table) {
  var element = _selectors.getElement(table);
  await click(link(above(element)));
});

step('Click link to right of <table>', async function(table) {
  await click(link(toRightOf(_selectors.getElement(table))));
});

step('Click link to left of <table>', async function(table) {
  await click(link(toLeftOf(_selectors.getElement(table))));
});

step('Click link near <table>', async function(table) {
  await click(link(near(_selectors.getElement(table))));
});

step('Click button <selector>', async function(selector) {
  await click(button(selector));
});

step('Right click <table>', async function(table) {
  await rightClick(_selectors.getElement(table));
});

step('Double click <table>', async function(table) {
  await doubleClick(_selectors.getElement(table));
});
