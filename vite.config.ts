import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: [
					'/404',
					'/backnumber',
					'/backnumber/6',
					'/backnumber/5',
					'/backnumber/4',
					'/backnumber/3',
					'/backnumber/2',
					'/backnumber/1',
					'/books',
					'/event',
					'/company',
					'/videos',
					'/contact',
				],
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/404',
			},
		}),
	],
});
