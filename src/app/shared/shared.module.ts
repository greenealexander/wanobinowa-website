import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        ModalComponent,
        FormsModule,
        ContactComponent
    ],
    declarations: [
        ModalComponent,
        ContactComponent
    ]
})
export class SharedModule { }
