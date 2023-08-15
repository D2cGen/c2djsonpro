import { AllLibConfigType, SingleComponent } from "@lfcx/elementtocode"
import { ASingleLibConfig } from "../../common"
import propsFactory from './propsFactory'

class WebSystemLib extends ASingleLibConfig {
    buildLibComAndFunc(): SingleComponent {
        return {
            components: {
                'img': {
                    propsFactory: propsFactory.imageFactory
                },
                'div': null,
                'span': null,
                'input': {
                    propsFactory: propsFactory.inputFactory
                }
            }
        }
    }

    buildLibName() {
        return "defaultLib"
    }


    buildBaseComponentNames(): AllLibConfigType['BaseComponentNames'] {
        return {
            IMAGE: "img",
            TEXT: "span",
            VIEW: "div",
            INPUT: "input"
        }
    }
}


export const webSystemLib = new WebSystemLib()