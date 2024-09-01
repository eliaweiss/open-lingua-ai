import { errorResponse, successResponse } from "@/app/utils/apiResponses";
import { OpenAIWhisperAudio } from "@langchain/community/document_loaders/fs/openai_whisper_audio";

export async function POST(request) {
  try {
    const { apiKey, audio } = await request.json();

    // Save the binary audio data to a temporary file
    const tempFilePath = "/tmp/temp_audio_file";
    const fs = require('fs');
    fs.writeFileSync(tempFilePath, Buffer.from(audio, 'binary'));

    // Initialize the OpenAI Whisper Audio loader with the temporary file path
    const loader = new OpenAIWhisperAudio(tempFilePath, { apiKey });

    // Load the transcription
    const docs = await loader.load();

    // Clean up the temporary file
    fs.unlinkSync(tempFilePath);

    return successResponse(docs, 200);
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  }
}
