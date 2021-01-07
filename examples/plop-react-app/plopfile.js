/**
 * plop入口文件，需要导出一个函数
 * 此函数接受一个plop对象，用于创建生成器任务
 */

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.js',
        templateFile: 'plop-templates/component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/component.css.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.test.js',
        templateFile: 'plop-templates/component.test.js.hbs'
      }
    ]
  })
}
