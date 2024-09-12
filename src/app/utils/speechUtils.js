import useSpeechSynthesisStore from "../context/SpeechSynthesisStore";
import useAppStore from "../store/appStore";

let voices = [];

export function loadVoices() {
  voices = window.speechSynthesis.getVoices();
}

export function splitIntoSubSentences(text) {
  return text.split(/[,.?] /);
}

export async function readAloud_slow(text, lang) {
  const groups = splitIntoSubSentences(text);
  for (const sentence of groups) {
    await readAloud_helper(addCommas(sentence), lang);
  }
}

export async function readAloud(text, lang, rate) {
  const { setIsReading } = useSpeechSynthesisStore.getState();
  setIsReading(true);
  try {
    if (!rate) rate = 1;
    if (text.split(" ").length > 16) {
      const groups = splitIntoSubSentences(text);
      for (const sentence of groups) {
        await readAloud_helper(sentence, lang, rate);
      }
    } else {
      await readAloud_helper(text, lang, rate);
    }
  } finally {
    setIsReading(false);
  }
}

export async function readAloud_helper(text, lang, rate) {
  if (!rate) rate = 1;

  return new Promise((resolve, reject) => {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.lang = lang;

      const selectedVoice = voices.find(
        (voice) => voice.lang === lang && voice.name.includes("Google")
      );
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = function () {
        resolve();
      };

      utterance.onerror = function (event) {
        console.log("Speech error: " + event.error);
        reject(event.error);
      };

      if (typeof window !== "undefined") {
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      reject();
    }
  });
}

export function addCommas(text) {
  const words = text.split(/\s+/);
  return words.join(", ");
}

export async function waitForSeconds(ss) {
  await new Promise((resolve) => setTimeout(resolve, ss * 1000));
}

export function cancelSpeech() {
  if (typeof window !== "undefined") {
    window.speechSynthesis.cancel();
  }
}

export const readAloud_src = async (text, rate) => {
  const { sourceLanguage, sourceLanguageRate } = useAppStore.getState();
  if (!rate) {
    rate = sourceLanguageRate;
  }
  await readAloud(text, sourceLanguage, rate);
};

export const readAloud_target = async (text, rate) => {
  const { targetLanguage, targetLanguageRate } = useAppStore.getState();
  if (!rate) {
    rate = targetLanguageRate;
  }
  await readAloud(text, targetLanguage, rate);
};

export const readAloud_slow_target = async (text) => {
  const { targetLanguage, targetLanguageRate } = useAppStore.getState();
  await readAloud_slow(text, targetLanguage, targetLanguageRate);
};
