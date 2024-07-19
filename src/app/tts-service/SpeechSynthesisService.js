// SpeechSynthesisService.js

let voices = [];
let timeoutResumeInfinity;
let myTimeout;
const sleepTime = 2000;

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = loadVoices;

function splitIntoSubSentences(text) {
  return text.split(/[,.?] /);
}

async function readAloud_slow(text, lang) {
  const groups = splitIntoSubSentences(text);
  for (const sentence of groups) {
    await readAloud_helper(addCommas(sentence), lang);
  }
}

async function readAloud(text, lang, rate) {
  if (!rate) rate = 1
  const groups = splitIntoSubSentences(text);
  for (const sentence of groups) {
    await readAloud_helper(sentence, lang, rate);
  }
}

function myTimer() {
  window.speechSynthesis.pause();
  window.speechSynthesis.resume();
  clearTimeout(myTimeout);
  myTimeout = setTimeout(myTimer, sleepTime);
}

async function readAloud_helper(text, lang, rate = 1) {
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

      myTimeout = setTimeout(myTimer, sleepTime);
      utterance.onend = function () {
        clearTimeout(myTimeout);
        resolve();
      };

      utterance.onerror = function (event) {
        console.log("Speech error: " + event.error);
        clearTimeout(myTimeout);
        reject(event.error);
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      reject();
    }
  });
}

function addCommas(text) {
  const words = text.split(/\s+/);
  return words.join(", ");
}

async function waitForSeconds(ss) {
  await new Promise((resolve) => setTimeout(resolve, ss * 1000));
}

function randomPermutation(data) {
  const perm = data.slice();
  for (let i = perm.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  return perm;
}

function cancel() {
  window.speechSynthesis.cancel();
}

export { readAloud_slow, readAloud, waitForSeconds, randomPermutation, cancel };
