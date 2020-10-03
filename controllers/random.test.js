const randomCountryGen = require('./random.js')


test('Random value range 0 to 57', async (done) => {
  const value = await randomCountryGen.randomCountryIndexGen();
  expect(value).toBeGreaterThanOrEqual(0);
  expect(value).toBeLessThan(58);
  done();
}) 