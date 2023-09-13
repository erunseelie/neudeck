import adapter from "@macfja/svelte-adapter-neutralino";
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
            // default options are shown
            name: "SvelteKit",
            applicationId: "dev.svelte.kit",
            icon: "favicon.png",
            window: {
                width: 800,
                height: 500,
                minWidth: 400,
                minHeight: 200,
                resizable: true,
                maximize: false,
            },
            output: "build",
            verions: {
                client: "3.1.0",
                binary: "4.2.0",
            },
        }),
	}
};

export default config;
