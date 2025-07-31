import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Detect environment variables
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isGithubActions = !!process.env.GITHUB_ACTIONS;

// Automatically determine base path:
// - Local dev → '/'
// - GitHub Pages → '/<repo-name>/'
const basePath = isGithubActions ? `/${repoName}/` : '/';

export default defineConfig({
	plugins: [sveltekit()],
	base: basePath,
	server: {
		port: 5173,
		open: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
