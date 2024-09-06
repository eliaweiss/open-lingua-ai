import { queryLLMApi } from "@/app/utils/api/clientApi";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";

export async function createConjugationApi() {
  const prompt = createMessage();
  // console.log("prompt", prompt);
  // debugger;
  const { response } = await queryLLMApi({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log("checkUserTranslate response", response);
  const jsonString = response
    .replace(/\`\`\`json/, "")
    .replace(/\`\`\`/, "")
    .trim();
  const exerciseData = JSON.parse(jsonString);
  return exerciseData;
}

function createMessage() {
  const { targetLanguage, sourceLanguage } = useAppStore.getState();
  const { verbList } = useConjugateExerciseStore.getState();
  const userMsg = `
I would like to practice the following exercise in ${targetLanguage}

Exercise Instructions:
You will give me a set of 10 sentences with blanks. 
My task is to fill in the blanks with the correct conjugation of the verb. 
The sentences will require me to choose between a mix of the following tenses:

Present
Past Perfect
Past Imperfect 
Future
Gerund 

with the following verbs:
${verbList}

Please return the exercise in json format as 
[
 {
"id": <running counter>,
"exercise": <sentence with blanks to be filled>,
"verb": <verb to be conjugated>,
"pronoun": <pronoun>,
"tense": <tense>,
"solution": <the solution to the exercise - should include all missing words that are needed to complete the sentence>,
"completeSentence": <the complete sentence with the correct conjugation"
"translation": <the translation of the sentence to ${sourceLanguage}>
}
...
]

dont return anything but the json
`;
  return userMsg;
}
