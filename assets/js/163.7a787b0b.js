(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{584:function(s,a,t){"use strict";t.r(a);var n=t(21),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、docsify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、docsify"}},[s._v("#")]),s._v(" 一、docsify")]),s._v(" "),t("h3",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("全局安装 "),t("code",[s._v("docsify-cli")]),s._v(" 工具，并创建文档项目目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i docsify-cli -g\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" my-docs\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-docs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docsify init ./docs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("成功后会生成一个 "),t("code",[s._v("docs")]),s._v(" 的文件夹，并且里面有三个文件")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("index.html")]),s._v(" 入口文件。后面我们的配置很多都是在这里配置")]),s._v(" "),t("li",[t("code",[s._v("README.md")]),s._v(" 会做为主页内容渲染")]),s._v(" "),t("li",[t("code",[s._v(".nojekyll")]),s._v(" 用于阻止 "),t("code",[s._v("GitHub Pages")]),s._v(" 忽略掉下划线开头的文件")])]),s._v(" "),t("h4",{attrs:{id:"启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[s._v("#")]),s._v(" 启动项目")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docsify serve docs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过运行 "),t("code",[s._v("docsify serve")]),s._v(" 启动一个本地服务器，可以方便地实时预览效果。默认访问地址 "),t("a",{attrs:{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:3000"),t("OutboundLink")],1),s._v(" 。下面的内容实际上是 "),t("code",[s._v("README.md")]),s._v(" 中的内容")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07d8bf3840bf4d9e93eeeadbba3b97f5~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"简单配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单配置"}},[s._v("#")]),s._v(" 简单配置")]),s._v(" "),t("h4",{attrs:{id:"配置侧边栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置侧边栏"}},[s._v("#")]),s._v(" 配置侧边栏")]),s._v(" "),t("p",[s._v("在 index.html 中，新增配置 "),t("code",[s._v("loadSidebar: true")])]),s._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[s._v("window.$docsify = {\n"),t("span",{pre:!0,attrs:{class:"token unchanged"}},[t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: '',\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" repo: '',\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("  loadSidebar: true\n")])]),s._v("}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("在 "),t("code",[s._v("docs")]),s._v(" 中新建一个文件 "),t("code",[s._v("_sidebar.md")]),s._v("，写入")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" JavaScript\n  "),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("闭包")]),s._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[s._v("closure.md")]),s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("原型")]),s._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[s._v("prototype.md")]),s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" CSS\n  "),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("布局")]),s._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[s._v("layout.md")]),s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("同时在 "),t("code",[s._v("docs")]),s._v(" 中新建 "),t("code",[s._v("closure.md")]),s._v(" 、"),t("code",[s._v("prototype.md")]),s._v("和 "),t("code",[s._v("layout.md")]),s._v("三个 Markdown 文件")]),s._v(" "),t("p",[s._v("可以在 "),t("code",[s._v("closure.md")]),s._v(" 中写入如下，查看效果")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" 介绍闭包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("##")]),s._v(" 什么是闭包")]),s._v("\n哈哈哈哈\n\n"),t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("##")]),s._v(" 闭包的作用是什么")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8514d447ebfc41049175cdea3d432203~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"}})]),s._v(" "),t("h4",{attrs:{id:"自动生成目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动生成目录"}},[s._v("#")]),s._v(" 自动生成目录")]),s._v(" "),t("p",[s._v("可以根据标题生成目录，这个在文章很长的时候很有用，直接演示配置和效果")]),s._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[s._v("window.$docsify = {\n"),t("span",{pre:!0,attrs:{class:"token unchanged"}},[t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: '',\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" repo: '',\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" loadSidebar: true,\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" subMaxLevel: 2\n")])]),s._v("}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4876514f881e4c1cbe61cc5fd036bf2e~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),t("p",[t("code",[s._v("Docsify")]),s._v(" 还提供了 "),t("a",{attrs:{href:"https://docsify.js.org/#/zh-cn/plugins?id=gitalk",target:"_blank",rel:"noopener noreferrer"}},[s._v("Gitalk"),t("OutboundLink")],1),s._v(" 评论插件等。更多请看"),t("a",{attrs:{href:"https://docsify.js.org/#/zh-cn/plugins",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"二、vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、vuepress"}},[s._v("#")]),s._v(" 二、VuePress")]),s._v(" "),t("h3",{attrs:{id:"准备工作-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作-2"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("blockquote",[t("p",[s._v("注意 VuePress基于node 8.0+")])]),s._v(" "),t("p",[s._v("官方推荐使用yarn代替npm，使用npm后续会出错。")]),s._v(" "),t("h4",{attrs:{id:"安装yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装yarn"}},[s._v("#")]),s._v(" 安装yarn")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看版本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"初始化项目-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目-2"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),t("p",[s._v("创建一个新目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-docs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入目录")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd vuepress-docs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("初始化")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"启动项目-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动项目-2"}},[s._v("#")]),s._v(" 启动项目")]),s._v(" "),t("p",[t("strong",[s._v("本地安装VuePress")])]),s._v(" "),t("p",[s._v("VuePress 可以不用全局安装。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("创建你的第一篇文档")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("**在"),t("code",[s._v("package.json")]),s._v("**中添加一些"),t("code",[s._v("scripts")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("在本地启动服务器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过"),t("code",[s._v("yarn docs:dev")]),s._v("启动一个本地服务器，方便预览效果。默认访问地址是 "),t("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"简单配置-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单配置-2"}},[s._v("#")]),s._v(" 简单配置")]),s._v(" "),t("p",[s._v("在docs下新建一个"),t("code",[s._v(".vuepress")]),s._v("目录，所有VuePress相关的文件都会放在这里。最后目录结构可能如下：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("在"),t("code",[s._v(".vuepress/config.js")]),s._v("中添加配置：")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我的文档'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置网站标题")]),s._v("\n    description"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a document'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 描述")]),s._v("\n    base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/v1/web-frontend/learn/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 基础路径")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认主题配置")]),s._v("\n    themeConfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        logo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./public/001.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        smoothScroll"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用滚动")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导航栏配置")]),s._v("\n        nav"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'首页'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                link"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端相关知识'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                link"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/study/html'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'个人文章'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                items"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'掘金'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        link"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://juejin.cn/user/3113457361639054'")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏配置")]),s._v("\n        sidebar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/study/html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根目录创建 .md文件")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/study/css"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/study/js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏标题层级")]),s._v("\n        sidebarDepth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("h3",{attrs:{id:"部署到github-pages或者gitee-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署到github-pages或者gitee-pages"}},[s._v("#")]),s._v(" 部署到github pages或者gitee pages")]),s._v(" "),t("h4",{attrs:{id:"新建仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库"}},[s._v("#")]),s._v(" 新建仓库")]),s._v(" "),t("p",[s._v("不需要添加README文件。注意！仓库名要与.vuepress/config.js中的相同。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/blog/images/063.png",alt:"img"}}),t("img",{attrs:{src:"/blog/images/064.png",alt:"img"}})]),s._v(" "),t("h4",{attrs:{id:"打包文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包文件"}},[s._v("#")]),s._v(" 打包文件")]),s._v(" "),t("p",[s._v("在项目中运行下面代码")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将打包后的文件上传到仓库中")]),s._v(" "),t("p",[s._v("cd到dist文件夹中")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'init'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -M main\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin 仓库地址\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin main\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"配置github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置github-pages"}},[s._v("#")]),s._v(" 配置github pages")]),s._v(" "),t("p",[s._v("找到项目中的settings")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73a93a0972934ad0957cb377521ac439~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"}})]),s._v(" "),t("p",[s._v("向下拉，找到pages，选择主分支和根文件夹，因为我们上传的代码index.html在根文件夹。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/blog/images/065.png",alt:"img"}})]),s._v(" "),t("p",[s._v("最后访问https://ctrlwin.github.io/仓库名/，就可以看到我们的网站了。")]),s._v(" "),t("h3",{attrs:{id:"插件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件-2"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),t("p",[t("code",[s._v("vuepress")]),s._v("官方提供了丰富的插件，如果需要添加插件可以参考"),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"与docsify的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与docsify的区别"}},[s._v("#")]),s._v(" 与docsify的区别")]),s._v(" "),t("p",[s._v("VuePress 的话，具有以下的特点")]),s._v(" "),t("ul",[t("li",[s._v("灵活性更高，自己自定义组件，直接在 Markdown 中使用组件")]),s._v(" "),t("li",[s._v("性能 vuepress > docsify。docsify 是运行时解析，vuepress 是预先渲染 HTML")]),s._v(" "),t("li",[s._v("更好的 SEO")]),s._v(" "),t("li",[s._v("但是配置上，docsify 更加简单一些")])])])}),[],!1,null,null,null);a.default=e.exports}}]);