import dotenv from 'dotenv'
dotenv.config()

import adapter from '@sveltejs/adapter-vercel'
import autoAdapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter: adapter()
		adapter: process.env.NODE_ENV == "production" ? adapter({
			runtime: 'nodejs20.x',
			regions: ["fra1"]
		}) : autoAdapter()
	}
};

export default config;