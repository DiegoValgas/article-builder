import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import ViteSettings from './vite.settings'
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
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        lib: {
            entry: ViteSettings.getJsEntries(resolve(__dirname, 'src')),
            formats: ['es'],
            fileName: '[name]',
        },
        cssCodeSplit: true,
        rollupOptions: {
            external: ['vue'],
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
