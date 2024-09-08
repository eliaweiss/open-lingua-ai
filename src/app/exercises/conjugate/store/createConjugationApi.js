import { queryLLMApi } from "@/app/utils/api/clientApi";
import useConjugateExerciseStore from "./ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";
import { extractJsonFromResponse } from "@/app/utils/responseUtils";

export async function createConjugationApi() {
  const prompt = createMessage();
  console.log("prompt", prompt);
  const { response } = await queryLLMApi({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log("createConjugationApi response", response);
  const exerciseData = extractJsonFromResponse(response);
  return exerciseData;
}

function createTenseList() {
  const { tenses } = useConjugateExerciseStore.getState();
  if (tenses.length === 0) {
    return "";
  }
  const tenseList = tenses.map((tense) => tense.replace("_", " ")).join(", ");
  return `
The sentences will require me to choose between a mix of the following tenses: 
${tenseList}
NOTE: you will receive a 25$ tip if you use only these tenses in the exercise.
`;
}

function createVerbList() {
  const { verbList } = useConjugateExerciseStore.getState();
  const list = verbList.trim();
  if (!list) {
    return "";
  }
  return `
with the following verbs:
${list}
NOTE: you will receive a 25$ tip if you use only these verbs in the exercise.
`;
}

function createMessage() {
  const { targetLanguage, sourceLanguage } = useAppStore.getState();
  const userMsg = `
I would like to practice the following exercise in ${targetLanguage}

Exercise Instructions:
You will give me a set of 10 sentences with blanks. 
My task is to fill in the blanks with the correct conjugation of the verb. 
${createVerbList()}

If the sentence has more than one verb, only blank the first verb.
${createTenseList()}

Please return the exercise in json format as 
[
 {
"id": <running counter>,
"exercise": <sentence with blanks to be filled>,
"verb": <verb to be conjugated>,
"pronoun": <pronoun>,
"tense": <tense - write the full tense name in ${sourceLanguage}, including subjunctive if relevant>,
"solution": <the solution to the exercise - should include all missing words that are needed to complete the sentence>,
"completeSentence": <the complete sentence with the correct conjugation"
"translation": <the translation of the sentence to ${sourceLanguage}>
"explanation": <a short explanation in ${sourceLanguage} why the tense was chosen and the conjugation used>,
}
...
]

don't return anything but the json
`;
  return userMsg;
}
