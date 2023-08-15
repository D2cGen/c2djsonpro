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