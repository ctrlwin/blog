(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{471:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" ?.")]),s._v(" "),a("p",[s._v("可选链操作符（?.）允许读取位于连接对象链深处的属性值,而不必明确验证链中的每个引用是否有效。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" nestedProp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("first "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" nestedProp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("js会在尝试访问"),a("code",[s._v("obj.first.second")]),s._v("之前隐式的检查并确定"),a("code",[s._v("obj.first")]),s._v("既不是"),a("code",[s._v("null")]),s._v("也不是"),a("code",[s._v("undefined")]),s._v("。如果"),a("code",[s._v("obj.first")]),s._v("是"),a("code",[s._v("null")]),s._v("或者"),a("code",[s._v("undefined")]),s._v(",表达式将会短路计算直接返回"),a("code",[s._v("undefined")])])]),s._v(" "),a("h2",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")]),s._v(" ??")]),s._v(" "),a("p",[s._v("空值合并操作符,可以在使用可选链时设置一个默认值")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" customer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Carl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  details"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" customerCity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" customer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("city "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"暗之城"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("customerCity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// “暗之城”")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("prop\nobj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\narr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nfunc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);