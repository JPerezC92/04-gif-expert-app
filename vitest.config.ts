// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		exclude: [...configDefaults.exclude, '**/__TESTS__/e2e/**'],
		environment: 'jsdom',
		setupFiles: ['vitestSetup.ts'],
		// alias: {
		// 	'@/ui': '/src/ui',
		// 	'@/shared': '/src/shared',
		// 	'@/gifs': '/src/gifs',
		// 	'@': '/src',
		// },
		alias: [
			{
				find: '@/ui',
				replacement: path.resolve(__dirname, 'src/ui'),
			},
			{
				find: '@/shared',
				replacement: path.resolve(__dirname, 'src/shared'),
			},
			{
				find: '@/gifs',
				replacement: path.resolve(__dirname, 'src/gifs'),
			},

			{ find: '@', replacement: path.resolve(__dirname) },
		],
	},
});
