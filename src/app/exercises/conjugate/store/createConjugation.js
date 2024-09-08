import { createConjugationApi } from "./createConjugationApi";
import useConjugateExerciseStore from "./ConjugateExerciseStore";

export async function createConjugation() {
  try {
    const { setExerciseData, setExerciseIndex } =
      useConjugateExerciseStore.getState();
    const exerciseData = await createConjugationApi();
    setExerciseData(exerciseData);
    setExerciseIndex(0);
  } catch {
    console.log("ignore");
  }
}
