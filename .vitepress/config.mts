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
            { text: 'PyTorch框架', link: '/pytorch/index' },
        ],

        sidebar: {
            '/pytorch/': [
                {
                    items: [{ text: 'PyTorch框架', link: '/pytorch/index' }],
                },
            ],
            '/apply-scene/': [
                {
                    text: '应用场景',
                    items: [{ text: '应用场景', link: '/apply-scene/index' }],
                },
            ],
            '/terms/': [
                {
                    text: 'Guide',
                    items: [
                        { text: '基于AI的思考', link: '/think' },
                        { text: '安装', link: '/installation/index' },
                    ],
                },
            ],
        },

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
