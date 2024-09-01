import OpenAI from "openai";
import { errorResponse, successResponse } from "@/app/utils/apiResponses";

function blobToFile(theBlob, fileName) {
  const fd = new FormData();
  fd.set("a", theBlob, "filename");
  return fd.get("a");
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const prompt = formData.get("prompt");
    const apiKey = formData.get("apiKey");
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Create a Blob from the buffer
    const blob = new Blob([buffer], { type: "audio/mpeg" });

    // Convert Blob to File
    const fileToUpload = blobToFile(blob, "audio.mp3");

    console.log(fileToUpload);

    const openai = new OpenAI({ apiKey });
    // console.log("before");

    const transcription = await openai.audio.transcriptions.create({
      file: fileToUpload, // Pass the File object here
      model: "whisper-1",
      prompt: prompt,
    });

    // console.log("after");
    return successResponse({ text: transcription?.text }, 200);
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  }
}
