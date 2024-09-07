export const normalizeText = (text) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function compareText(text1, text2, normalize = true) {
  // Normalize the words to remove accents and diacritics
  let textFn = (text) => text;
  if (normalize) {
    textFn = normalizeText;
  }

  // Normalize both words
  const normalizedText1 = textFn(text1).toLowerCase().trim();
  const normalizedText2 = textFn(text2).toLowerCase().trim();

  // Compare the normalized words
  return normalizedText1 === normalizedText2;
}
