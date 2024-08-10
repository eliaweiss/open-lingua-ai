import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

// Load environment variables from .env file
dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
});

const srcLang = "en-US";
const targetLang = "il-HE";

// Function to translate sentences
async function translateSentence(sentence) {
  const promptStr = `translate the following sentence into ${targetLang}:\n${sentence}\n\nand return the result in json list format:\n{${targetLang}: "${sentence}", ${srcLang}: "...TranslatedSentence..."}\n\ndon't return any text other than the json result`;
  console.log("+++++++");
  console.log("promptStr", promptStr);
  console.log("-------");

  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1000,
    temperature: 0,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: promptStr,
          },
        ],
      },
    ],
  });
  const resText = msg.content[0].text;
  console.log("msg", resText);
  // Parse the JSON result from the response
  const response = JSON.parse(resText);
  return response;
}

// Main function to process the JSON file
async function processTranslations(inputFilePath, outputFilePath) {
  try {
    // Read the input JSON file
    const data = fs.readFileSync(inputFilePath, "utf8");
    const sentences = JSON.parse(data);

    // Initialize an array to hold the translations
    const translations = [];

    // Loop through each sentence and translate it
    for (const sentence of sentences) {
      const translation = await translateSentence(sentence);
      translations.push(translation);
    }

    // Save the translations to the output JSON file
    fs.writeFileSync(outputFilePath, JSON.stringify(translations, null, 2));
    console.log(`Translations saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error processing translations:", error);
  }
}

// Run the script with input and output file paths
const inputFilePath = path.resolve("inputPhrases/en.json"); // Path to the input JSON file
const outputFilePath = path.resolve(
  `outputPhrases/phrases.${srcLang}.${targetLang}.json`
); // Path to save the output JSON file

processTranslations(inputFilePath, outputFilePath);
