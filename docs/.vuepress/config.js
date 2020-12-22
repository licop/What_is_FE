const sidebarData = require('./sidebar');
const navData = require('./nav');

module.exports = {
    title: 'What is Fe',
    description: '构建自己的系统的 Web 前端知识体系',
    dest: 'dist',
    port: '8099',
    smoothScroll: true,
    themeConfig: {
        editLinks: true,
        docsDir: 'docs',
        nav: navData,
        sidebar: getSidebar()
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: true
        }],
        ['@vuepress/medium-zoom', true]
    ]
}

function getSidebar() {
    let obj = {};

    Object.keys(sidebarData).forEach(key => {
        obj[key] = Object.keys(sidebarData[key]).map(subKey => {
            let children =  [];
            if(sidebarData[key][subKey].length > 0) {
                children = sidebarData[key][subKey].map(child => {
                    return `${subKey}/${child}`
                })
            }

            return {
                title: subKey,
                collapsable: false,
                children
            }
        })
    });
    
    return obj;
}
