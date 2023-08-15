
import { ComponentTreeType } from "@lfcx/commonreactbuilder";


export const propsFactory = (compoentTree: ComponentTreeType) => {
    const placeholder = compoentTree.children?.[0]?.props?.textValue ?? 'placeholderNull'
    return [`placeholder="${placeholder}"`]
}