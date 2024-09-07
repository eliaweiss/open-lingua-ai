import useAppStore from "@/app/store/appStore";
import { fetchWrapper } from "../fetchWrapper";

let isQueryLLMApiRunning = false;

export async function queryLLMApi({ messages }) {
  if (isQueryLLMApiRunning) {
    console.warn("queryLLMApi is already running");
    return;
  }

  isQueryLLMApiRunning = true;
  try {
    const { llmApiKey, llmModel } = useAppStore.getState();
    const data = await fetchWrapper("/api/query-llm", {
      method: "POST",
      body: JSON.stringify({
        messages: messages,
        apiKey: llmApiKey,
        model: llmModel,
      }),
    });
    return data;
  } finally {
    isQueryLLMApiRunning = false;
  }
}

export async function transcribeAudio(audioBlob, prompt) {
  const { llmApiKey } = useAppStore.getState();
  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("apiKey", llmApiKey);
  formData.append("file", audioBlob, "audio-file-name.wav");

  //   const response = await fetch("/api/upload", {
  const data = await fetchWrapper("/api/transcribe-audio", {
    method: "POST",
    body: formData,
  });
  console.log("data", data);

  return data;
}
