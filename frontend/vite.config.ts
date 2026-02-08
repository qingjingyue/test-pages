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
            return '/' // 部署到服务器时使用绝对路径
        case 'production': // 本地生产环境，使用相对路径
            return './' // 使用相对路径，支持直接打开文件
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
