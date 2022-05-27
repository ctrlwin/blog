(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{523:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型")]),t._v("："),a("span",{staticStyle:{color:"#d63200"}},[t._v("Object | Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("限制")]),t._v("：组件的定义只接受 "),a("code",[t._v("function")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细")]),t._v("：")]),t._v(" "),a("p",[t._v("Vue 实例的数据对象。Vue 会递归地把 data 的 property 转换为 getter/setter，从而让 data 的 property 能够响应数据变化。"),a("strong",[t._v("对象必须是纯粹的对象 (含有零个或多个的 key/value 对)")]),t._v("：浏览器 API 创建的原生对象，原型上的 property 会被忽略。大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象。")])])]),t._v(" "),a("h3",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型")]),t._v("："),a("span",{staticStyle:{color:"#d63200"}},[t._v("Array <string> | Object")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细")]),t._v("：")]),t._v(" "),a("p",[t._v("props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。")]),t._v(" "),a("p",[t._v("你可以基于对象的语法使用以下选项：")]),t._v(" "),a("ul",[a("li",[a("span",{staticStyle:{color:"#d63200"}},[t._v("type")]),t._v("：可以是下列原生构造函数中的一种："),a("span",{staticStyle:{color:"#d63200"}},[t._v("String")]),t._v("、"),a("span",{staticStyle:{color:"#d63200"}},[t._v("Number")]),t._v("、"),a("span",{staticStyle:{color:"#d63200"}},[t._v("Boolean")]),t._v("、"),a("span",{staticStyle:{color:"#d63200"}},[t._v("Array")]),t._v("、"),a("span",{staticStyle:{color:"#d63200"}},[t._v("Object")]),t._v("、"),a("span",{staticStyle:{color:"#d63200"}},[t._v("Date")]),t._v("、"),a("span",{staticStyle:{color:"#d63200"}},[t._v("Function")]),t._v("、"),a("span",{staticStyle:{color:"#d63200"}},[t._v("Symbol")]),t._v("、任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。Prop 类型的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多信息在此"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[a("span",{staticStyle:{color:"#d63200"}},[t._v("default : any")]),t._v("\n为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。")]),t._v(" "),a("li",[a("span",{staticStyle:{color:"#d63200"}},[t._v("require : Boolean")]),t._v("\n定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。")]),t._v(" "),a("li",[a("span",{staticStyle:{color:"#d63200"}},[t._v("validator : Function")]),t._v("\n自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。你可以在"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("查阅更多 prop 验证的相关信息")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("prop验证：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)")]),t._v("\n    propA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多个可能的类型")]),t._v("\n    propB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必填的字符串")]),t._v("\n    propC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      required"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带有默认值的数字")]),t._v("\n    propD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带有默认值的对象")]),t._v("\n    propE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象或数组默认值必须从一个工厂函数获取")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义验证函数")]),t._v("\n    propF"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("validator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个值必须匹配下列字符串中的一个")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'danger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("prop 会在一个组件实例创建"),a("strong",[t._v("之前")]),t._v("进行验证，所以实例的 property (如 "),a("code",[t._v("data")]),t._v("、"),a("code",[t._v("computed")]),t._v(" 等) 在 "),a("code",[t._v("default")]),t._v(" 或 "),a("code",[t._v("validator")]),t._v(" 函数中是不可用的。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考")]),t._v("："),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-props.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Props"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型")]),t._v("："),a("span",{staticStyle:{color:"#d63200"}},[t._v("{ [key: string]: Function | { get: Function, set: Function } }")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细")]),t._v("：")]),t._v(" "),a("p",[t._v("计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。")]),t._v(" "),a("p",[t._v("注意如果你为一个计算属性使用了箭头函数，则 "),a("code",[t._v("this")]),t._v(" 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("computed: {\n  aDouble: vm => vm.a * 2\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("计算属性的结果会被缓存，除非依赖的响应式 property 变化才会重新计算（"),a("span",{staticStyle:{color:"#000000","font-weight":"500"}},[t._v("简单说就是只有computed依赖的变量改变，computed才会更新")]),t._v("）。注意，如果某个依赖 (比如非响应式 property) 在该实例范畴之外，则计算属性是"),a("strong",[t._v("不会")]),t._v("被更新的。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考")]),t._v("："),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/computed.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算属性"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" methods")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型")]),t._v("："),a("span",{staticStyle:{color:"#d63200"}},[t._v("{ [key: string]: Function }")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细")]),t._v("：")]),t._v(" "),a("p",[t._v("methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 "),a("code",[t._v("this")]),t._v(" 自动绑定为 Vue 实例。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("不应该使用箭头函数来定义 method 函数")]),t._v(" (例如 "),a("code",[t._v("plus: () => this.a++")]),t._v(")。理由是箭头函数绑定了父级作用域的上下文，所以 "),a("code",[t._v("this")]),t._v(" 将不会按照期望指向 Vue 实例，"),a("code",[t._v("this.a")]),t._v(" 将是 undefined。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考")]),t._v("："),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件处理器"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型")]),t._v("："),a("span",{staticStyle:{color:"#d63200"}},[t._v("{ [key: string]: string | Function | Object | Array }")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细")]),t._v("：")]),t._v(" "),a("p",[t._v("一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 "),a("code",[t._v("$watch()")]),t._v("，遍历 watch 对象的每一个 property。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("不应该使用箭头函数来定义 watcher 函数")]),t._v(" (例如 "),a("code",[t._v("searchQuery: newValue => this.updateAutocomplete(newValue)")]),t._v(")。理由是箭头函数绑定了父级作用域的上下文，所以 "),a("code",[t._v("this")]),t._v(" 将不会按照期望指向 Vue 实例，"),a("code",[t._v("this.updateAutocomplete")]),t._v(" 将是 undefined。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考")]),t._v("："),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/?#vm-watch",target:"_blank",rel:"noopener noreferrer"}},[t._v("实例方法 / 数据 - vm.$watch"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports}}]);