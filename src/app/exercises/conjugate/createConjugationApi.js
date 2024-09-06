import { queryLLMApi } from "@/app/utils/api/clientApi";

export async function createConjugationApi() {
  const { response } = await queryLLMApi({
    messages: [
      {
        role: "user",
        content: createMessage(),
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
  const { verbList } = useConjugateExerciseStore.getState();
  const userMsg = `
I would like to practice the following exercise in portuguese

Exercise Instructions:
You will give me a set of 2 sentences with blanks. 
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
"solution": <the solution to the exercise - if the solution is Gerund than include estar conjugation as well>,
"completeSentence": <the complete sentence with the correct conjugation"
}
...
]

dont return anything but the json
`;
  return userMsg;
}
