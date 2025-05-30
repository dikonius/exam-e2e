import { test, expect } from '@playwright/test';

test.describe('Navigation test', () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
	})

    test('We test navigation between three tabs', async ({ page }) => {

        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
		const catalogueButton = page.getByRole('button', {name: 'Katalog'})
		const myBookButton = page.getByRole('button', {name: 'Mina böcker'})
		const visibleBertil = page.getByText('Bertil Flimmer')
		const visibleMyBooksEmpty = page.getByText('När du valt')
		const visibleTitle = page.getByText('Titel')

        // 1. Klick on "Lägg till bok" navigation button and label "Titel" must be visible

        await addBookButton.click({ timeout: 500 })
		await expect(visibleTitle).toBeVisible({ timeout: 500 })

        // 2. Klick on "Katalog" navigation button so text "Bertil Flimmer" will be visible.

        await catalogueButton.click({ timeout: 500 })
		await expect(visibleBertil).toBeVisible({ timeout: 500 })

        // 3. Klick on "Mina böcker" navigation button so text "När du valt" will be visible.

        await myBookButton.click({ timeout: 500 })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: 500 })

        // 4. Klick on "Katalog" navigation button so text "Bertil Flimmer" will be visible.

        await catalogueButton.click({ timeout: 500 })
		await expect(visibleBertil).toBeVisible({ timeout: 500 })

         // 5. Klick on "Mina böcker" navigation button so text "När du valt" will be visible.

        await myBookButton.click({ timeout: 500 })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: 500 })

        // 6. Klick on "Lägg till bok" navigation button and label "Titel" must be visible

        await addBookButton.click({ timeout: 500 })
		await expect(visibleTitle).toBeVisible({ timeout: 500 })

        // 7. Klick on "Mina böcker" navigation button so text "När du valt" will be visible.

        await myBookButton.click({ timeout: 500 })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: 500 })

    })
})