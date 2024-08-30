import useAppStore from "../store/appStore";

export const getUniquePhrases = (phrases) => {
  const { maxNumberOfWordsInPhrase } = useAppStore.getState();
  let newPhrases = phrases;
  if (maxNumberOfWordsInPhrase) {
    newPhrases = newPhrases.filter(
      (phrase) => phrase.target.split(" ").length <= maxNumberOfWordsInPhrase
    );
  }
  newPhrases = newPhrases.filter(
    (phrase, index, self) =>
      index === self.findIndex((t) => t.target === phrase.target)
  );
  return newPhrases;
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
