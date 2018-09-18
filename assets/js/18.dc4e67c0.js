(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{173:function(t,s,a){"use strict";a.r(s);var e={props:["target"]},n=a(3),r=Object(n.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("年初在 V2EX 看到很多人发帖问前端如何入门，我姑且来分享一下我的经验。")]),t._v(" "),a("p",[t._v("或许你不知道我是谁，不过如果你对前端有兴趣，都可以联系我帮你 Review 代码、提供改进建议，这有我的 "),a("a",{attrs:{href:"https://github.com/egoist",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v(" 地址。")]),t._v(" "),a("p",[t._v("我假设阅读者只了解过简单的 HTML/CSS。")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("CSS 是层叠样式表（Cascading Style Sheets）的缩写，它是用来定义你的 HTML 的展现形式的一种语言。比如让你的 HTML 里的文字显示不同字体，一个元素显示不同的高度。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("假设你有两个网页，它们共用一个导航栏（header），然后只有主体（content）部分显示不同的内容，在已有知识背景下你只能做两个网页，把导航栏的代码复制两次。")]),t._v(" "),a("p",[t._v("于是有了模板引擎，比如 "),a("a",{attrs:{href:"https://github.com/pugjs/pug",target:"_blank",rel:"noopener noreferrer"}},[t._v("pug"),a("OutboundLink")],1),t._v("，他可以让你复用重复的模板，减少代码量，提高可维护性。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("看下面这段代码:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("这是有了 CSS 处理器之后的代码:")]),t._v(" "),t._m(10),a("p",[t._v("嵌套的风格让作用域更清晰，你同时可以尽可能地只用标准的 CSS 属性然后让 CSS 处理器帮你兼容其它浏览器。推荐使用 "),a("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostCSS"),a("OutboundLink")],1),t._v("，它本身并不改变你的 CSS 代码，但它把你的代码抽象成一个 JavaScript 对象让你能够通过插件来随心所欲地进行操作，比如实现嵌套风格以及自动加 "),a("code",[t._v("-moz")]),t._v(" "),a("code",[t._v("-webkit")]),t._v(" 这些前缀。你可以自己写插件同时它已经有大量"),a("a",{attrs:{href:"https://github.com/postcss/postcss/blob/master/docs/plugins.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("现成的插件"),a("OutboundLink")],1),t._v("供你使用。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("现在你知道了 HTML/CSS 在一起使用的时候能干什么，也知道了用模板引擎、CSS 处理器可以让你更好地写 HTML/CSS。要记住，「更好」也许只是在代码量增大的情况下更明显。")]),t._v(" "),a("p",[t._v("那么这些模板引擎和 CSS 处理器是怎么实现的？很多都是用的 JavaScript。")]),t._v(" "),a("p",[t._v("推荐阅读: "),a("a",{attrs:{href:"http://learn.shayhowe.com/html-css/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn to Code HTML & CSS"),a("OutboundLink")],1),t._v(" 正如其松散的特性一样，你需要多使用才能更好地掌握用法。")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("JavaScript 是一门真正的语言，它简单且强大。（以下简称 JS）")]),t._v(" "),a("p",[t._v("正如 HTML/CSS 是用于网页的样式呈现，JS （在过去）则是用于网页的交互操作上，比如用户点击了一个按钮然后弹出一个框，这些需要 JS 完成。")]),t._v(" "),a("p",[t._v("JS 本身并不具有「监听用户点击」这一功能，在浏览器上，现代浏览器都内置了网页 DOM API，它提供了一套 JS 接口，让你可以用 JS 调用来实现相应功能，而这些功能本身是基于更低级的 C/C++ 语言实现的。")]),t._v(" "),a("p",[t._v("因此，一名及格的前端需要掌握 JS 的基础，比如变量、数组、函数这些几乎所有语言都有的特性，然后就是 DOM API，缺了这个实现网页交互就是纸上谈兵。")]),t._v(" "),a("p",[t._v("推荐阅读: "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Web API"),a("OutboundLink")],1),t._v(" 非常全，需要更渐进的指南建议 Google。")]),t._v(" "),a("p",[t._v("至于学习 JS 这门语言，推荐三本众所周知的，你并不需要全部都看，挑一本或两本尽量搞清楚就行了:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/10549733/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 权威指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/10546125/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 高级程序设计"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://book.douban.com/subject/3590768/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 语言精粹"),a("OutboundLink")],1)])]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("刚才说过，过去的 JS 就是 JS 本身加上浏览器的 DOM API，于是就有人想到了：能不能把浏览器 DOM API 换成用户操作系统的 API？这样 JS 看起来就更像一门「真正的语言」，即可以在用户本地环境而不只是在浏览器中运行。")]),t._v(" "),a("p",[t._v("幸好，谷歌浏览器（Chrome）使用的 JavaScript 运行环境（v8）发展到近几年已经能非常快地将 JS 代码转为机器码，于是 Node.js 的先驱们就成立了这个组织，基于 Chrome v8 引擎实现了一个跨平台 JavaScript 运行环境 —— 即现在非常流行的 Node.js。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("这样的感觉是不是很好? JavaScript 开发者的工具也能用 JavaScript 开发了！这才是副标题里描述的「easy and powerful」的前提。")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("大同小异，如果你在之前知道了如何学习 JavaScript。无非是 JS 本身加上 Node.js 提供的 API 而已。你可以直接打开 Node.js 官网查看其 API。")]),t._v(" "),a("p",[t._v("Node.js 只是一个运行环境，类似于 Java 的 JVM，最重要的还是 JavaScript 本身。")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("很大的可能你现在都是在用 ES5 标准的 JavaScript 语法，而 ES6 则是 TC39(负责制定 JavaScript 语言标准的机构) 在 2015 年新推出的语言标准。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("说得差不多了，不过你可能奇怪为什么不介绍如何学习一些 JS 框架呢？比如 jQuery、Angular、React、Vue 这些。")]),t._v(" "),a("p",[t._v("OK，下期就是这些框架的介绍，同时以后会介绍一些构建工具和其它相关内容。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("HTML")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("HTML 没有了 CSS 就什么都不是，它相当于给网页各个区域命名，然后让你可以进行更多的操作。比如头部导航栏，你经常会给它起个名字叫 "),s("code",[this._v("header")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("CSS")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"html-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-css","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("HTML+CSS")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("HTML 和 CSS 都是语法非常"),s("strong",[this._v("松散")]),this._v("的语言，这样的导致了它们入门非常简单，然而一旦代码量变大维护就会很困难。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模板引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板引擎","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板引擎")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"css-处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 处理器")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".post")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 14px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("-webkit-box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 1px #ccc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("-moz-box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 1px #ccc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 1px #ccc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(".post .post-content")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(".post .post-content .post-date")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #999"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你会发现上面的 "),s("code",[this._v("box-shadow")]),this._v(" 写了三次，以便支持不同内核浏览器下的 "),s("code",[this._v("box-shadow")]),this._v(" 这个属性。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("还有随着代码量增大像 "),s("code",[this._v(".post .post-content .post-date")]),this._v(" 这样长的定义会越来越长。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".post")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 14px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 1px #ccc"),a("span",{attrs:{class:"token selector"}},[t._v(";\n\t.content")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token property"}},[t._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{attrs:{class:"token selector"}},[t._v(";\n\t\t.date")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #999"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("要记住的是，它只是将你"),s("strong",[this._v("自定义的 CSS 风格")]),this._v("转换成符合浏览器标准的 CSS，至于为什么？标准的 CSS 不够好用呗，比如刚才遇到的问题。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"html-css-小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-css-小结","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("HTML+CSS 小结")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("JavaScript")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("Node.js")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何学习-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何学习-node-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何学习 Node.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("ES6")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("为什么我要学新的 ES6 标准?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("你不必。因为 ES6 及以后的任何一个新的 JS 标准都是向后兼容的，也就是说任何你现在写的代码也是符合未来版本的 JS 的标准的。")]),this._v(" "),s("li",[this._v("为什么不？试试又不会怀孕，而且你会有眼前一亮的感觉。任何语言都是在进化的，特别是前端发展那么快。")])])}],!1,null,null,null);s.default=r.exports}}]);