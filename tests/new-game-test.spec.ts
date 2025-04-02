import { test, expect } from '@playwright/test';

test('new game button navigation', async ({ page }) => {
  await page.goto('http://localhost:5258/');
  
  // Click on New Game button
  await page.getByRole('button', { name: 'New Game' }).click();
  
  // Check expected URL
  await expect(page).toHaveURL('http://localhost:5258/game');
});

test('new game empty fields validation', async ({ page }) => {
  await page.goto('http://localhost:5258/');

  // Click on New Game button
  await page.getByRole('button', { name: 'New Game' }).click();

  // Click on Save button
  await page.getByRole('button', { name: 'Save' }).click();

  // Check required data field values
  await expect(page.getByText('The Name field is required.')).toBeVisible();
  await expect(page.getByText('The Genre field is required.')).toBeVisible();
  await expect(page.getByText('The field Price must be')).toBeVisible();
});