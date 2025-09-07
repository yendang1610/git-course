import { expect, test } from '@playwright/test';
test("Add 100 todo items", async ({ page }) => {
    await test.step("Navigate to Homepage", async () => {
        await page.goto("https://material.playwrightvn.com/");

    })

    // Click vao Bai hoc 3: To do page
    await test.step("Open Bai hoc 3: To do page", async () => {
        await page.locator("//a[@href = '03-xpath-todo-list.html']").click();
    })

    // Input Todo item 100 times
    await test.step("Todo item 100 times", async () => {
        for (let i = 0; i < 100; i++) {
            await page.locator("//input[@id = 'new-task']").fill(`todo ${i}`,);
            await page.locator("//button[@id='add-task']").click();
        }
        await expect(page.locator("//ul[@id='task-list']/li")).toHaveCount(100);
    })

    // Delete Todo item with odd number
    page.on('dialog', async dialog => dialog.accept());
    await test.step("Delete Todo item with odd number", async () => {
        for (let i = 0; i < 100; i++) {
            if (i % 2 != 0) {
                await page.locator(`//button[@id='todo-${i}-delete']`).click();
            }
        }
        await expect(page.locator("//ul[@id='task-list']/li")).toHaveCount(50);
    })
})

