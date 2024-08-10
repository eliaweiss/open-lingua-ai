// npm run generatePhrase -- -lang=en-US -inputFile=tmp/phrases1.en-US.pt-BR.json -outputFile=tmp/phrasesFile.json

import fs from "fs";

// Function to parse the arguments
function parseArgs(args) {
  const parsedArgs = {};

  args.forEach((arg) => {
    const [key, value] = arg.split("=");
    const normalizedKey = key.replace(/^-+/, "");
    parsedArgs[normalizedKey] = value;
  });

  return parsedArgs;
}

// Function to extract phrases for a specific language
async function extractPhrases(lang, inputFile, outputFile) {
  // Read the input file
  const data = fs.readFileSync(inputFile, "utf8");
  const phrases = JSON.parse(data);
  //   const phrases = (await import("./phrases1.en-US.pt-BR.js")).default;

  // Filter the phrases that contain the specified language key
  const extractedPhrases = phrases
    .map((phrase) => phrase[lang])
    .filter(Boolean); // Filter out undefined or null values

  // Write the extracted phrases to the output file
  fs.writeFileSync(
    outputFile,
    JSON.stringify(extractedPhrases, null, 2),
    "utf8"
  );

  console.log(`Extracted phrases for language ${lang} saved to ${outputFile}`);
}

// Get the command-line arguments
const args = process.argv.slice(2);
const options = parseArgs(args);

// Extract phrases based on the provided language and file paths
extractPhrases(options.lang, options.inputFile, options.outputFile);
