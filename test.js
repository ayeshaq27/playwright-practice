const { chromium } = require('playwright');

async function main() {
  // Launch a browser - headless: false means you'll SEE it happen
  const browser = await chromium.launch({ headless: true });

  // Open a new page (tab)
  const page = await browser.newPage();

  // Navigate somewhere
  await page.goto('https://gohoopo.com');

  // Wait a couple seconds so you can actually see the page before it closes
  await page.waitForTimeout(2000);

  // Grab the page title just to prove we can read the page
  const title = await page.title();
  console.log('Page title was:', title);

  // Close the browser
  await browser.close();
}

main();