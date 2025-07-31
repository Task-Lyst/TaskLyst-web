import { vitePreprocess } from '@sveltejs/kit/vite';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

// https://kit.svelte.dev/docs/adapter-cloudflare

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false
		}),
		version: {
			name: pkg.version,
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;
