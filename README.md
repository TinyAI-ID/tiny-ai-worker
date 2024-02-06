# Tiny AI Example Worker: Todo List

[![TinyAI.id](https://img.shields.io/badge/Powered%20by-tiny.technology-blue)](https://tiny.technology)

<!-- One click deploy to cloudflare -->
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/tinyai-id/tiny-ai-worker-todo-example)

This is an example of a Cloudflare Worker that uses Cloudflare Workers KV to store a simple todo list. It is a part of the Tiny AI platform.

# Prerequisites

- Node.js
- Wrangler CLI
- Cloudflare Workers account
- Cloudflare Workers KV


# Configuration
- Create a new Cloudflare Workers KV namespace
> https://developers.cloudflare.com/kv/reference/how-kv-works/
- Update the wrangler.toml file with your Cloudflare account ID and KV namespace ID

```
kv_namespaces = [
  { binding = "TODO_LIST", id = "YOUR_KV_NAMESPACE_ID" }
]
```

# Installation

```bash
git clone git@github.com:TinyAI-ID/tiny-ai-worker-todo-example.git;
cd tiny-ai-worker-todo-example;
npm install;
```

# Usage

```bash
wrangler publish
```

# Development

```bash
wrangler dev
```

# Tiny AI

Tiny AI is a platform for creating AI-powered chats.
This repository contains [tiny.technology](https://tiny.technology) ChatGPT plugin

## [worker.tinyai.id](https://worker.tinyai.id)

![ChatGPT Output](./assets/chatgpt-tiny-ai.png)
![Cloudflare AI Worker API](./assets/tiny-worker.png)

## Hack this template

1. You can configure the `.well-known/ai-plugin.json` route in `index.ts`.
2. Update the OpenAPI schema in `openapi.ts`.
3. You can set up any new routes and the associated OpenAPI schema by defining new routes. See `search.ts` for an example.

## Deploying to OpenAI's API

Follow the instructions [in the ChatGPT documentation](https://platform.openai.com/docs/plugins/introduction/plugin-flow) to deploy your plugin and begin using it in ChatGPT.