
import { ComponentTreeType } from "@lfcx/commonreactbuilder";


export const propsFactory = (compoentTree: ComponentTreeType) => {
    const childLength = compoentTree.elementProps?.renderItem?.children?.length ?? 1
    let data = []
    for (let i = 0; i < childLength; i++) {
        data.push(i)
    }

    return [`data={[${data.join(',')}]}`]
}