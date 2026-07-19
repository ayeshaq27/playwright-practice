require('dotenv').config();
const { generateObject } = require('ai');
const { google } = require('@ai-sdk/google');
const { z } = require('zod');

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
  console.log(response.object);
}

main();