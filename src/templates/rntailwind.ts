import { AllLibConfigType, SingleComponent } from "@lfcx/elementtocode";
import { rnSystemLib } from "@app/reactnative/rnLib";
import { ATemplateCreater } from "@app/common";

class RnTailwind extends ATemplateCreater {

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
        return 'rntailwind'
    }

    buildBaseComponentNames(): AllLibConfigType['BaseComponentNames'] {
        return rnSystemLib.buildBaseComponentNames()
    }

    buildAllLibs() {
        const allLibs: { [key: string]: SingleComponent } = {}
        allLibs[rnSystemLib.buildLibName()] = rnSystemLib.buildLibComAndFunc()
        return allLibs
    }
}


export const rnTailwind = new RnTailwind()