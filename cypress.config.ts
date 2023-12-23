import { defineConfig } from 'cypress';

export default defineConfig({
	video: false,
	e2e: {
		baseUrl: 'http://localhost:3000',
		specPattern: '__TESTS__/e2e/tests/**/*.spec.{js,jsx,ts,tsx}',
		screenshotOnRunFailure: false,
		video: false,
		viewportWidth: 1600,
		viewportHeight: 900,
		supportFile: '__TESTS__/e2e/support/e2e.ts',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
	},
});
