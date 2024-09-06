export const normalizeWord = (word) =>
  word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function compareWords(word1, word2, normalize = true) {
  // Normalize the words to remove accents and diacritics
  let wordFn = (word) => word;
  if (normalize) {
    wordFn = normalizeWord;
  }

  // Normalize both words
  const normalizedWord1 = wordFn(word1).toLowerCase().trim();
  const normalizedWord2 = wordFn(word2).toLowerCase().trim();

  // Compare the normalized words
  return normalizedWord1 === normalizedWord2;
}
