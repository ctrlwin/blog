(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{502:function(v,_,e){"use strict";e.r(_);var t=e(21),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"attrs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attrs"}},[v._v("#")]),v._v(" $attrs")]),v._v(" "),e("h3",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),e("p",[e("strong",[v._v("官方解释：")])]),v._v(" "),e("p",[v._v("包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 ("),e("code",[v._v("class")]),v._v(" 和 "),e("code",[v._v("style")]),v._v(" 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ("),e("code",[v._v("class")]),v._v(" 和 "),e("code",[v._v("style")]),v._v(" 除外)，并且可以通过 "),e("code",[v._v('v-bind="$attrs"')]),v._v(" 传入内部组件——在创建高级别的组件时非常有用。")]),v._v(" "),e("p",[e("strong",[v._v("简单来说：")])]),v._v(" "),e("p",[v._v("包含了所有父组件在子组件上设置的属性（除了"),e("code",[v._v("prop")]),v._v("传递的属性、"),e("code",[v._v("class")]),v._v(" 和 "),e("code",[v._v("style")]),v._v(" ）。")]),v._v(" "),e("h3",{attrs:{id:"图解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图解"}},[v._v("#")]),v._v(" 图解")]),v._v(" "),e("p",[e("strong",[v._v("例一：")])]),v._v(" "),e("p",[v._v("下图中，在"),e("code",[v._v("parent.vue")]),v._v("中给子组件"),e("code",[v._v("child.vue")]),v._v("设置了"),e("code",[v._v("name")]),v._v("、"),e("code",[v._v("age")]),v._v("、"),e("code",[v._v("gender")]),v._v("三个属性。因为子组件"),e("code",[v._v("child.vue")]),v._v("通过"),e("code",[v._v("props")]),v._v("声明了"),e("code",[v._v("name")]),v._v("属性，所以"),e("code",[v._v("this.$attrs")]),v._v("最后输出"),e("code",[v._v('{ age: "20", gender: "man" }')]),v._v("。")]),v._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/029.png",alt:"img"}})]),v._v(" "),e("p",[e("strong",[v._v("例二：")])]),v._v(" "),e("p",[v._v("另外可以在"),e("code",[v._v("grandson.vue")]),v._v(" 上通过 "),e("code",[v._v('v-bind="$attrs"')]),v._v("， 将属性继续向下传递，让 "),e("code",[v._v("grandson.vue")]),v._v("也能访问到父组件的属性，这在传递多个属性时会显得很便捷，而不用一条条的进行绑定。")]),v._v(" "),e("p",[v._v("如果想要添加其他属性，可继续绑定属性。但要注意的是，继续绑定的属性和"),e("code",[v._v("$attrs")]),v._v("中的属性有重复时，继续绑定的属性优先级会更高。")]),v._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/030.png",alt:"img"}})]),v._v(" "),e("h2",{attrs:{id:"listeners"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[v._v("#")]),v._v(" $listeners")]),v._v(" "),e("h3",{attrs:{id:"介绍-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍-2"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),e("p",[e("strong",[v._v("官方解释：")])]),v._v(" "),e("p",[v._v("包含了父作用域中的 (不含 "),e("code",[v._v(".native")]),v._v(" 修饰器的) "),e("code",[v._v("v-on")]),v._v(" 事件监听器。它可以通过 "),e("code",[v._v('v-on="$listeners"')]),v._v(" 传入内部组件——在创建更高层次的组件时非常有用。")]),v._v(" "),e("p",[e("strong",[v._v("我的理解：")])]),v._v(" "),e("p",[v._v("接收除了带有.native事件修饰符的所有事件监听器")]),v._v(" "),e("h3",{attrs:{id:"图解-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图解-2"}},[v._v("#")]),v._v(" 图解")]),v._v(" "),e("p",[e("strong",[v._v("例一：")])]),v._v(" "),e("p",[e("code",[v._v("parent.vue")]),v._v("中对"),e("code",[v._v("child.vue")]),v._v("绑定了两个事件，带有"),e("code",[v._v(".native")]),v._v("的"),e("code",[v._v("click")]),v._v("事件和一个自定义事件，所以在 "),e("code",[v._v("child.vue")]),v._v(" 中，输出"),e("code",[v._v("$listeners")]),v._v("的结果为：")]),v._v(" "),e("p",[e("code",[v._v("{ customEvent: fn }")])]),v._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/031.png",alt:"img"}})]),v._v(" "),e("p",[e("strong",[v._v("例二：")])]),v._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/032.png",alt:"img"}})]),v._v(" "),e("p",[v._v("同 "),e("code",[v._v("$attrs")]),v._v(" 属性一样，可以通过"),e("code",[v._v('v-on="$listeners"')]),v._v("，将事件监听器继续向下传递，让"),e("code",[v._v("grandson.vue")]),v._v(" 访问到事件，且可以使用"),e("code",[v._v("$emit")]),v._v(" 触发 "),e("code",[v._v("parent.vue")]),v._v("的函数。")]),v._v(" "),e("p",[v._v("如果想要添加其他事件监听器，可继续绑定事件。但要注意的是，继续绑定的事件和 "),e("code",[v._v("$listeners")]),v._v("中的事件有重复时，不会被覆盖。当 "),e("code",[v._v("grandson.vue")]),v._v(" 触发 "),e("code",[v._v("customEvent")]),v._v(" 时，"),e("code",[v._v("child.vue")]),v._v(" 和 "),e("code",[v._v("parent.vue")]),v._v("的事件都会被触发，触发顺序类似于冒泡，先到 "),e("code",[v._v("child.vue")]),v._v(" 再到 "),e("code",[v._v("parent.vue")]),v._v("。")])])}),[],!1,null,null,null);_.default=s.exports}}]);