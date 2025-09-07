import { expect, test } from '@playwright/test';
test("Register page", async ({ page }) => {
    const testdata = {
        username: "yendang",
        email: "yenk17@gmail.com",
    }
    await test.step("Navigate to Homepage", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Click vao Bai hoc 1: Register page
    await test.step("Open Register page", async () => {
        await page.locator("//a[@href = '01-xpath-register-page.html']").click();
    })

    // Input Username
    await test.step("Input username", async () => {
        await page.locator("//input[@id = 'username']").fill(testdata.username);
    })
    // Input email
    await test.step("Input email", async () => {
        await page.locator("//input[@id = 'email']").fill(testdata.email);
    })

    //Select Gender
    await test.step("Select gender", async () => {
        await page.check("//input[@id = 'female']");
    })

    //Select Hobbies
    await test.step("Select hobbies", async () => {
        await page.check("//input[@id = 'reading']");
    })

    //Select Interest
    await test.step("Select interest", async () => {
        await page.selectOption("//select[@id = 'interests']", "technology");
    })

    //Select Country
    await test.step("Select country", async () => {
        await page.selectOption("//select[@id = 'country']", "usa");
    })

    //Select Date of birth
    await test.step("Select date of birth", async () => {
        await page.fill("//input[@id = 'dob']", '1985-10-16');
    })

    //Select Profile picture
    await test.step("Select profile picture", async () => {
        await page.setInputFiles("//input[@type= 'file']", "tests/lesson-5/test1.txt");
    })

    // Input Biography
    await test.step("Input Biography", async () => {
        await page.locator("//textarea[@id = 'bio']").fill("Happy Testing");
    })

    //Select Rating Us 
    await test.step("Select Rating Us", async () => {
        await page.fill("//input[@id = 'rating']", '10');
    })

    //Select Favourite Color
    await test.step("Select Favourite Color", async () => {
        await page.fill("//input[@id = 'favcolor']", '#f0e78a');
    })

    //Select Newsleter
    await test.step("Select Newsleter", async () => {
        await page.check("//input[@id= 'newsletter']");
    })

    //Select Enable Feature
    await test.step("Select Enable Feature", async () => {
        await page.check("//span[@class= 'slider round']");
    })

    //Select Star Rating => Thầy cô ơi chỗ này làm sao để chọn được giá trị của star vậy?
    await test.step("Select Star Rating", async () => {
        await page.click("//div[@id = 'starRating']");
    })

    //Click on Register button
    await test.step("Click on Register button", async () => {
        await page.locator("//button[@type ='submit']").click();

        const resultUsername = page.locator("//*[@id='userTable']/tbody/tr/td[2]");
        await expect(resultUsername).toContainText(`${testdata.username}`);
        const resultEmail = page.locator("//*[@id='userTable']/tbody/tr/td[3]");
        await expect(resultEmail).toContainText(`${testdata.email}`);
        /* const resultInfo = [
            { Gender: "female" },
            { Hobbies: "reading" },
            { Country: "usa" },
            { "Date of Birth": "1985-10-16" },
            { "Custom Date": "" },
            { Biography: "Happy Testing" },
            { Rating: "10" },
            { "Favorite Color": "#f0e78a" },
            { Newsletter: "Yes" },
            { "Enable Feature": "Yes" },
            { "Star Rating": "2.5" }
        ]; */

        // Thầy cô ơi, muốn verify thông tin ở cột Information thì làm như thế nào ạ?


    })
})

