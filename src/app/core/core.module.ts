import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';

// Services
import { FirebaseConfigService } from './firebase-config.service';
import { ModalService } from './modal.service';
import { ImagesService } from './images.service';
import { InquiryService } from './inquiry.service';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    imports: [],
    exports: [
        NavbarComponent
    ],
    declarations:  [
        NavbarComponent
    ]
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
            providers: [ FirebaseConfigService, ModalService, ImagesService, InquiryService ]
        };
    }
}
