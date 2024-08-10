// npm run translate -- -srcLang=en-US -targetLang=he-IL -inputFile=tmp/outFile.json -outputFile=tmp/outFile.il.json

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

// Load environment variables from .env file
dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
});

// Access command-line arguments

// Function to parse the arguments
function parseArgs(args) {
  const parsedArgs = {};

  args.forEach((arg) => {
    // Split each argument into key and value based on the '=' separator
    const [key, value] = arg.split("=");

    // Remove the leading '-' from the key
    const normalizedKey = key.replace(/^-+/, "");

    // Assign the value to the corresponding key in the parsedArgs object
    parsedArgs[normalizedKey] = value;
  });

  return parsedArgs;
}

const args = process.argv.slice(2);
const options = parseArgs(args);
// Log the arguments to the console
console.log("Arguments:", options);

const srcLang = options.srcLang || "en-US";
const targetLang = options.targetLang || "he-IL";
const inputFile = options.inputFile || "inputPhrases/en.json";
const outputFile =
  options.outputFile || `outputPhrases/phrases.${srcLang}.${targetLang}.json`;

// Function to translate sentences
async function translateSentence(sentence) {
  const promptStr = `
translate the following sentence in to ${srcLang} and ${targetLang}:
${sentence}

and return the result json list format:
{${srcLang}: ...TranslatedSentence..., ${targetLang}: ...TranslatedSentence...}

don't return any text other than the json result  
  `;
  // console.log("+++++++");
  // console.log("promptStr", promptStr);
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
  // Parse the JSON result from the response
  const response = JSON.parse(resText);
  return response;
}

// Main function to process the JSON file
async function processTranslations(
  inputFilePath,
  outputFilePath,
  translations = []
) {
  try {
    // Read the input JSON file
    const data = fs.readFileSync(inputFilePath, "utf8");
    const sentences = JSON.parse(data);

    // Loop through each sentence and translate it
    var i = 0;
    for (const sentence of sentences) {
      i++;
      if (options.startAt && Number(options.startAt) > i) {
        continue;
      }
      const translation = await translateSentence(sentence);
      console.log(i);
      console.log("translation", translation);

      translations.push(translation);
      fs.writeFileSync(outputFilePath, JSON.stringify(translations, null, 2));
      // if (i > 20) break;
    }

    // Save the translations to the output JSON file
    // fs.writeFileSync(outputFilePath, JSON.stringify(translations, null, 2));
    console.log(`Translations saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error processing translations:", error);
  }
}

// Run the script with input and output file paths
const inputFilePath = path.resolve(inputFile); // Path to the input JSON file
const outputFilePath = path.resolve(outputFile); // Path to save the output JSON file
let translations = [];

try {
  const fileContent = fs.readFileSync(outputFilePath, "utf8"); // Read the file content as a string
  translations = JSON.parse(fileContent); // Parse the string into a JavaScript object
} catch (error) {
  console.error("Error reading or parsing the file:", error);
}

processTranslations(inputFilePath, outputFilePath, translations);
