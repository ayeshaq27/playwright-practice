const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://demoqa.com/text-box');
  await page.fill('#userName', 'Ayesha Qureshi');
  await page.fill('#userEmail', 'ayesha@example.com');
  await page.fill('#currentAddress', '123 Main St, Anytown, USA');
  await page.fill('#permanentAddress', '456 Elm St, Othertown, USA');
  await page.waitForTimeout(1000);
  await page.click('#submit');
  await page.waitForTimeout(5000);
  await browser.close();
}

main();