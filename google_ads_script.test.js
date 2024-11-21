const { processRows } = require('./test_google_ads_script');
const { mockRows, mockSheet } = require('./Mock_Data');

test('processRows adjusts bids and appends data correctly', () => {
  // Reset mock data
  mockRows.currentIndex = 0;
  mockSheet.clear();

  // Run the script
  const dataExists = processRows(mockRows, mockSheet);

  // Assertions
  expect(dataExists).toBe(true);
  expect(mockSheet.rows.length).toBe(3);

  // Validate row data
  expect(mockSheet.rows[0][4]).toBe("1.25"); // Campaign 1: No clicks, bid increases by 0.25
  expect(mockSheet.rows[1][4]).toBe("0.94"); // Campaign 2: Good performance, bid increases by 15%
  expect(mockSheet.rows[2][4]).toBe("1.73"); // Campaign 3: Excellent performance, bid increases by 15%
});
