import { errorResponse, successResponse } from "@/app/utils/apiResponses";
import { OpenAIWhisperAudio } from "@langchain/community/document_loaders/fs/openai_whisper_audio";
import path from "path";
import { writeFile, mkdir } from "fs/promises";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const apiKey = formData.get("apiKey");
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadDir = path.join(process.cwd(), "uploads");
    const filePath = path.join(uploadDir, file.name);

    await mkdir(uploadDir, { recursive: true });
    await writeFile(filePath, buffer);

    // Initialize the OpenAI Whisper Audio loader with the temporary file path
    const loader = new OpenAIWhisperAudio(filePath, { apiKey });

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
