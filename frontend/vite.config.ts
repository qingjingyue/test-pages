import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 关键：设置基础路径
const basePath = () => {
    switch (process.env.NODE_ENV) {
        case 'github-pages':
            return '/test-pages-deploy/' 
        case 'nginx':
            return '/' 
        default:
            return '/' 
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    base: basePath(),

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
