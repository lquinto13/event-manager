import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000, // Change Vite's default port
		proxy: {
			// Proxy API requests starting with /api to the backend server running on port 5000
			'/api': {
				target: 'http://localhost:5000', // Your Express server port
				changeOrigin: true,
			},
		},
	},
})
