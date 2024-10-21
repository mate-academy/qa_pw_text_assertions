import { test, expect } from '@playwright/test';

test('Assert error message for empty password', async ({ page }) => {
 await page.goto('https://conduit.mate.academy/user/login');

 await page.getByPlaceholder('Email').fill('test@gmail.com');
 await page.getByRole('button', { name: 'Sign in' }).click();

 await expect(page.getByRole('list').nth(1)).toContainText(`password:can\'t be blank`);
});

test('Assert error message for empty email', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/login');
 
  await page.getByPlaceholder('Password').fill('newpass123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
 
  await expect(page.getByRole('list').nth(1)).toContainText(`email:can't be blank`);
});

test('Assert error message for wrong password', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/login');

  await page.getByPlaceholder('Email').fill('test@gmail.com');
  await page.getByPlaceholder('Password').fill('1');
  await page.getByRole('button', { name: 'Sign in' }).click();
 
  await expect(page.getByRole('list').nth(1)).toContainText(`email or password:is invalid`);
});