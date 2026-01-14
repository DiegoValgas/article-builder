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
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env': {},
        'process': {},
    },
    build: {
        lib: {
            entry: {
                canva: resolve(__dirname, 'src/canva.js'),
                page: resolve(__dirname, 'src/page.js'),
            },
            name: ['Canva', 'Page'],
            formats: ['es'],
        },
        cssCodeSplit: true,
    }
})
