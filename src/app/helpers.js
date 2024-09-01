////////////////////////////////////////////////////////////////

export function randomPermutation(data) {
  const perm = data.slice();
  for (let i = perm.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  return perm;
}

// helper functions
export function removeDuplicates(wordsTxt) {
  // Use a Set to automatically handle duplicates
  let uniqueWords = new Set(wordsTxt);

  // Convert the Set back to an array
  return Array.from(uniqueWords);
}

export function removeDotAtEnd(sentence) {
  if (sentence.endsWith(".")) {
    return sentence.slice(0, -1); // Remove the last character
  }
  return sentence;
}

////////////////////////////////////////////////////////////////
export function splitToWords(currentSentence) {
  const currentSentenceTmp = removeDotAtEnd(currentSentence)
    .replaceAll(", ", " ")
    .replaceAll(". ", " ")
    .replaceAll("?", "")
    .replaceAll(/punctuation/g, "");
  let words = currentSentenceTmp.toLocaleLowerCase().split(" "); // Split into words
  return words;
}


