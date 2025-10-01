import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'AI知识分享',
    description: 'A Notebook Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '应用场景', link: '/apply-scene/index' },
            { text: '编程语言', link: '/python-language/index' },
            { text: '机器学习', link: '/machine-learning/index' },
            { text: '深度学习', link: '/deep-learning/index' },
        ],

        sidebar: {
            '/': [
                {
                    items: [{ text: '基于AI的思考', link: '/think' }],
                },
            ],

            '/deep-learning/': [
                {
                    text: '名词术语',
                    items: [
                        {
                            text: '卷积神经网络',
                            link: '/deep-learning/terms/index',
                        },
                    ],
                },
                {
                    text: '卷积神经网络',
                    items: [
                        { text: '卷积神经网络', link: '/deep-learning/index' },
                    ],
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
                    text: '名词术语',
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
                    text: '环境搭建',
                    items: [
                        { text: '安装', link: './index' },
                        { text: '语言基础', link: './demo' },
                    ],
                },
                {
                    text: 'Miniconda',
                    items: [
                        {
                            text: '常用命令',
                            link: '/python-language/miniconda/index',
                        },
                        // { text: '语言基础', link: './demo' },
                    ],
                },
                {
                    text: 'Jupyter Notebook',
                    items: [
                        {
                            text: '常用命令',
                            link: '/python-language/jupyter-notebook/index',
                        },
                    ],
                },
            ],
        },

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/randeejia/ai-notebook',
            },
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
