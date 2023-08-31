import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "@rollup/plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					//every tag with '-' is a custom element
					isCustomElement: (tag) => tag.includes("-"),
				},
			},
		}),
		{
			...eslint({
				include: "src/**/*.*/js",
			}),
			enforce: "pre",
			apply: "build",
		},
		AutoImport({
			/* options */
			imports: [
				"vue",
				"pinia",

				{
					// "@/stores/shop": ["useShopStore"],
				},
			],
			dirs: ["src/stores"],
			dts: true,
		}),
		Components({
			dirs: ["src/views", "src/components", "src/views/pages"],
			dts: true,
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
