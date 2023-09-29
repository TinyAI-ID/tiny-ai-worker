import { OpenAPIRoute, Str } from "@cloudflare/itty-router-openapi";

export class Upsert extends OpenAPIRoute {
  static schema = {
    tags: ['Create', 'Modify'],
    summary: 'Control a Tiny AI: Create or modify a Tiny AI',
    requestBody: {
      name: new Str({
        required: true,
        description: "Name of Tiny AI",
      }),
      firstMessage: new Str({
        required: true,
        description: "First message to be shown in Tiny AI",
      }),
      secondMessage: new Str({
        required: false,
        description: "Second message to be shown in Tiny AI",
      }),
      data: new Str({
        required: false,
        description: "Data to be known by Tiny AI",
      }),
      key: new Str({
        required: false,
        description: "The key for existing tiny apps. If you want to create a new tiny app, leave this field empty.",
      }),
    },
    responses: {
      '200': {
        schema: {
          response: 'OK',
        },
      },
      '400': {
        schema: {
          response: 'I could not do it.',
        },
      },
    },
  }

  async handle(request: Request, env, ctx, data: Record<string, any>) {
    const {firstMessage, secondMessage, data: tinyData, name, key} = data.body;
    const resp = await fetch('https://plugin.tinyai.id/upsert', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        systemPrompt: firstMessage,
        systemKnowledge: secondMessage,
        data: tinyData,
        name: name,
        key: key,
      })
    })

    if (!resp.ok) {
      return new Response('I could not do it.', { status: 400 })
    }

    return {
      response: `AI is controlled: https://tinyai.id/${name}`
    }
  }
}
