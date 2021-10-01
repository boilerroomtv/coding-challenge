const filterSets = require('./filterSetsByTitle.js')

test('test 1', () => {
  expect(filterSets([])).toEqual([]);
});
