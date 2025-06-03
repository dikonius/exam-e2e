import { test, expect } from '@playwright/test';

test.describe('Testing favourite book feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    });

  test('Clicking heart button for "Kaffekokaren" adds marked book to favourites', async ({ page }) => {
  
    const heartButton = page.getByTestId('star-Kaffekokaren som visste för mycket');
    const myBooksButton = page.getByRole('button', { name: 'Mina böcker' });
    const visibleMyFavs = page.getByText('Kaffekokaren som visste för mycket');

    // 1. Click on "Heart" button at "Kaffekokaren" book so heart icon will remain visible.
    await heartButton.click({ timeout: 500 });

    // 2. Click on "Mina böcker" navigation button so text "Kaffekokaren" will be visible.
    await myBooksButton.click({ timeout: 500 });
    await expect(visibleMyFavs).toBeVisible({ timeout: 500 });
  });
});