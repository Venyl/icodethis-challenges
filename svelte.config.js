import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

function redeclareShadows() {
	return {
		name: 'redeclareShadows',
		style({ content }) {
			if (content.indexOf('box-shadow: var(--shadow-') === -1) return { code: content };
			const shadow1 =
				'box-shadow:var(--shadow-1);--shadow-1:0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));';
			const shadow2 =
				'box-shadow:var(--shadow-2);--shadow-2:0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%));';
			const shadow3 =
				'box-shadow:var(--shadow-3);--shadow-3:0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));';
			const shadow4 =
				'box-shadow:var(--shadow-4);--shadow-4:0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%));';
			const shadow5 =
				'box-shadow:var(--shadow-5);--shadow-5:0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));';
			const shadow6 =
				'--shadow-6:0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));box-shadow:var(--shadow-6);';
			const innerShadow0 =
				'box-shadow:var(--inner-shadow-0);--inner-shadow-0:inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));';
			const innerShadow1 =
				'box-shadow:var(--inner-shadow-1);--inner-shadow-1:inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)),var(--inner-shadow-highlight);';
			const innerShadow2 =
				'box-shadow:var(--inner-shadow-2);--inner-shadow-2:inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)),var(--inner-shadow-highlight);';
			const innerShadow3 =
				'box-shadow:var(--inner-shadow-3);--inner-shadow-3:inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)),var(--inner-shadow-highlight);';
			const innerShadow4 =
				'box-shadow:var(--inner-shadow-4);--inner-shadow-4:inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)),var(--inner-shadow-highlight)}';
			const shadowReplacements = {
				'box-shadow: var(--shadow-1);': shadow1,
				'box-shadow: var(--shadow-2);': shadow2,
				'box-shadow: var(--shadow-3);': shadow3,
				'box-shadow: var(--shadow-4);': shadow4,
				'box-shadow: var(--shadow-5);': shadow5,
				'box-shadow: var(--shadow-6);': shadow6,
				'box-shadow: var(--inner-shadow-0);': innerShadow0,
				'box-shadow: var(--inner-shadow-1);': innerShadow1,
				'box-shadow: var(--inner-shadow-2);': innerShadow2,
				'box-shadow: var(--inner-shadow-3);': innerShadow3,
				'box-shadow: var(--inner-shadow-4);': innerShadow4
			};
			content = content.replace(
				/box-shadow: var\(--(inner-)?shadow-\d\);/g,
				(match) => shadowReplacements[match] || match
			);
			return {
				code: content
			};
		}
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [redeclareShadows(), vitePreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
