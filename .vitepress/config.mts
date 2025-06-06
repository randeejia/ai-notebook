import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'AI学习笔记',
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '名词术语', link: '/terms/index' },
            { text: '应用场景', link: '/apply-scene/index' },
            { text: 'Examples', link: '/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: '基于AI的思考', link: '/think' },
                    { text: '安装', link: '/chapter-installation' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
    },
    vite: {
        server: {
            port: 3003,
        },
    },
})
