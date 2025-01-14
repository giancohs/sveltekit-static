import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			// This is the base path for the project, which is set in the github action, and is the name of the repository
			base: process.env.BASE_PATH ? '/' + process.env.BASE_PATH : ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
