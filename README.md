# Tiny AI Powered ChatGPT Plugin

Tiny AI is a platform for creating AI-powered chats.
This repository contains [TinyAI.id](https://TinyAI.id) ChatGPT plugin

## [worker.tinyai.id](https://worker.tinyai.id)

![ChatGPT Output](./assets/chatgpt-tiny-ai.png)
![Cloudflare AI Worker API](./assets/tiny-worker.png)

# Access

- https://worker.tinyai.id is the ChatGPT plugin.
- https://plugin.tinyai.id is the TinyAI platform API's and also a ChatGPT plugin as well.

## Get started

0. Sign up for [Cloudflare Workers](https://workers.dev). The free tier is more than enough for most use cases.
1. Install [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update), the Cloudflare Workers CLI
2. Clone this project and install dependencies with `npm install`
3. Run `wrangler login` to login to your Cloudflare account in wrangler
4. Run `wrangler publish` to publish the plugin to Cloudflare Workers

## Hack this template

1. You can configure the `.well-known/ai-plugin.json` route in `index.ts`.
2. Update the OpenAPI schema in `openapi.ts`.
3. You can set up any new routes and the associated OpenAPI schema by defining new routes. See `search.ts` for an example.

## Deploying to OpenAI's API

Follow the instructions [in the ChatGPT documentation](https://platform.openai.com/docs/plugins/introduction/plugin-flow) to deploy your plugin and begin using it in ChatGPT.