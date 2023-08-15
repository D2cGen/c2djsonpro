import { AllLibConfigType, SingleComponent } from "@lfcx/elementtocode"


export abstract class ASingleLibConfig {
    abstract buildLibName(): string;

    abstract buildLibComAndFunc(): SingleComponent;
    buildBaseComponentNames(): AllLibConfigType['BaseComponentNames'] {
        throw new Error("Method not implemented.");
    }
}

export abstract class ATemplateCreater {

    protected abstract buildTemplateJson(): AllLibConfigType;

    protected abstract buildTemplateKey(): AllLibConfigType['templateKey'];

    protected abstract buildBaseComponentNames(): AllLibConfigType['BaseComponentNames'];

    protected abstract buildAllLibs(): { [key: string]: SingleComponent };
}