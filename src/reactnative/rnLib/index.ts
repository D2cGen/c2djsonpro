import { AllLibConfigType, SingleComponent } from "@lfcx/elementtocode"
import { ASingleLibConfig } from "../../common"
import propsFactory from './propsFactory'

class RnSystemLib extends ASingleLibConfig {
    buildLibComAndFunc(): SingleComponent {
        return {
            components: {
                'Image': {
                    propsFactory: propsFactory.imageFactory
                },
                'View': null,
                'Text': null,
                'TextInput': {
                    propsFactory: propsFactory.inputFactory
                },
                'ScrollView': null,
                'FlatList': {
                    elementProps: [
                        'renderItem',
                        'ListHeaderComponent',
                        'ListFooterComponent'
                    ],
                    renderItemProps: 'renderItem',
                    propsFactory: propsFactory.flatListFactory,
                    whiteProps: [
                        'style.flex',
                        'style.paddingTop',
                        'style.paddingLeft',
                        'style.paddingBottom',
                        'style.paddingRight',
                        'style.paddingHorizontal',
                        'style.paddingVertical'
                    ]
                },
            },
            functions: {
                'StyleSheet': {
                    pattern: 'StyleSheet.create(',
                },
                "ViewProps": {
                    pattern: '& ViewProps'
                }
            }
        }
    }

    buildLibName() {
        return "react-native"
    }

    buildBaseComponentNames(): AllLibConfigType['BaseComponentNames'] {
        return {
            IMAGE: "Image",
            TEXT: "Text",
            VIEW: "View",
            INPUT: "TextInput"
        }
    }

}


export const rnSystemLib = new RnSystemLib()