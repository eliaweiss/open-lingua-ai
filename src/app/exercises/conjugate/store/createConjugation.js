import { createConjugationApi } from "../createConjugationApi";
import useConjugateExerciseStore from "./ConjugateExerciseStore";

export async function createConjugation() {
  const { setExerciseData, setExerciseIndex } =
    useConjugateExerciseStore.getState();
  const exerciseData = await createConjugationApi();
  setExerciseData(exerciseData);
  setExerciseIndex(0);
}
