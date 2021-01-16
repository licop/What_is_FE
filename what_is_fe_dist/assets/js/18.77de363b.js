(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{385:function(t,a,s){"use strict";s.r(a);var n=s(27),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"storybook-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storybook-使用"}},[t._v("#")]),t._v(" Storybook 使用")]),t._v(" "),s("h2",{attrs:{id:"storybook-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storybook-是什么"}},[t._v("#")]),t._v(" Storybook 是什么")]),t._v(" "),s("p",[t._v("使用 Storybook 可以为你的项目一键生成样式指南(Style Guide)页面。")]),t._v(" "),s("p",[t._v("使用 "),s("strong",[t._v("组件驱动开发(CDD)")]),t._v(" 的模式，首先完成基础组件，通过组件复用的方式构建功能模块和页面。\n使用 CDD 开发有如下好处：")]),t._v(" "),s("ol",[s("li",[t._v("开发和设计更方便交流，更快速的迭代产品原型")]),t._v(" "),s("li",[t._v("UI 与业务分离，基础组件中间无依赖，可以并行开发")]),t._v(" "),s("li",[t._v("组件拆分更合理、规范，整体风格由基础组件决定，可以保证 UI 风格的统一性")]),t._v(" "),s("li",[t._v("组件包含文档和样例，方便其他人员开始使用")])]),t._v(" "),s("h2",{attrs:{id:"storybook-优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storybook-优点"}},[t._v("#")]),t._v(" Storybook 优点")]),t._v(" "),s("ol",[s("li",[t._v("环境配置简单快捷，一条命令即可完成配置 (CRA 基础上)。")]),t._v(" "),s("li",[t._v("样式指南编写简单，可自动提取 Props 定义、组件名称等，无需繁琐步骤即可使用。")]),t._v(" "),s("li",[t._v("提供插件机制，功能可扩展，默认支持响应式设计，预览背景，实时属性更改，自动化文档等。")]),t._v(" "),s("li",[t._v("支持 MDX 格式，可编写带组件预览的 Markdown 文档，亦可作为纯文档使用。")]),t._v(" "),s("li",[t._v("可以独立打包成 App，作为 UI 文档发布。")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("在项目中运行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  npx sb init\n")])])]),s("p",[t._v("会在项目中生成如下文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".storybook\n├── main.js     // stories 路径和插件配置\n└── preview.js  // 全局组件预览配置\n\nsrc\n├── index.tsx\n└── stories     // 默认生成的 Demo\n    ├── Button.stories.tsx\n    ├── Button.tsx\n    ├── Header.stories.tsx\n    ├── Header.tsx\n    ├── Introduction.stories.mdx\n    ├── Page.stories.tsx\n    ├── Page.tsx\n    ├── assets\n    │   ├── code-brackets.svg\n    │   ├── colors.svg\n    │   ├── comments.svg\n    │   ├── direction.svg\n    │   ├── flow.svg\n    │   ├── plugin.svg\n    │   ├── repo.svg\n    │   └── stackalt.svg\n    ├── button.css\n    ├── header.css\n    └── page.css\n")])])]),s("p",[t._v("除此之外，还会自动修改"),s("code",[t._v("package.json")]),t._v("，添加相关依赖和 scripts")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "storybook": "start-storybook -p 6006 -s public",\n  "build-storybook": "build-storybook -s public"\n}\n')])])]),s("p",[t._v("运行"),s("code",[t._v("yarn storybook")]),t._v("即可直接预览 Demo")]),t._v(" "),s("h2",{attrs:{id:"编写-stories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-stories"}},[t._v("#")]),t._v(" 编写 Stories")]),t._v(" "),s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Story 文件以.stories.tsx 结尾， 如存在自定义文档，则以.stories.mdx 结尾。\n每个 story 为一个菜单项，通过 ESModule 的形式导出。")]),t._v(" "),s("p",[t._v("default 导出为页面配置(组件、标题)")]),t._v(" "),s("p",[t._v("export 导出为组件的每种 Props 枚举的样式，可添加多种展示方式。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React from 'react';\nimport { Story, Meta } from '@storybook/react/types-6-0';\n\nimport { Button, ButtonProps } from './Button';\n\nexport default {\n  title: 'Example/Button',\n  component: Button,\n} as Meta;\n\nconst Template: Story<ButtonProps> = (args) => <Button {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {\n  primary: true,\n  label: 'Button',\n};\n\nexport const Secondary = Template.bind({});\nSecondary.args = {\n  label: 'Button',\n};\n\n")])])]),s("h3",{attrs:{id:"组件预览页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件预览页面"}},[t._v("#")]),t._v(" 组件预览页面")]),t._v(" "),s("p",[t._v("首先配置组件默认导出，必填项为"),s("code",[t._v("title")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  export default {\n      title: 'Example/Button',\n      component: Button,\n  } as Meta;\n")])])]),s("ul",[s("li",[t._v("title: 用于组织菜单层次结构，可以通过/创建子目录（如：Example/Component/Button）")]),t._v(" "),s("li",[t._v("component: Story 相关的组件（用于自动生成文档等）")])]),t._v(" "),s("p",[t._v("导出每个组件有两种方式:")]),t._v(" "),s("ul",[s("li",[t._v("可直接导出组件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  export const Menu: React.VFC = (props) => {\n  return (\n    <Menu defaultIndex='0' onSelect={(index) => {action(`clicked ${index} item`)}} >\n    </Menu>\n  )\n}\n")])])]),s("blockquote",[s("p",[t._v("参数增加 props 可出现 Props 控制选项，不加则没有")])]),t._v(" "),s("ul",[s("li",[t._v("使用 Args 方式导出（推荐）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  const Template: Story<ButtonProps> = (args) => <Button {...args} />;\n\n  export const Primary = Template.bind({});\n  Primary.args = {\n     primary: true,\n     label: 'Button',\n  };\n")])])]),s("p",[t._v("使用 Args 导出模式可自动添加 Props 相关控制选项，并且重用 Props 很方便")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" const Secondary = ButtonStory.bind({});\n Secondary.args = {\n    ...Primary.args,\n    primary: false,\n  };\n")])])]),s("h2",{attrs:{id:"自定义组件文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件文档"}},[t._v("#")]),t._v(" 自定义组件文档")]),t._v(" "),s("p",[t._v("Storybook 支持自行编写组件相关文档，文件后缀名为"),s("code",[t._v(".stories.mdx")]),t._v("\nMDX = Markdown + JSX")]),t._v(" "),s("p",[t._v("首先需要先定义菜单名称和相关组件（类似"),s("code",[t._v(".stories.tsx")]),t._v("的默认导出）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import { Meta, Canvas, Story } from '@storybook/addon-docs/blocks';\nimport { Button } from './Button';\n\n<Meta title=\"Documents/Button\" component={Button} />;\n")])])]),s("p",[t._v("接下来可以使用 Markdown 语法和 Canvas、Story 等 JSX 标记编写文档")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const Template = (args) => <Button {...args} />;\n\n# 按钮组件\n\n- 这是一个按钮\n- 好看的按钮\n\n## Primary 按钮\n\n<Story name=\"Primary\" args={{ primary, label: 'Button' }}>\n{Template.bind({})}\n</Story>\n\n## 大与小\n\n<Canvas>\n  <Story name=\"Large\" args={{ size: 'large', label: 'Button' }}>\n    {Template.bind({})}\n  </Story>\n  <Story name=\"Small\" args={{ size: 'small', label: 'Button' }}>\n    {Template.bind({})}\n  </Story>\n</Canvas>\n")])])]),s("ul",[s("li",[s("code",[t._v("Story:")]),t._v(" 组件展示")]),t._v(" "),s("li",[s("code",[t._v("Canvas:")]),t._v(" 包含代码片段展示块")])]),t._v(" "),s("p",[t._v("此段代码生成如下效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"/storybook-custom-doc.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("每个 Story 块生成一个子项，多个子项共用一个文档")])]),t._v(" "),s("h2",{attrs:{id:"组件注释方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件注释方法"}},[t._v("#")]),t._v(" 组件注释方法")]),t._v(" "),s("p",[t._v("组件 Props 注释（用于生成文档的 Props 描述文字）")]),t._v(" "),s("p",[t._v("组件行首注释（用于生成文档的组件描述文字）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" import React from 'react';\n\n export interface ButtonProps {\n  /** 是否为主按钮 */\n  primary?: boolean;\n  /** 按钮背景颜色 */\n  backgroundColor?: string;\n  /** 按钮大小 */\n  size?: 'small' | 'medium' | 'large';\n  /** 按钮文字 */\n  label: string;\n  /** 点击回调函数 */\n  onClick?: () => void;\n}\n\n/** 这是一个按钮 */\nexport const Button: React.FC<ButtonProps> = ({\n  primary = false,\n  size = 'medium',\n  backgroundColor,\n  label,\n  ...props\n}) => {\n  return (\n    <button\n      type=\"button\"\n      className={[\n        'storybook-button',\n        `storybook-button--${size}`,\n        primary ? 'storybook-button--primary' : 'storybook-button--secondary',\n      ].join(' ')}\n      style={{ backgroundColor }}\n      {...props}\n    >\n      {label}\n    </button>\n  );\n};\n")])])]),s("p",[t._v("此段代码生成如下效果（注意红框内的文字）")]),t._v(" "),s("p",[s("img",{attrs:{src:"/story-jsx-doc.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"常用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[t._v("#")]),t._v(" 常用配置")]),t._v(" "),s("p",[t._v("Storybook 配置可分别指定作用范围，分为组件配置、Story 文件配置、全局配置，继承关系如下：")]),t._v(" "),s("ul",[s("li",[t._v("全局配置")])]),t._v(" "),s("p",[s("code",[t._v(".storybook/preview.js")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const parameters = {\n  backgrounds: {\n    default: 'twitter',\n    values: [\n      {\n        name: 'twitter',\n        value: '#00aced',\n      },\n      {\n        name: 'facebook',\n        value: '#3b5998',\n      },\n    ],\n  },\n};\n")])])]),s("ul",[s("li",[t._v("Story 文件配置")])]),t._v(" "),s("p",[s("code",[t._v("Button.stories.js")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  export default {\n  title: 'Button',\n  parameters: {\n    backgrounds: {\n      default: 'twitter',\n      values: [\n        { name: 'twitter', value: '#00aced' },\n        { name: 'facebook', value: '#3b5998' },\n      ],\n    },\n  },\n};\n")])])]),s("ul",[s("li",[t._v("组件配置")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  export const Primary = …\n  Primary.decorators = [(Story) => <div style={{ padding: '3em' }}><Story/></div>]\n")])])]),s("h2",{attrs:{id:"自定义-controls-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-controls-类型"}},[t._v("#")]),t._v(" 自定义 Controls 类型")]),t._v(" "),s("p",[t._v("在 Controls 面板中，Storybook 会自动通过 Props 的类型选择合适的控件，也可以手动指定需要的控件。")]),t._v(" "),s("p",[s("code",[t._v(".stories.tsx")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  export default {\n  title: 'Button',\n  component: Button,\n  argTypes: {\n    backgroundColor: { control: 'color' },\n    loadingState: {\n      control: {\n        type: 'inline-radio',\n        options: ['loading', 'error', 'ready'],\n      },\n    },\n    width: {\n      control: {\n        type: 'range',\n        min: 400,\n        max: 1200,\n        step: 50,\n      },\n    },\n  },\n};\n")])])]),s("p",[s("code",[t._v("argTypes")]),t._v("属性可以指定某个 Props 使用指定的控件。更多"),s("code",[t._v("Control")]),t._v("属性参考文档")]),t._v(" "),s("h2",{attrs:{id:"自定义-props-描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-props-描述"}},[t._v("#")]),t._v(" 自定义 Props 描述")]),t._v(" "),s("p",[t._v("Story 可以覆盖默认的 Props 描述（来自静态代码分析）")]),t._v(" "),s("p",[t._v("还可以添加大段文字，以说明 Props 的用途")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  export default {\n  title: 'Example/Button',\n  component: Button,\n  argTypes: {\n    label: {\n      name: '标签',\n      type: {\n        required: false,\n      },\n      description: 'overwritten description',\n      table: {\n        type: {\n          summary: 'something short',\n          detail: 'something really really long',\n        },\n        defaultValue: {\n          summary: 'default summary',\n          detail: 'default detail',\n        },\n      },\n      control: {\n        type: null,\n      },\n    },\n  },\n} as Meta;\n")])])]),s("h2",{attrs:{id:"插件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件系统"}},[t._v("#")]),t._v(" 插件系统")]),t._v(" "),s("p",[t._v("官方插件列表：https://github.com/storybookjs/storybook/tree/master/addons")]),t._v(" "),s("p",[t._v("添加插件的一般步骤")]),t._v(" "),s("ol",[s("li",[t._v("使用 yarn 或 npm 安装相关依赖")]),t._v(" "),s("li",[t._v("修改"),s("code",[t._v(".storybook/main.js")]),t._v("中的"),s("code",[t._v("addons")]),t._v("字段，添加插件")]),t._v(" "),s("li",[t._v("在"),s("code",[t._v(".storybook/preview.js")]),t._v("中添加相关配置（可选）")])]),t._v(" "),s("h2",{attrs:{id:"快照测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照测试"}},[t._v("#")]),t._v(" 快照测试")]),t._v(" "),s("ol",[s("li",[t._v("安装插件：yarn add --dev @storybook/addon-storyshots react-test-renderer")]),t._v(" "),s("li",[t._v("在 src/stories 中新建文件 snapshoot.test.ts")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import initStoryshots from '@storybook/addon-storyshots';\n\ninitStoryshots();\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("运行 yarn test 即可在 src/stories 中生成"),s("strong",[t._v("snapshots")]),t._v("文件夹，包含 stories 中组件的快照")])]),t._v(" "),s("h2",{attrs:{id:"更多参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多参考"}},[t._v("#")]),t._v(" 更多参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://storybook.js.org/docs/react/get-started/introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);