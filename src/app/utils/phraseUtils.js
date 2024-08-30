export const getUniquePhrases = (phrases) => {
  return phrases.filter(
    (phrase, index, self) =>
      index === self.findIndex((t) => t.target === phrase.target)
  );
};

export const setPhrasesTargetSrc = (
  newPhrases,
  languages,
  targetLanguage,
  sourceLanguage
) => {
  const [newSourceLanguage, newTargetLanguage] = languages ?? [
    targetLanguage,
    sourceLanguage,
  ];
  return newPhrases.map((phrase) => ({
    target: phrase[newTargetLanguage],
    src: phrase[newSourceLanguage],
  }));
};
