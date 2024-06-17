import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
	alias: {
		"@": fileURLToPath(new URL("./", import.meta.url)),
	},
	devtools: { enabled: true },
	typescript: {
		shim: false,
		strict: true,
		// https://github.com/nuxt/nuxt/issues/14816#issuecomment-1484918081
		tsConfig: {
			compilerOptions: {
				baseUrl: ".",
				paths: {
					"@/*": ["./*"],
				},
			},
		},
	},
});
