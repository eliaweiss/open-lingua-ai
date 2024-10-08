import useConjugateExerciseStore from "./ConjugateExerciseStore";
import { extractJsonFromResponse } from "@/app/utils/responseUtils";
import { queryLLMApi } from "@/app/utils/api/clientApi";

export async function fixExerciseApi() {
  const { setCurrentExercise, exerciseData, setExerciseData } =
    useConjugateExerciseStore.getState();
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
  //   console.log("fixExerciseApi", response);
  const exercise = extractJsonFromResponse(response);
  console.log("fixExerciseApi", exercise);
  setCurrentExercise(exercise);
  // find the exercise in the array and replace it
  const index = exerciseData.findIndex((e) => e.id === exercise.id);
  exerciseData[index] = exercise;
  setExerciseData([...exerciseData]);

  return exerciseData;
}

function createMessage() {
  const { currentExercise } = useConjugateExerciseStore.getState();
  const exerciseSerialized = JSON.stringify(currentExercise, null, 2);
  const message = `
    I am using the open ai api to create an exercise
it gave me this:

${exerciseSerialized}

There is something wrong with the exercise.
can u fix it?
Please return the exercise in json format (same format as the one I sent you)
don't return anything but the json

`;
  return message;
}
