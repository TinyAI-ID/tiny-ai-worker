import { OpenAPIRoute, Str } from "@cloudflare/itty-router-openapi";


export class DeleteTodo extends OpenAPIRoute {
  static schema = {
    tags: ['Delete todo'],
    summary: 'Delete a todo',
    requestBody: {
      timestamp: new Str({
        required: true,
        description: "The timestamp of the todo to delete",
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
    // Delete from the Cloudflare KV
    await env.MY_TODOS.delete(data.body.timestamp);

    return {
      response: `Deleted todo: ${data.body.timestamp} from DB.`
    }
  }
}
