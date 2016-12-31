import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';

import { FirebaseConfigService } from './firebase-config.service';

@NgModule({
    imports: [],
    exports: [],
    declarations:  []
})
export class CoreModule { 
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("CoreModule already exists. Only import in the root/app module");
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [ FirebaseConfigService ]
        };
    }
}
