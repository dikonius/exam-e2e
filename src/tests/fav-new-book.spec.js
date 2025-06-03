import { test, expect } from '@playwright/test';

test.describe('Testing favourite book feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    });
    
    test('Clicking heart button for "testTitle" adds marked new book to favourites', async ({ page }) => {
        
        // 1. Click on "Lägg till bok" navigation button and label "Titel" must be visible
        // 2. Fill form: "testTitle" in Titel field and "testAuthor" in författare field
        // 3. Click on "Lägg till ny bok" knappen under Författare field. 
        // 4. Click on "Katalog" navigation button so text "testAuthor" will be visible.
        // 5. Click on "Heart" button at "testTitle" book so heart icon will remain visible.
        // 6. Click on "Mina böcker" navigation button so text "testTitle" will be visible.
        
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
        const catalogueButton = page.getByRole('button', {name: 'Katalog'})
        const visibleTestAuthor = page.getByText('testAuthor')
        const visibleTitle = page.getByText('Titel')
        const titleInput = page.getByTestId('add-input-title')
        const authorInput = page.getByTestId('add-input-author')
        const addNewBookBtn = page.getByRole('button', {name: 'Lägg till ny bok'})
        const heartButton = page.getByTestId('star-testTitle');
        const myBooksButton = page.getByRole('button', { name: 'Mina böcker' });
        const visibleMyFavs = page.getByText('TestTitle');
        
        // 1. Click on "Lägg till bok" navigation button and label "Titel" must be visible
        await addBookButton.click({ timeout: 500 })
        await expect(visibleTitle).toBeVisible({ timeout: 500 })
        
        // 2. Fill form: "testTitle" in Titel field and "testAuthor" in författare field
        await titleInput.fill('testTitle', { timeout: 500 });
        await authorInput.fill('testAuthor', { timeout: 500 });
        
        // 3. Click on "Lägg till ny bok" knappen under Författare field. 
        await addNewBookBtn.click({ timeout: 500 })
        
        // 4. Click on "Katalog" navigation button so text "testAuthor" will be visible.
        await catalogueButton.click({ timeout: 500 })
        await expect(visibleTestAuthor).toBeVisible({ timeout: 500 })
        
        // 1. Click on "Heart" button at "testTitel" book so heart icon will remain visible.
        await heartButton.click({ timeout: 500 });
        
        // 2. Click on "Mina böcker" navigation button so text "testTitel" will be visible.
        await myBooksButton.click({ timeout: 500 });
        await expect(visibleMyFavs).toBeVisible({ timeout: 500 });
        
    });
    
});