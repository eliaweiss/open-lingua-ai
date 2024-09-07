import { queryLLMApi } from "@/app/utils/api/clientApi";
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

  setCheckAnswerResponse(response);
  return response;
}

function createMessage() {
  const { answer, currentExercise } = useConjugateExerciseStore.getState();
  const userMsg = `
Please check my answer and give me feedback.
Exercise: ${currentExercise.exercise}
My answer: ${answer}
Correct answer: ${currentExercise.solution}
${currentExercise.completeSentence}   
  `;
  return userMsg;
}
