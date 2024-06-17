// @ts-check
const { test, expect } = require('@playwright/test');

test('page should have title', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  await expect(page).toHaveTitle('Startseite - TH Köln');
});

test('page should have english title when english is the selected language', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  /* TODO: Teste, ob der Titel der Seite sich zu 'Home – TH Köln' ändert, nachdem man die Sprache auf der Seite auf 'English' umstellt */
});

test('page should have image with title', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  /* TODO: Teste, ob das Bild mit dem Titel 'Farbenfroh beleuchtetes Ingenieurwissenschaftliches Zentrum am Campus Deutz (Bild: Thilo Schmülgen/TH Köln)' auf der Startseite sichtbar ist*/
});

test('page should have link with color', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  /* TODO: Teste, ob der Navigationslink unter dem Selektor '.menu_container' -> '.active' die Farbe rgb(198, 12, 15) besitzt */
});


// Zusatzaufgaben

test('page should take screenshot of image', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  /* TODO: Mache einen Screenshot von dem vorher gesuchten Bild */
});

test('page should show mail', async ({ page }) => {
  await page.goto('https://www.th-koeln.de/');

  /* TODO: Teste, ob bei einer Suche nach dem Wort 'Alexander' die Mailadresse 'alexander.dobrynin@th-koeln.de' zu finden ist */
});