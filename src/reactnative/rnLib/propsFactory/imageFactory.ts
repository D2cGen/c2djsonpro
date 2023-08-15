
import { ComponentTreeType } from "@lfcx/commonreactbuilder";


export const propsFactory = (compoentTree: ComponentTreeType) => {
    const uri = compoentTree.props.uri
    return [`source={{uri: '${uri}'}}`]
}