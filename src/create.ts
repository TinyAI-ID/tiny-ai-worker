import { OpenAPIRoute, Str } from "@cloudflare/itty-router-openapi";

export class CreateTodo extends OpenAPIRoute {
  static schema = {
    tags: ['Create todo'],
    summary: 'Create a new todo',
    requestBody: {
      todo: new Str({
        required: true,
        description: "The todo to create",
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
    // Save todo to the Cloudflare KV
    await env.MY_TODOS.put(Date.now().toString(), JSON.stringify(data.body), { expirationTtl: 60 * 60 * 24 * 7, metadata: { created: Date.now() } });

    return {
      response: `Created todo: ${data.body.todo} at ${Date.now()}, stored in DB.`
    }
  }
}
