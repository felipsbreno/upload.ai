import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import { createTransactionRoute } from "./routes/create-transcription";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(createTransactionRoute);
app.register(generateAiCompletionRoute);
app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);

app.listen({ port: 3000 }).then(() => {
  console.log("Server is running");
});
