(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{697:function(e,a,t){"use strict";t.r(a);var n=t(11),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"使用createobjecturl遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用createobjecturl遇到的问题"}},[e._v("#")]),e._v(" 使用createObjectURL遇到的问题")]),e._v(" "),t("h3",{attrs:{id:"在chrome中的表现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在chrome中的表现"}},[e._v("#")]),e._v(" 在chrome中的表现")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65b969abecd04ae08da5d05e0ef78518~tplv-k3u1fbpfcp-watermark.image",alt:""}}),e._v(" "),t("code",[e._v("blob:http://172.28.74.136:8019/c2c5811e-906b-48d1-93a8-edb89c237f54")])]),e._v(" "),t("h3",{attrs:{id:"在ie中的表现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在ie中的表现"}},[e._v("#")]),e._v(" 在IE中的表现")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06e4d26dcaff492a874c75d090e3fc8f~tplv-k3u1fbpfcp-watermark.image",alt:""}}),e._v(" "),t("code",[e._v("blob:9C9B0F3D-3E46-46F3-95AF-524089FB5E0F")])]),e._v(" "),t("h3",{attrs:{id:"第一时间想到的时候-createobjecturl这个属性的兼容问题-在ie中生成的链接不一样-于是决定手动去拼接一个和chrome一样的地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一时间想到的时候-createobjecturl这个属性的兼容问题-在ie中生成的链接不一样-于是决定手动去拼接一个和chrome一样的地址"}},[e._v("#")]),e._v(" 第一时间想到的时候，createObjectURL这个属性的兼容问题，在ie中生成的链接不一样，于是决定手动去拼接一个和chrome一样的地址")]),e._v(" "),t("h4",{attrs:{id:"blob-window-location-origin-url-createobjecturl-blob-split-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blob-window-location-origin-url-createobjecturl-blob-split-1"}},[e._v("#")]),e._v(" "),t("code",[e._v("blob:${window.location.origin}/${URL.createObjectURL(blob).split(':')[1]}")])]),e._v(" "),t("p",[e._v("结果遇到了另外一个坑，window.location.origin在IE中的结果是Undefined。。。换种方式拼接")]),e._v(" "),t("h4",{attrs:{id:"blob-window-location-protocol-window-location-host-url-createobjecturl-blob-split-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blob-window-location-protocol-window-location-host-url-createobjecturl-blob-split-1"}},[e._v("#")]),e._v(" "),t("code",[e._v("blob:${window.location.protocol}//${window.location.host}/${URL.createObjectURL(blob).split(':')[1]}")])]),e._v(" "),t("p",[e._v("难受的是拼好也没用，在IE中，这样的方式也无法下载文件，于是乎，谷歌搜索。")]),e._v(" "),t("h3",{attrs:{id:"解决方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[e._v("#")]),e._v(" 解决方式")]),e._v(" "),t("p",[t("code",[e._v("window.navigator.msSaveOrOpenBlob(blob, filename)")]),e._v(" "),t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7f7e3df74fe47d3923736abfca43d4f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"文件流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件流"}},[e._v("#")]),e._v(" 文件流")]),e._v(" "),t("h3",{attrs:{id:"文件流相关接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件流相关接口"}},[e._v("#")]),e._v(" 文件流相关接口")]),e._v(" "),t("ul",[t("li",[e._v("内置文件流接口："),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Blob",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blob"),t("OutboundLink")],1),e._v("（文件流接口定义）")]),e._v(" "),t("li",[e._v("内置文件流对象 ："),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/File",target:"_blank",rel:"noopener noreferrer"}},[e._v("File"),t("OutboundLink")],1),e._v("（单文件，继承于接口Blob，故可使用Blod的方法级）和 FileList（多文件集合）")]),e._v(" "),t("li",[e._v("内置文件流读取对象 ："),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader",target:"_blank",rel:"noopener noreferrer"}},[e._v("FileReader"),t("OutboundLink")],1),e._v("（单文件读取）")])]),e._v(" "),t("h2",{attrs:{id:"文件流转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件流转换"}},[e._v("#")]),e._v(" 文件流转换")]),e._v(" "),t("h3",{attrs:{id:"_1、file转base64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、file转base64"}},[e._v("#")]),e._v(" 1、file转base64")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * 上传附件转base64\n * @param {File} file 文件流\n */\nexport const fileByBase64 = (file, callback) => {\n  var reader = new FileReader();\n  // 传入一个参数对象即可得到基于该参数对象的文本内容\n  reader.readAsDataURL(file);\n  reader.onload = function (e) {\n    // target.result 该属性表示目标对象的DataURL\n    console.log(e.target.result);\n    callback(e.target.result)\n  };\n}\n")])])]),t("h3",{attrs:{id:"_2、base64转blob"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、base64转blob"}},[e._v("#")]),e._v(" 2、base64转blob")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * base64转Blob\n * @param {*} data \n */\nexport const base64ByBlob = (base64, callback) => {\n  var arr = base64.split(','), mime = arr[0].match(/:(.*?);/)[1],\n    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);\n  while (n--) {\n    u8arr[n] = bstr.charCodeAt(n);\n  }\n  console.log(new Blob([u8arr], { type: mime }))\n  callback(new Blob([u8arr], { type: mime }))\n}\n")])])]),t("h3",{attrs:{id:"_3、blob转url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、blob转url"}},[e._v("#")]),e._v(" 3、blob转url")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var url = window.URL.createObjectURL(blob)\n")])])]),t("h3",{attrs:{id:"_4、使用demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用demo"}},[e._v("#")]),e._v(" 4、使用demo")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>文件流的转换与下载</title>\n  </head>\n  <body>\n    <input type="file" id="input"/>\n  </body>\n  <script>\n    const input = document.querySelector("input");\n    input.addEventListener("input", inputChanged);\n    function inputChanged(e) {\n      console.log(e.target.files[0], "files");\n      fileByBase64(e.target.files[0], () => {});\n      //   fileByBase64(e.target.files[0], base64ByBlob);\n    }\n    const fileByBase64 = (file, callback) => {\n      var reader = new FileReader();\n      // 传入一个参数对象即可得到基于该参数对象的文本内容\n      reader.readAsDataURL(file);\n      reader.onload = function (e) {\n        // target.result 该属性表示目标对象的DataURL\n        console.log(e.target.result, "fileByBase64");\n        callback(e.target.result);\n      };\n    };\n    const base64ByBlob = (base64) => {\n      var arr = base64.split(","),\n        mime = arr[0].match(/:(.*?);/)[1],\n        bstr = atob(arr[1]),\n        n = bstr.length,\n        u8arr = new Uint8Array(n);\n      while (n--) {\n        u8arr[n] = bstr.charCodeAt(n);\n      }\n      const blob = new Blob([u8arr], { type: mime });\n      console.log(blob, "base64ByBlob");\n      // console.log(window.URL.createObjectURL(blob), "URL");\n      //   downloadByFile(blob);\n      //   callback(new Blob([u8arr], { type: mime }));\n    };\n    const downloadByFile = (blob) => {\n      // 创建a标签\n      const alink = document.createElement("a");\n      // 文件名\n      alink.download = "backup.txt";\n      // 开始下载\n      alink.style.display = "none";\n      // for IE\n      if (window.navigator && window.navigator.msSaveOrOpenBlob) {\n        window.navigator.msSaveOrOpenBlob(blob, "backup.txt");\n      } else {\n        // for No-IE\n        alink.href = URL.createObjectURL(blob);\n        document.body.appendChild(alink);\n        // 触发点击a标签事件\n        alink.click();\n        document.body.removeChild(alink);\n      }\n    };\n  <\/script>\n</html>\n\n')])])]),t("h2",{attrs:{id:"文件下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件下载"}},[e._v("#")]),e._v(" 文件下载")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import axios from 'axios';\nimport request from '@/utils/request';\naxios.defaults.timeout = 1000 * 60 * 5;\n\n// 取response中的文件名称\nconst getFileNameFromHeader = headers => {\n  if (!headers) {\n    return '';\n  }\n  const contentDisposition = headers['content-disposition'];\n  if (!contentDisposition) {\n    return '';\n  }\n  const reg = /filename=(.*)/;\n  const result = reg.exec(contentDisposition);\n  return result ? decodeURI(result[1]) : '';\n};\n\nexport default {\n  // 下载文件， 传入文件流\n  downloadByFile (res) {\n    // 处理返回的文件流\n    const content = res.data;\n    const headers = res.headers;\n    // 创建a标签\n    const alink = document.createElement('a');\n    // 文件名\n    alink.download = getFileNameFromHeader(headers);\n    // 开始下载\n    alink.style.display = 'none';\n    const blob = new Blob([content]);\n    // for IE\n    if (window.navigator && window.navigator.msSaveOrOpenBlob) {\n      window.navigator.msSaveOrOpenBlob(blob, getFileNameFromHeader(headers));\n    } else {\n      // for No-IE\n      alink.href = URL.createObjectURL(blob);\n      document.body.appendChild(alink);\n      // 触发点击a标签事件\n      alink.click();\n      document.body.removeChild(alink);\n    }\n  },\n\n  // 下载文件， 传入接口名\n  downloadByUrl (exportParams) {\n    return new Promise(async (resolve, reject) => {\n      const {\n        url,\n        params,\n        fileName,\n        method\n      } = exportParams;\n      const requestParams = {\n        url: url,\n        method: method || 'get',\n        responseType: 'blob'\n      };\n      // 接口请求方式\n      if (method === 'post') {\n        requestParams.data = params;\n      } else {\n        requestParams.params = params;\n      }\n      try {\n        const res = await request(requestParams);\n        // 请求成功\n        resolve(res);\n        // 处理返回的文件流\n        const content = res.data;\n        const headers = res.headers;\n        // 创建a标签\n        const alink = document.createElement('a');\n        // 文件名\n        if (fileName) {\n          alink.download = fileName;\n        } else {\n          alink.download = getFileNameFromHeader(headers);\n        }\n        // 开始下载\n        alink.style.display = 'none';\n        const blob = new Blob([content]);\n        // for IE\n        if (window.navigator && window.navigator.msSaveOrOpenBlob) {\n          window.navigator.msSaveOrOpenBlob(blob, getFileNameFromHeader(headers));\n        } else {\n          // for No-IE\n          alink.href = URL.createObjectURL(blob);\n          document.body.appendChild(alink);\n          // 触发点击a标签事件\n          alink.click();\n          document.body.removeChild(alink);\n        }\n      } catch (err) {\n        reject(err);\n      }\n    });\n  }\n};\n\n\n")])])]),t("h2",{attrs:{id:"大文件上传-与-断点续传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大文件上传-与-断点续传"}},[e._v("#")]),e._v(" 大文件上传 与 断点续传")]),e._v(" "),t("ul",[t("li",[e._v("大文件上传基本都是分片，Blob.slice")]),e._v(" "),t("li",[e._v("断点续传：根据文件内容生成hash作为分片的名称，然后和服务端比对，上传过的不再上传。")])]),e._v(" "),t("p",[e._v("参考这篇文章，讲的很清楚 ："),t("a",{attrs:{href:"https://juejin.im/post/6844904046436843527",target:"_blank",rel:"noopener noreferrer"}},[e._v("字节跳动面试官：请你实现一个大文件上传和断点续传"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/6844903617606975496",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 文件流转换与使用"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000020153597",target:"_blank",rel:"noopener noreferrer"}},[e._v("javascript实现上传文件流file转base64，base64转blob，blob转url访问地址"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000022208272",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端文件操作--上传篇"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);