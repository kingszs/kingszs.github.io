(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{707:function(t,s,a){"use strict";a.r(s);var r=a(11),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器同源策略及跨域问题的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器同源策略及跨域问题的解决方案"}},[t._v("#")]),t._v(" 浏览器同源策略及跨域问题的解决方案")]),t._v(" "),a("p",[t._v("面试老问这个问题，但是实际开发中却很少遇到这样。开发中有"),a("code",[t._v("webpack-dev-server")]),t._v("搞定，上线有服务端的大佬帮忙配置好，就算让我前端去搞定我就只会proxy去解决，后端暂时接触的比较少，会使用"),a("code",[t._v("cors")]),t._v("中间件,别说JSONP是啥玩意，我基本没怎么用过。")]),t._v(" "),a("p",[t._v("参考链接：https://segmentfault.com/a/1190000015597029")]),t._v(" "),a("h2",{attrs:{id:"什么是浏览器同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是浏览器同源策略"}},[t._v("#")]),t._v(" 什么是浏览器同源策略")]),t._v(" "),a("p",[t._v("同源策略(Same origin policy)是一种约定，浏览器最核定的基本安全功能，web是构建在同源策略之上。")]),t._v(" "),a("p",[t._v("同源策略：只允许来自同一站点的资源， 其域名、协议、端口必须相同")]),t._v(" "),a("h3",{attrs:{id:"同源策略又分为以下两种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略又分为以下两种"}},[t._v("#")]),t._v(" 同源策略又分为以下两种：")]),t._v(" "),a("h3",{attrs:{id:"_1-dom同源策略-禁止对不同的dom进行操作。这里主要场景就是iframe跨域的情况-不同域名的iframe是限制互相访问的-iframe内嵌框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-dom同源策略-禁止对不同的dom进行操作。这里主要场景就是iframe跨域的情况-不同域名的iframe是限制互相访问的-iframe内嵌框架"}},[t._v("#")]),t._v(" 1.DOM同源策略：禁止对不同的DOM进行操作。这里主要场景就是"),a("code",[t._v("iframe")]),t._v("跨域的情况，不同域名的"),a("code",[t._v("iframe")]),t._v("是限制互相访问的  ("),a("code",[t._v("iframe")]),t._v("内嵌框架)")]),t._v(" "),a("h3",{attrs:{id:"_2-xmlhttprequest同源策略-禁止使用xhr对象向不同源的服务器地址发起http请求。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-xmlhttprequest同源策略-禁止使用xhr对象向不同源的服务器地址发起http请求。"}},[t._v("#")]),t._v(" 2.XMLHttpRequest同源策略：禁止使用XHR对象向不同源的服务器地址发起HTTP请求。")]),t._v(" "),a("p",[t._v("后端：https://my-blogs-kittors.vercel.app/")]),t._v(" "),a("p",[t._v("前端：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("URL")]),t._v(" "),a("th",[t._v("结果")]),t._v(" "),a("th",[t._v("原因")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("https://my-blogs-kittors.vercel.app/")]),t._v(" "),a("td",[t._v("成功")]),t._v(" "),a("td",[t._v("域名、协议、端口相同")])]),t._v(" "),a("tr",[a("td",[t._v("http://my-blogs-kittors.vercel.app/")]),t._v(" "),a("td",[t._v("失败")]),t._v(" "),a("td",[t._v("与服务器的协议不同")])]),t._v(" "),a("tr",[a("td",[t._v("https://my-blogs-kittors.vercel.app:8080/")]),t._v(" "),a("td",[t._v("失败")]),t._v(" "),a("td",[t._v("端口不同")])]),t._v(" "),a("tr",[a("td",[t._v("https://my-blogs-kittors.vercel.com")]),t._v(" "),a("td",[t._v("失败")]),t._v(" "),a("td",[t._v("域名不同")])])])]),t._v(" "),a("h2",{attrs:{id:"为啥要有跨域的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥要有跨域的限制"}},[t._v("#")]),t._v(" 为啥要有跨域的限制：")]),t._v(" "),a("p",[t._v("主要是为了用户的上网安全")]),t._v(" "),a("h5",{attrs:{id:"如果没有dom同源策略-也就是说不同域的iframe之间可以相互访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果没有dom同源策略-也就是说不同域的iframe之间可以相互访问"}},[t._v("#")]),t._v(" 如果没有DOM同源策略，也就是说不同域的"),a("code",[t._v("iframe")]),t._v("之间可以相互访问：")]),t._v(" "),a("h6",{attrs:{id:"_1-做个假网站-里面使用iframe嵌套-一个银行http-mybank-com。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-做个假网站-里面使用iframe嵌套-一个银行http-mybank-com。"}},[t._v("#")]),t._v(" 1.做个假网站，里面使用"),a("code",[t._v("iframe")]),t._v("嵌套 一个银行http://mybank.com。")]),t._v(" "),a("h6",{attrs:{id:"_2-把iframe宽高啥的调整到页面全部-这样用户进行除了域名-别的部分和银行的网站没有差别。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-把iframe宽高啥的调整到页面全部-这样用户进行除了域名-别的部分和银行的网站没有差别。"}},[t._v("#")]),t._v(" 2.把"),a("code",[t._v("iframe")]),t._v("宽高啥的调整到页面全部，这样用户进行除了域名，别的部分和银行的网站没有差别。")]),t._v(" "),a("h6",{attrs:{id:"_3-这时如果用户输入账号密码-我们的主网站可以跨域访问到http-mybank-com的dom节点-就可以拿到用户的密码和账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-这时如果用户输入账号密码-我们的主网站可以跨域访问到http-mybank-com的dom节点-就可以拿到用户的密码和账户"}},[t._v("#")]),t._v(" 3.这时如果用户输入账号密码，我们的主网站可以跨域访问到http://mybank.com的"),a("code",[t._v("dom")]),t._v("节点，就可以拿到用户的密码和账户")]),t._v(" "),a("h5",{attrs:{id:"如果xhrhttprequest同源策略-那么黑客可以进行csrf-跨域请求伪造-cross-site-request-forgery-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果xhrhttprequest同源策略-那么黑客可以进行csrf-跨域请求伪造-cross-site-request-forgery-攻击"}},[t._v("#")]),t._v(" 如果"),a("code",[t._v("XHRHttpRequest")]),t._v("同源策略，那么黑客可以进行CSRF（跨域请求伪造 Cross-site request forgery）攻击：")]),t._v(" "),a("h6",{attrs:{id:"_1-用户登录了自己的银行网页http-mybank-com-http-mybank-com向用户的cookie中添加用户标识。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户登录了自己的银行网页http-mybank-com-http-mybank-com向用户的cookie中添加用户标识。"}},[t._v("#")]),t._v(" 1.用户登录了自己的银行网页http://mybank.com，http://mybank.com向用户的cookie中添加用户标识。")]),t._v(" "),a("h6",{attrs:{id:"_2-用户浏览了恶意页面http-evil-com-执行页面中的恶意ajax请求代码。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-用户浏览了恶意页面http-evil-com-执行页面中的恶意ajax请求代码。"}},[t._v("#")]),t._v(" 2.用户浏览了恶意页面http://evil.com ，执行页面中的恶意AJAX请求代码。")]),t._v(" "),a("h6",{attrs:{id:"_3-http-evil-com向http-mybank-com-发起ajax-http请求-请求默认把http-mybank-com-对应cookie也同时发送过去"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-evil-com向http-mybank-com-发起ajax-http请求-请求默认把http-mybank-com-对应cookie也同时发送过去"}},[t._v("#")]),t._v(" 3.http://evil,.com向http://mybank.com 发起AJAX HTTP请求，请求默认把http://mybank.com 对应cookie也同时发送过去")]),t._v(" "),a("h6",{attrs:{id:"_4-银行页面可以从发送的cookie中提取用户标识-验证用户无误-response中返回数据-此时数据就泄露了。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-银行页面可以从发送的cookie中提取用户标识-验证用户无误-response中返回数据-此时数据就泄露了。"}},[t._v("#")]),t._v(" 4.银行页面可以从发送的cookie中提取用户标识，验证用户无误，response中返回数据，此时数据就泄露了。")]),t._v(" "),a("h6",{attrs:{id:"_5-而且由于ajax在后台执行-用户无法感知这一过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-而且由于ajax在后台执行-用户无法感知这一过程"}},[t._v("#")]),t._v(" 5.而且由于Ajax在后台执行，用户无法感知这一过程")]),t._v(" "),a("p",[t._v("因此，就有了浏览器同源策略  我们才可以安全上网")]),t._v(" "),a("h2",{attrs:{id:"如何解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决跨域问题"}},[t._v("#")]),t._v(" 如何解决跨域问题")]),t._v(" "),a("h3",{attrs:{id:"cors中间件的使用-cors跨域资源共享-可以接触到服务器的时候"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors中间件的使用-cors跨域资源共享-可以接触到服务器的时候"}},[t._v("#")]),t._v(" CORS中间件的使用（CORS跨域资源共享 ）  可以接触到服务器的时候")]),t._v(" "),a("p",[t._v("CORS是一种W3C标准，全称是”跨域资源共享“（Cross-origin resource sharing）")]),t._v(" "),a("blockquote",[a("p",[t._v("这里引入上面链接的文章说明了一些简单请求和非简单请求，")]),t._v(" "),a("p",[t._v("浏览器将CORS请求分为两大类：简单请求(simple request) 和非简单请求(not-so-simple request)。")])]),t._v(" "),a("p",[t._v("只要同时满足以下两个条件，就属于简单请求。")]),t._v(" "),a("p",[t._v("(1)请求方法试一下的三种方法之一:")]),t._v(" "),a("ul",[a("li",[t._v("HEAD")]),t._v(" "),a("li",[t._v("GET")]),t._v(" "),a("li",[t._v("POST")])]),t._v(" "),a("p",[t._v("(2)HTTP的头信息不能超出以下几种字段")]),t._v(" "),a("ul",[a("li",[t._v("Accept")]),t._v(" "),a("li",[t._v("Accept-Language")]),t._v(" "),a("li",[t._v("Content-Language")]),t._v(" "),a("li",[t._v("Last-Event-ID")]),t._v(" "),a("li",[t._v("Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain")])]),t._v(" "),a("p",[t._v("1.简单请求")]),t._v(" "),a("p",[t._v("后端：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理成功失败返回格式的工具")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("successBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../utli'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CrossDomain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *时cookie不会在http请求中带上")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tokenId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("successBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CrossDomain\n\n")])])]),a("h5",{attrs:{id:"express服务器的解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#express服务器的解决方法"}},[t._v("#")]),t._v(" express服务器的解决方法：")]),t._v(" "),a("p",[t._v("这边用的Node.js的express组件的"),a("code",[t._v("cors")]),t._v("中间件实现")]),t._v(" "),a("p",[t._v("代码配置如下:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载Express模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"express"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载CORS模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cors "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cors"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用CORS中间件 解决跨域的问题")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("origin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8085'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"nginx服务器的解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务器的解决方法"}},[t._v("#")]),t._v(" Nginx服务器的解决方法：")]),t._v(" "),a("h3",{attrs:{id:"proxy-代理服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-代理服务器"}},[t._v("#")]),t._v(" proxy 代理服务器")]),t._v(" "),a("h3",{attrs:{id:"jsonp跨域-只支持get请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp跨域-只支持get请求"}},[t._v("#")]),t._v(" JSONP跨域（只支持GET请求）")]),t._v(" "),a("h3",{attrs:{id:"document-domain跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-domain跨域"}},[t._v("#")]),t._v(" "),a("code",[t._v("document.domain")]),t._v("跨域")]),t._v(" "),a("h3",{attrs:{id:"window-name跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-name跨域"}},[t._v("#")]),t._v(" "),a("code",[t._v("window.name跨域")])]),t._v(" "),a("h3",{attrs:{id:"location-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-hash"}},[t._v("#")]),t._v(" "),a("code",[t._v("location.hash")])]),t._v(" "),a("h3",{attrs:{id:"postmessage跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postmessage跨域"}},[t._v("#")]),t._v(" "),a("code",[t._v("postMessage跨域")])])])}),[],!1,null,null,null);s.default=e.exports}}]);