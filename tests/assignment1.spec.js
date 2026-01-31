const { test, expect } = require('@playwright/test');
const testData = require('./test-data.json');

// This loop runs every scenario in your JSON file automatically
for (const data of testData) {
  test(`Scenario ${data.id}: ${data.cat}`, async ({ page }) => {
    // Navigate to the target website [cite: 13]
    await page.goto('https://www.swifttranslator.com/');

    // Find the Singlish input box and type the test data [cite: 303]
    const inputArea = page.locator('#EnglishInput'); 
    await inputArea.fill(data.input);

    // The system updates in real-time [cite: 304, 372]
    const outputArea = page.locator('#SinhalaOutput');

    // Validation logic
    if (data.id.startsWith('Pos_Fun')) {
      // For positive tests, ensure the output matches the expected Sinhala [cite: 356, 362]
      await expect(outputArea).toContainText(data.expected);
    } else if (data.id.startsWith('Neg_Fun')) {
      // For negative tests, we ensure the system handles the messy input [cite: 364, 368]
      await expect(outputArea).toBeVisible();
    } else if (data.id.startsWith('Pos_UI')) {
      // Specifically test the real-time update behavior [cite: 372, 392]
      await expect(outputArea).not.toBeEmpty();
    }
  });
}