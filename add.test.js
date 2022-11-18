const add = require('./add');

test('outputs the correct Addition', () => {
  expect(add(3,2)).toBe(5);
});

test('outputs the correct Addition', () => {
  expect(add(5,5)).toBe(10);
});
