const query = require('./query')

test('Client IP shouldn\'t be null', () => {
  expect(query.getClientIP()).not.toBeNull()
}) 

test('Country name shouldn\'t be null', () => {
  expect(query.getCountryName()).not.toBeNull()
}) 

test('Country Index should be in range of 0 to 57', async (done) => {
  const value = await query.getIndexOfCountry();
  expect(value).toBeGreaterThanOrEqual(0);
  expect(value).toBeLessThan(58);
  done();
}) 
