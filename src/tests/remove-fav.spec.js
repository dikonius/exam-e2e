import { test, expect } from '@playwright/test';

test.describe('Testing remove book from favourites', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    });
    
    test('Clicking heart button for "Kaffekokaren" when it is already marked as favourite removes it from favourites', async ({ page }) => {
        const heartButton = page.getByTestId('star-Kaffekokaren som visste för mycket');
        const myBooksButton = page.getByRole('button', { name: 'Mina böcker' });
        const katalogButton = page.getByRole('button', { name: 'Katalog' });
        const favouriteBookText = page.getByText('Kaffekokaren som visste för mycket');
        const visibleMyBooksEmpty = page.getByText('När du valt')
        
        // 1. Mark the book as favourite
        await heartButton.click({ timeout: 500 });
        
        // 2. Check it appears in "Mina böcker"
        await myBooksButton.click({ timeout: 500 });
        await expect(favouriteBookText).toBeVisible({ timeout: 500 });
        
        // 3. Go back to "Katalog" and ensure the heart is active
        await katalogButton.click({ timeout: 500 });
        await expect(heartButton).toHaveClass(/selected/, { timeout: 500 });
        
        // 4. Click heart again to un-favourite
        await heartButton.click({ timeout: 500 });
        
        // 5. Click on "Mina böcker" navigation button so text "När du valt" will be visible.
        await myBooksButton.click({ timeout: 500 })
        await expect(visibleMyBooksEmpty).toBeVisible({ timeout: 500 })
    });
});
