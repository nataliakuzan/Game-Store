import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5258/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Game Catalog/);
});

