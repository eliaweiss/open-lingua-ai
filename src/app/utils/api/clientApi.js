import useAppStore from "@/app/store/appStore";
import { fetchWrapper } from "../fetchWrapper";

export async function queryLLMApi({ messages }) {
  const { llmApiKey, llmModel } = useAppStore.getState();
  const data = await fetchWrapper("/api/query-llm", {
    method: "POST",
    body: JSON.stringify({
      messages: messages,
      apiKey: llmApiKey,
      model: llmModel,
    }),
  });
  //   console.log(data);
  return data;
}
