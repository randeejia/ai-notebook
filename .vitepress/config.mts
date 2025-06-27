import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'

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
            { text: 'Python编程语言', link: '/python-language/index' },
            { text: 'PyTorch框架', link: '/pytorch/index' },
        ],

        sidebar: {
            '/pytorch/': [
                {
                    items: [{ text: 'PyTorch框架', link: '/index' }],
                },
            ],
            '/apply-scene/': [
                {
                    text: '应用场景',
                    items: [{ text: '应用场景', link: './index' }],
                },
            ],
            '/terms/': [
                {
                    text: 'Guide',
                    items: [
                        { text: '名词术语', link: './index' },
                        {
                            text: '动手学深度学习',
                            link: '../installation/index',
                        },
                    ],
                },
            ],
            '/python-language/': [
                {
                    text: 'Guide',
                    items: [
                        { text: '安装', link: './index' },
                        { text: '语言基础', link: './demo' },
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
    markdown: {
        config: (md) => {
            md.use(markdownItMathjax3)
        },
    },
})
