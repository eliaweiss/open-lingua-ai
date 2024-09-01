// import useAppStore from "@/app/store/appStore";
import useTranslateExerciseStore from "./store/TranslateExerciseStore";
import { queryLLMApi } from "@/app/utils/api/clientApi";

export async function checkUserTranslate() {
  const response = await queryLLMApi({
    messages: [
      {
        role: "user",
        content: createMessage(),
      },
    ],
  });
  console.log("checkUserTranslate response", response);
  return response;
}

function createMessage() {
  const { yourTranslatedText, originalText, suggestedTranslatedText } =
    useTranslateExerciseStore.getState();
  const userMsg = `
The user is practicing translation.
Please check user translation.
My translation: ${yourTranslatedText}
Original text: ${originalText}
Suggested teacher translation: ${suggestedTranslatedText}
Please check if the user translation is correct.
If not, please correct the translation and provide explanation.
If the translation is correct, please say "Correct".
Please don't mention the teacher suggested translation - it is only for reference.
Don't mention the term 'user' - refer to the user as 'you'.
`;
  return userMsg;
}
