// File: /app/api/query-llm/route.js

import { errorResponse, successResponse } from "@/app/utils/apiResponses";
import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
// Import other LLMs as needed from LangChain

export async function POST(request) {
  try {
    const { messages, model, apiKey } = await request.json();

    if (!apiKey) {
      return errorResponse("API key is required");
    }
    if (!model) {
      return errorResponse("Model is required");
    }
    if (!messages) {
      return errorResponse("Message is required");
    }

    let llm;

    // Select the LLM based on the model input
    switch (model) {
      case "gpt-3.5-turbo":
      case "gpt-4":
      case "gpt-4o-mini":
      case "gpt-4o":
        llm = new ChatOpenAI({ openAIApiKey: apiKey, modelName: model });
        break;

      case "claude-3-5-opus":
      case "claude-3-5-sonnet":
      case "claude-3-5-haiku":
        llm = new ChatAnthropic({ anthropicApiKey: apiKey, modelName: model });
        break;

      // Add other models and their corresponding LangChain classes here
      default:
        return errorResponse("Unsupported model");
    }

    // Call the LLM with the input message
    const response = await llm.invoke(messages);

    return successResponse({ response: response.content });
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  }
}
