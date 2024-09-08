export function extractJsonFromResponse(response) {
  const jsonString = response
    .replace(/\`\`\`json/, "")
    .replace(/\`\`\`/, "")
    .trim();
  const exerciseData = JSON.parse(jsonString);
  return exerciseData;
}