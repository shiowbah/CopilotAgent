import { expect, test } from '@playwright/test'

test.describe('main page', () => {
  test('shows the app and switches themes', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'CopilotAgent' })).toBeVisible()
    await expect(page.getByText('Minimal main page')).toBeVisible()

    const app = page.locator('main')
    await expect(app).toHaveClass(/app--light/)

    const themeButton = page.getByRole('button', {
      name: 'Switch to dark theme',
    })
    await themeButton.click()

    await expect(app).toHaveClass(/app--dark/)
    await expect(
      page.getByRole('button', { name: 'Switch to light theme' }),
    ).toBeVisible()
  })
})
