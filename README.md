## 📦 组件设计,  json数据构建

```bash
# 编译出 templateJsonFile/template**.json
$ npm run build
```

## 编辑 库结构

```
# 源文件
-- src/templates   webtailwind 模板、 rntailwind 模板、 rnstyle 模板
-- src/reactnative rn lib库结构设计
-- src/webpro web lib库结构设计

```

## src/***/propsFactory 组件设计

```js 
// imageFactory.ts
import { ComponentTreeType } from "@lfcx/commonreactbuilder";

export const propsFactory = (compoentTree: ComponentTreeType) => {
    const uri = compoentTree.props.uri
    return [`src="${uri}" alt=""`]
}
```


## 输出json数据

```json
{
    "templateKey": "webtailwind",
    "BaseComponentNames": {
        "IMAGE": "img",
        "TEXT": "span",
        "VIEW": "div",
        "INPUT": "input"
    },
    "defaultLib": {
        "components": {
            "img": {
                "propsFactory": "!function(e,o){if(\"object\"==typeof exports&&\"object\"==typeof module)module.exports=o();else if(\"function\"==typeof define&&define.amd)define([],o);else{var r=o();for(var t in r)(\"object\"==typeof exports?exports:e)[t]=r[t]}}(self,(()=>(()=>{\"use strict\";var e={};return(()=>{var o=e;Object.defineProperty(o,\"__esModule\",{value:!0}),o.propsFactory=void 0,o.propsFactory=e=>[`src=\"${e.props.uri}\" alt=\"\"`]})(),e})()));"
            },
            "div": null,
            "span": null,
            "input": {
                "propsFactory": "!function(e,o){if(\"object\"==typeof exports&&\"object\"==typeof module)module.exports=o();else if(\"function\"==typeof define&&define.amd)define([],o);else{var r=o();for(var l in r)(\"object\"==typeof exports?exports:e)[l]=r[l]}}(self,(()=>(()=>{\"use strict\";var e={};return(()=>{var o=e;Object.defineProperty(o,\"__esModule\",{value:!0}),o.propsFactory=void 0,o.propsFactory=e=>{var o,r,l,t;return[`placeholder=\"${null!==(t=null===(l=null===(r=null===(o=e.children)||void 0===o?void 0:o[0])||void 0===r?void 0:r.props)||void 0===l?void 0:l.textValue)&&void 0!==t?t:\"placeholderNull\"}\"`]}})(),e})()));"
            }
        }
    }
}
```