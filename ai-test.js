require('dotenv').config();
const { generateText } = require('ai');
const { google } = require('@ai-sdk/google');

async function main() {
  const prompt = "Write a short story about a robot learning to love.";
  const response = await generateText({
    model: google('gemini-3.5-flash'),
    prompt,
  });
  console.log(response.output);
}

main();