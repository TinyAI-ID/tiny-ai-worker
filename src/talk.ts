import { OpenAPIRoute, Query, ValidationError } from "@cloudflare/itty-router-openapi";
import { Ai } from '@cloudflare/ai';

export class Talk extends OpenAPIRoute {
  static schema = {
    tags: ['Talk'],
    summary: 'Talk with a Tiny AI',
    parameters: {
      q: Query(String, {
        description: 'Say something to Tiny AI',
      }),
      name: Query(String, {
        description: 'Name of the Tiny AI',
        default: 'tiny',
      }),
    },
    responses: {
      '200': {
        schema: {
          response: 'Hello, I am Tiny AI. How can I help you?',
        },
      },
    },
  }

  async handle(request: Request, env, ctx, data: Record<string, any>) {
    // Initiate the AI
    const ai = new Ai(env.AI)

    const url = `https://plugin.tinyai.id/get?name=${data.name}`

    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer Tiny AI ChatGPT Plugin',
      }
    })

    if (!resp.ok) {
      return new Response(await resp.text(), { status: 400 })
    }

    const json = await resp.json()


    // Generate a response with Cloudflare AI:
    const messages = [
      { role: 'system', content: json.systemPrompt },
    ];

    if (json.systemKnowledge) {
      messages.push({ role: 'system', content: json.systemKnowledge })
    }

    if (json.data) {
      messages.push({ role: 'assistant', content: json.data })
    }

    messages.push({ role: 'user', content: data.q })

    const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', { messages });

    return response
  }
}
