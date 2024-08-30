export function getLanguagesFromFileName(filename) {
  const regex = /\b[a-z]{2}-[A-Z]{2}\b/g;
  return filename.match(regex);
}

export function getLanguageName(type, sourceLanguage, targetLanguage) {
  if (type === "target") return targetLanguage;
  if (type === "src") return sourceLanguage;
}

// ... other language-related functions