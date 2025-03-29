import { test, expect } from '@playwright/test';

test('button navigation', async ({ page }) => {
  await page.goto('http://localhost:5258/');
  
  // Click on New Game button
  await page.getByRole('button', { name: 'New Game' }).click();
  
  // Check expected URL
  await expect(page).toHaveURL('http://localhost:5258/game');
});