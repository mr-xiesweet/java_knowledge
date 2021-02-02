module.exports = {
    title: 'XieのBlog',// 设置网站标题
    description: 'XieのGit博客',
    base: '/study/',   // 设置站点根路径
    dest: './dist',  // 设置输出目录
    port: 8899,
    head: [
        [ 'link', { rel: 'icon', href: '/img/favicon.ico' }]
    ],
    plugins: [],
    themeConfig: {
        displayAllHeaders: false,
        sidebarDepth: 2,
        nav: [
            { text: '主页', link: '/' },
            { text: '绩效考核系统', link: '/hrp-doc/' },
            { text: 'Java学习', link:'/java-doc/'},
        ],
        sidebar: require('./sidebar.js')
    }
}