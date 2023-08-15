import { SingleComponent } from "@lfcx/elementtocode"
import { ASingleLibConfig } from "../../common"
import propsFactory from './propsFactory'

class DemoProLib extends ASingleLibConfig {
    buildLibComAndFunc(): SingleComponent {
        return {
            functions: {
                pxToDp: null
            }
        }
    }

    buildLibName() {
        return "@utils/pxToDp"
    }

}


export const demoProLib = new DemoProLib()