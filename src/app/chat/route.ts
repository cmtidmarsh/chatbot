import OpenAI from "openai";

const apikey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: apikey });

export async function POST(req: Request) {
  const { question } = await req.json();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "ghosts",
      },
      {
        role: "user",
        content: question,
      },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 300,
  });

  return new Response(JSON.stringify(response));
}
