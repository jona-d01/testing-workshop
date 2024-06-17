// @ts-check
const { test, expect } = require('@playwright/test');

test('page should have title', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  await expect(page).toHaveTitle('Startseite - TH Köln');
});

test('page should have english title when english is the selected language', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  await page.locator('.langswitch').getByText('English').click()

  await expect(page).toHaveTitle('Home - TH Köln');
});

test('page should have image with title', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  const image = await page.getByTitle('Farbenfroh beleuchtetes Ingenieurwissenschaftliches Zentrum am Campus Deutz (Bild: Thilo Schmülgen/TH Köln)');

  await expect(image).toBeVisible();
});

test('page should have link with color', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  await expect(page.locator('.menu_container').locator('.active')).toHaveCSS('color','rgb(198, 12, 15)');
});


// Zusatzaufgaben

test('page should take screenshot of image', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  const image = await page.getByTitle('Farbenfroh beleuchtetes Ingenieurwissenschaftliches Zentrum am Campus Deutz (Bild: Thilo Schmülgen/TH Köln)');

  await image.screenshot({ path: 'screenshot.png' });

  await expect(image).toBeVisible();
});

test('page should show mail', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  await page.locator('#searchInput').fill('Alexander');

  await page.keyboard.down('Enter');

  await expect(page.locator('.result')).toContainText('alexander.dobrynin@th-koeln.de');
});
