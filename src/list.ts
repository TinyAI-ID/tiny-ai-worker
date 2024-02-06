import { OpenAPIRoute, Query } from "@cloudflare/itty-router-openapi";

export class ListTodos extends OpenAPIRoute {
  static schema = {
    tags: ["List todos"],
    summary: "List all todos",
    parameters: {
      cursor: Query(String, {
        description: "Cursor for next page",
        required: false,
      }),
      limit: Query(Number, {
        description: "Limit for next page",
        required: false,
        default: 1000,
      }),
      prefix: Query(String, {
        description: "Prefix for next page",
        required: false,
      }),
    },
    responses: {
      "200": {
        schema: {
          response: "Listed as JSON"
        },
      },
    },
  };

  async handle(
    request: Request,
    env: any,
    _ctx: any,
    data: Record<string, any>
  ) {
    // NAMESPACE.list({prefix?: string, limit?: number, cursor?: string})
    const {cursor, limit, prefix} = data;
    // Limit default is 1000
    const value = await env.MY_TODOS.list({cursor: cursor, limit: limit, prefix: prefix});
    return new Response(JSON.stringify(value));
  }
}
