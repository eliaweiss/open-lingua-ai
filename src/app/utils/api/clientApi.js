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
  return data;
}

export async function transcribeAudio(audioBlob) {
  const { llmApiKey } = useAppStore.getState();
  const formData = new FormData();
  formData.append("apiKey", llmApiKey);
  formData.append("file", audioBlob, "audio-file-name.wav");

  //   const response = await fetch("/api/transcribe-audio", {
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.transcription;
}
