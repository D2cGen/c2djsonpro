import { AllLibConfigType, SingleComponent } from "@lfcx/elementtocode";
import { webSystemLib } from "@app/webpro/weblib";
import { ATemplateCreater } from "@app/common";

class WebTailwind extends ATemplateCreater {

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
        return 'webtailwind'
    }

    buildBaseComponentNames(): AllLibConfigType['BaseComponentNames'] {
        return webSystemLib.buildBaseComponentNames()
    }

    buildAllLibs() {
        const allLibs: { [key: string]: SingleComponent } = {}
        allLibs[webSystemLib.buildLibName()] = webSystemLib.buildLibComAndFunc()
        return allLibs
    }
}


export const webTailwind = new WebTailwind()