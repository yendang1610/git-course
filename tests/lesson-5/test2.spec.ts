import { expect, test } from '@playwright/test';
test("Add product to cart", async ({ page }) => {
    await test.step("Navigate to Homepage", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Click vao Bai hoc 2: Product page
    await test.step("Open Product page", async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    })
    // Add product 1: Have 2 products in the cart
    await test.step("Add product 1: Have 2 products in the cart", async () => {
        for (let i = 0; i < 2; i++) {
            await page.locator("//button[@data-product-id = '1']").click();
        }
        const product1 = page.locator("//tbody[@id = 'cart-items']/tr/td[3]");
        await expect(product1).toContainText('2');
    })

    // Add product 2: Have 3 products in the cart
    await test.step("Add product 2: Have 3 products in the cart", async () => {
        for (let i = 0; i < 3; i++) {
            await page.locator("//button[@data-product-id = '2']").click();
        }
        const product2 = page.locator("//tbody[@id = 'cart-items']/tr[2]/td[3]");
        await expect(product2).toContainText('3');
    })

    // Add product 3: Have 1 product in the cart
    await test.step("Add product 3: Have 1 product in the cart", async () => {
        await page.locator("//button[@data-product-id = '3']").click();
        const product3 = page.locator("//tbody[@id = 'cart-items']/tr[3]/td[3]");
        await expect(product3).toContainText('1');
    })
})
