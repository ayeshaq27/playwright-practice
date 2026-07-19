require('dotenv').config();
const { generateObject } = require('ai');
const { google } = require('@ai-sdk/google');
const { z } = require('zod');
const { chromium } = require('playwright');


const schema = z.object({
  name: z.string(),
  email: z.string(),
  address: z.string()
});

async function main() {
  const prompt = "Generate a fake user profile with name, email, and address.";
  const response = await generateObject({
    model: google('gemini-3.5-flash'),
    prompt,
    schema
  });
  const { name, email, address } = response.object;
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://demoqa.com/text-box');
  await page.fill('#userName', name);
  await page.fill('#userEmail', email);
  await page.fill('#currentAddress', address);
  await page.fill('#permanentAddress', address);
  await page.waitForTimeout(1000);
  await page.click('#submit');
  await page.waitForTimeout(5000);
  await browser.close();

}

main();