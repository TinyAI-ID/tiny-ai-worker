import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { CreateTodo } from "./create";
import { DeleteTodo } from "./delete";
import { ListTodos } from "./list";

export const router = OpenAPIRouter({
  schema: {
    info: {
      title: 'Tiny AI Worker Todo Example',
      description: 'This is an example worker for the Tiny AI. It is a simple todo list API.',
      version: 'v0.0.1',
    },
  },
  docs_url: '/',
  aiPlugin: {
    name_for_human: 'Tiny AI',
    name_for_model: 'tiny',
    description_for_human: "Todo list worker for TinyAI",
    description_for_model: "Todo list worker for TinyAI",
    contact_email: 'help@tinyai.id',
    legal_info_url: 'https://plugin.tinyai.id/legal',
    logo_url: 'https://tinyai.id/tiny.png',
  },
})

router.get('/list-todos', ListTodos)
router.post('/create-todos', CreateTodo)
router.post('/delete-todo', DeleteTodo)

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default {
  fetch: router.handle
}
