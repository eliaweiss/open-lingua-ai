import { errorResponse, successResponse } from "@/app/utils/apiResponses";
import { OpenAIWhisperAudio } from "@langchain/community/document_loaders/fs/openai_whisper_audio";

import multer from "multer";
import nextConnect from "next-connect";

const upload = multer({
  storage: multer.memoryStorage(),
});

export async function POST(request) {
  const file = req.file;

  if (file) {
    // Process the file (e.g., save it, send it to a service, etc.)
    console.log("File received:", file);
    return successResponse(file, 200);
  } else {
    return errorResponse("No file received", 400);
  }
  // return new Promise(async (resolve, reject) => {
  //   const buffer = await request.arrayBuffer();
  //   console.log("buffer", buffer.length);
  //   const formData = formidable({ multiples: true });

  //   formData.parse(buffer, async (err, fields, files) => {
  //     if (err) {
  //       console.error("Form parsing error:", err);
  //       resolve(errorResponse("Form parsing failed", 400));
  //       return;
  //     }

  //     try {
  //       const { apiKey } = fields;
  //       const audioFile = files.audio.filepath;

  //       if (!apiKey || !audioFile) {
  //         resolve(errorResponse("API key or audio file is missing", 400));
  //         return;
  //       }

  //       // Initialize the OpenAI Whisper Audio loader with the file path
  //       const loader = new OpenAIWhisperAudio(audioFile, { apiKey });

  //       // Load the transcription
  //       const docs = await loader.load();

  //       // Clean up the temporary file
  //       await fs.unlink(audioFile);

  //       resolve(successResponse(docs, 200));
  //     } catch (error) {
  //       console.error("Processing error:", error);
  //       resolve(errorResponse("Processing failed", 500));
  //     }
  //   });
  // });
}
