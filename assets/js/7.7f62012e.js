(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{215:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置详解"}},[t._v("#")]),t._v(" 配置详解")]),t._v(" "),a("p",[t._v("a8k 封装了大多数 webpack 的配置，将常用的优化配置集成，并且针对 react 技术栈项目做了正对性配置，虽然屏蔽的大多数复杂性，但是为了对不同项目提供一些灵活的配置，a8k 也提供了一些简答且必要的配置项。")]),t._v(" "),a("blockquote",[a("p",[t._v("基于 a8k 的项目，在根目录下会有一个 a8k.config.js 的配置文件，用于项目的自定义配置")])]),t._v(" "),a("h2",{attrs:{id:"基本配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置项"}},[t._v("#")]),t._v(" 基本配置项")]),t._v(" "),a("h3",{attrs:{id:"mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[t._v("#")]),t._v(" mode")]),t._v(" "),a("p",[t._v("mode 用于指定项目是多页面还是单页面，支持两个值：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("single")]),t._v(" "),a("td",[t._v("单页面应用，默认继承 react-router 支持路由，切构建的页面都通过动态导入的方式加载页面 js")])]),t._v(" "),a("tr",[a("td",[t._v("multi")]),t._v(" "),a("td",[t._v("多页面应用，每个页面都有自己的入口文件，a8k 会自动抽离公共的代码，在不同的页面间共享")])])])]),t._v(" "),a("h3",{attrs:{id:"dist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dist"}},[t._v("#")]),t._v(" dist")]),t._v(" "),a("p",[t._v("配置构建生产包（即执行"),a("code",[t._v("k build")]),t._v("）的结果输出目录，默认值:"),a("code",[t._v(".a8k/static")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"publicpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publicpath"}},[t._v("#")]),t._v(" publicPath")]),t._v(" "),a("p",[t._v("和 webpack 的 output.publicPath 意义一致，指定在浏览器中所引用的「此输出目录对应的公开 URL」。相对 URL(relative URL) 会被相对于 HTML 页面（或 ")]),a("base"),t._v(" 标签）解析。相对于服务的 URL(Server-relative URL)，相对于协议的 URL(protocol-relative URL) 或绝对 URL(absolute URL) 也可是可能用到的，或者有时必须用到，"),a("p"),t._v(" "),a("p",[t._v("例如：当将资源托管到 CDN 时")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  publicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdn.example.com/assets/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"cachedirectory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cachedirectory"}},[t._v("#")]),t._v(" cacheDirectory")]),t._v(" "),a("p",[t._v("配置构建阶段的缓存目录，默认:"),a("code",[t._v(".a8k/.cache")]),t._v("。")]),t._v(" "),a("p",[t._v("a8k 默认会缓存构建中 js、css、html、eslint 的结果，只有当这些文件发生变化时才会重新构建，否则其中所有的 webpack loader 都将从缓存中获取结果，目的是为了提高构建性能")]),t._v(" "),a("h3",{attrs:{id:"cssmodules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cssmodules"}},[t._v("#")]),t._v(" cssModules")]),t._v(" "),a("p",[t._v("类型"),a("code",[t._v("boolean")]),t._v(" or "),a("code",[t._v("Object")]),t._v("，默认值:false,当设置为 true，将自动启用 css modules 能力\n参考文档"),a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader#modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-loader"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),a("p",[t._v("用于指定 babel 需要处理的额外文件或者需要忽略的文件，这在你调试某些库（需要被编译的代码）时非常用，支持两个配置：")]),t._v(" "),a("p",[a("code",[t._v("include")]),t._v("：需要处理的文件")]),t._v(" "),a("p",[a("code",[t._v("exclude")]),t._v("：不需要处理的文件")]),t._v(" "),a("p",[t._v("include、exclude 的处理规则和 webpack rule conditions 的规则一致，详情见"),a("a",{attrs:{href:"https://webpack.js.org/configuration/module/#rule-conditions",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack rules"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("使用方法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules\\/lodash/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译lodash")]),t._v("\n    exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/.*\\.min\\.js/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不处理压缩文件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("当然你可以直接在项目目录下面使用 babel 官方配置文件，自定义 babel 配置")])]),t._v(" "),a("h3",{attrs:{id:"crossorigin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crossorigin"}},[t._v("#")]),t._v(" crossOrigin")]),t._v(" "),a("p",[t._v("配置通过 script、link 引用的 js、css 资源是否支持跨域。默认"),a("code",[t._v("false")]),t._v(",支持两个值："),a("code",[t._v("true")]),t._v("、"),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("配置为"),a("code",[t._v("true")]),t._v("会在所有的 script 标签上加上"),a("code",[t._v('crossorigin="anonymous"')]),t._v(",这对于那些将静态资源部署到 CDN 上的应用非常有用，可以让错误捕获程序捕获到来自 CDN 的 js 错误堆栈。如果资源跨域了，但是没配置这个，当出现未捕获的错误时你只会得到"),a("code",[t._v("Script Error")]),t._v("错误，这对于处理现网问题非常不利。")]),t._v(" "),a("h3",{attrs:{id:"devserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devserver"}},[t._v("#")]),t._v(" devServer")]),t._v(" "),a("p",[t._v("该顶配置项用于指定开发服务器信息，用于修改 "),a("code",[t._v("webpack-dev-server")]),t._v("插件的配置，通常你只需要修改端口信息即可。具体支持的配置项"),a("a",{attrs:{href:"https://webpack.js.org/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("见文档"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"高级配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级配置项"}},[t._v("#")]),t._v(" 高级配置项")]),t._v(" "),a("h3",{attrs:{id:"retry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retry"}},[t._v("#")]),t._v(" retry")]),t._v(" "),a("p",[t._v("JavaScript、css 加载多域名重试配置,配置项支持："),a("code",[t._v("retryPublicPath")]),t._v(","),a("code",[t._v("exclude")])]),t._v(" "),a("p",[t._v("配置示例:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  retry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    retry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      retryPublicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//fudao.qq.com/pc/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重试的地址前缀")]),t._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\/\\/sqimg\\.qq\\.com/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/pub\\.idqqimg\\.com/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过正则表达式，排除不需要重试的文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"ssrconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssrconfig"}},[t._v("#")]),t._v(" ssrConfig")]),t._v(" "),a("p",[t._v("类型"),a("code",[t._v("boolean")]),t._v(" or "),a("code",[t._v("Object")]),t._v(", 默认值"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[t._v("服务器渲染配置，将支持所有页面，如果需要单独配置部分页面直出，请添加 entry 指定需要直出的页面入口文件")]),t._v(" "),a("p",[a("code",[t._v("entryPath")]),t._v(":服务器渲染代码入口构建存放目录, 默认值："),a("code",[t._v("./.a8k/server/entry")]),t._v(",不建议修改")]),t._v(" "),a("p",[a("code",[t._v("viewPath")]),t._v(":视图代码存放目录（及 html 模板存放目录), 默认值:"),a("code",[t._v("./.a8k/server/view")]),t._v(",不建议修改")]),t._v(" "),a("p",[a("code",[t._v("entry")]),t._v(":如果你不希望所有页面支持服务器渲染，可以选择自定义支持服务器渲染的页面入口文件")]),t._v(" "),a("p",[a("code",[t._v("port")]),t._v(": "),a("code",[t._v("required")]),t._v(" 指定 node 服务启动端口，在开发阶段调试需要代理到该页面")]),t._v(" "),a("p",[t._v("配置示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//省略其他配置")]),t._v("\n  ssrConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置node服务端口")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"ignorepages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignorepages"}},[t._v("#")]),t._v(" ignorePages")]),t._v(" "),a("p",[t._v("正则表达式，配置"),a("code",[t._v("src/pages")]),t._v("目录下面需要排除的文件夹，使用场景是你希望构建不要处理 "),a("code",[t._v("src/pages")]),t._v(" 目录下面的某些目录（及排除这些目录作为页面处理)")]),t._v(" "),a("h3",{attrs:{id:"escheck-检测构建结果是否支持-es5-浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escheck-检测构建结果是否支持-es5-浏览器"}},[t._v("#")]),t._v(" escheck 检测构建结果是否支持 es5 浏览器")]),t._v(" "),a("p",[t._v("类型："),a("code",[t._v("boolean|{exclude:[],ecmaVersion:string}")]),t._v(",")]),t._v(" "),a("p",[t._v("a8k 编译的结果 JavaScript 代码支持 es5 及以上浏览器运行。但默认情况不会对 node_modules 模块进行代码转换，你可能会意外的引用了第三方模块（没有提供 es5 版本)。为了避免这种意外的 bug 出现，我们提供了默认的构建结果的 es5 检测，如果发现结果中存在非 es5 的代码，将直接报错。")]),t._v(" "),a("p",[t._v("但是，部分文件是可以允许使用高于 es5 版本的 JavaScript 代码的，例如：service worker 脚本，因为支持 service worker 的浏览器对很多 es6 的语法是支持的。")]),t._v(" "),a("p",[t._v("因此，我们提供了额外的配置允许你排除部分文件，配置方式如下：")]),t._v(" "),a("p",[t._v("在 a8k 配置文件中添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  escheck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'you-file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//支持glob匹配规则")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"自定义-webpack-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-webpack-配置"}},[t._v("#")]),t._v(" 自定义 webpack 配置")]),t._v(" "),a("p",[t._v("利用了 webpack-chain 实现自定义配置，具体配置项是"),a("code",[t._v("chainWebpack")]),t._v(",该配置项提供一个函数，参数有"),a("code",[t._v("config、options")])]),t._v(" "),a("p",[a("code",[t._v("config")]),t._v(": 是 WebpackChain 实例对象；")]),t._v(" "),a("p",[a("code",[t._v("options")]),t._v(": 中包括了两个重要参数："),a("code",[t._v("type")]),t._v("和"),a("code",[t._v("mode")]),t._v(",其中 type 取值"),a("code",[t._v("server")]),t._v("或"),a("code",[t._v("client")]),t._v("分别标识服务器代码、前端代码,mode 取值"),a("code",[t._v("production")]),t._v("或"),a("code",[t._v("development")]),t._v(",标识是生产模式还是开发模式")]),t._v(" "),a("p",[t._v("配置示例:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//省略其他配置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * @param WebpackChain config webpackChain实例对象\n   * @param {type:string,mode:string} options 包括:type取值:server、client;mode取值:production、development\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加自定义loader")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(scss|css)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loader-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置一个名字，方便标识")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义plugin")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'you-plugin-module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__expression "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("require('you-plugin-module')")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'you-plugin-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("params1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更多配置方法请参考哦"),a("a",{attrs:{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack chain 文档"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"html-模板引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-模板引擎"}},[t._v("#")]),t._v(" HTML 模板引擎")]),t._v(" "),a("p",[t._v("本项目采用 nunjucks 作为 HTML 的模板引擎，具体使用文档参考"),a("a",{attrs:{href:"https://mozilla.github.io/nunjucks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nunjucks 文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);