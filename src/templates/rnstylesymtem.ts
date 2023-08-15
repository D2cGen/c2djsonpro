import { AllLibConfigType, SingleComponent } from "@lfcx/elementtocode";
import { rnSystemLib } from "@app/reactnative/rnLib";
import { demoProLib } from "@app/reactnative/demoProLib";

import { ATemplateCreater } from "@app/common";

class RnStyleSymtem extends ATemplateCreater {

    buildTemplateJson() {
        const templateKey = this.buildTemplateKey()
        const BaseComponentNames = this.buildBaseComponentNames()
        const allLibs = this.buildAllLibs()
        return {
            templateKey,
            BaseComponentNames,
            ...allLibs
        }
    }

    buildTemplateKey(): AllLibConfigType['templateKey'] {
        return 'rnstylesymtem'
    }

    buildBaseComponentNames(): AllLibConfigType['BaseComponentNames'] {
        return rnSystemLib.buildBaseComponentNames()
    }

    buildAllLibs() {
        const allLibs: { [key: string]: SingleComponent } = {}
        allLibs[rnSystemLib.buildLibName()] = rnSystemLib.buildLibComAndFunc()
        allLibs[demoProLib.buildLibName()] = demoProLib.buildLibComAndFunc()
        return allLibs
    }
}


export const rnStyleSymtem = new RnStyleSymtem()