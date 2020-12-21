const sidebarData = require('./sidebar');
const navData = require('./nav');

module.exports = {
    title: 'What is Fe',
    description: '对前端知识体系的详细梳理',
    dest: 'dist',
    base: '/what-is-fe/',
    port: '8099',
    smoothScroll: true,
    themeConfig: {
        editLinks: true,
        docsDir: 'docs',
        nav: navData,
        sidebar: {
            "/framework/": [{
                title: 'React',
                collapsable: false,
                children: [
                    'React/关于react-hook'
                ]
            }]
        }
    }
}

function getSidebar() {
    const obj = {};
    navData.forEach(navItem => {
        if(navItem.link in sidebarData) {
            obj[navItem.link] = Object.keys(sidebarData[navItem.link]).map(sidebarKey => {
                const children = sidebarData[navItem.link][sidebarKey].length > 0 ? sidebarData[navItem.link][sidebarKey] : [];
                console.log(children);
                return {
                    title: sidebarKey,
                    collapsable: false,
                    children
                }
            })
        }
    })
    console.log(obj);  
    return obj;
}

