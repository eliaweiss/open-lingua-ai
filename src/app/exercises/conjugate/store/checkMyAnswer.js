import { queryLLMApi } from "@/app/utils/api/clientApi";
import { marked } from "marked";
import useConjugateExerciseStore from "./ConjugateExerciseStore";

export async function checkMyAnswer() {
  const { setCheckAnswerResponse } = useConjugateExerciseStore.getState();

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
  console.log("createConjugationApi response", response);
  const htmlTxt = marked(response);
  setCheckAnswerResponse(htmlTxt);
  return response;
}

function createMessage() {
  const { answer, currentExercise } = useConjugateExerciseStore.getState();
  const userMsg = `
Please check my answer to the following exercise and give me feedback
--------------------------------
Exercise: ${currentExercise.exercise}
Expected tense: ${currentExercise.tense}
Expected pronoun: ${currentExercise.pronoun}
Expected verb: ${currentExercise.verb}
Teacher answer: ${currentExercise.solution}
Complete sentence: ${currentExercise.completeSentence}   
--------------------------------
My answer: ${answer}

NOTE: 
- If both simple future and periphrastic future are correct, 
and my answer is either one of them, accept the answer as correct.
- Teacher might be not precise/wrong. If you think that, you can also give a more precise answer.
  `;
  return userMsg;
}
