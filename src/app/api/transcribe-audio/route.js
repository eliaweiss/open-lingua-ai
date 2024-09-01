import { errorResponse, successResponse } from "@/app/utils/apiResponses";
import { OpenAIWhisperAudioLoader } from "@langchain/community/document_loaders/fs/openai_whisper_audio";

export async function POST(request) {
  try {
    const { audioFilePath, apiKey } = await request.json();

    if (!apiKey) {
      return errorResponse("API key is required");
    }
    if (!audioFilePath) {
      return errorResponse("Audio file path is required");
    }

    // Initialize the Whisper loader with the provided API key
    const whisperLoader = new OpenAIWhisperAudioLoader({
      openAIApiKey: apiKey,
    });

    // Load the document (transcribe the audio)
    const documents = await whisperLoader.load(audioFilePath);

    // Assuming documents is an array, and we take the content from the first document
    const transcription =
      documents[0]?.pageContent || "No transcription available";

    return successResponse({ transcription });
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  }
}
