import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

// Load environment variables from .env file
dotenv.config();
console.log(process.env["ANTHROPIC_API_KEY"]);

const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
});

const msg = await anthropic.messages.create({
  model: "claude-3-haiku-20240307",
  max_tokens: 1000,
  temperature: 0,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "translate the following sentence in to il-HE:\nwhat is your name?\n\nand return the result json list format:\n{src: ...srcSentence..., target: ...TranslatedSentence...}\n\ndon't return any text other than the json result\n\n\n",
        },
      ],
    },
  ],
});
console.log(msg);
