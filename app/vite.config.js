import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

/**
 * @see https://vite.dev/config/
 */
export default defineConfig({
    publicDir: false,
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
    ],
    define: {
        'process.env': {}
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        lib: {
            entry: {
                canva: resolve(__dirname, 'src/canva.js'),
                page: resolve(__dirname, 'src/page.js'),
            },
            formats: ['es'],
            fileName: '[name]',
        },
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                dir: 'dist',
                format: 'es',
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: '[name][extname]',
            },
        }
    }
})
