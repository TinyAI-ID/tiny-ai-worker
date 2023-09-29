import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { Talk } from "./talk";
import { Upsert } from "./upsert";

export const router = OpenAPIRouter({
  schema: {
    info: {
      title: 'Tiny AI',
      description: 'Tiny AI is a platform for building AI-powered chatbots.',
      version: 'v0.0.1',
    },
  },
  docs_url: '/',
  aiPlugin: {
    name_for_human: 'Tiny AI',
    name_for_model: 'tiny',
    description_for_human: "You can use this plugin to create TinyAI, talk with TinyAI's and modify your TinyAI's.",
    description_for_model: "You can use this plugin to create TinyAI, talk with TinyAI's and modify your TinyAI's.",
    contact_email: 'help@tinyai.id',
    legal_info_url: 'https://plugin.tinyai.id/legal',
    logo_url: 'https://tinyai.id/tiny.png',
  },
})

router.post('/control', Upsert)
router.get('/talk', Talk)

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default {
  fetch: router.handle
}
