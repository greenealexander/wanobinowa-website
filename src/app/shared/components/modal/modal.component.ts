import { ModalService } from './../../../core/modal.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Image } from './../../models/image';

@Component({
    moduleId: 'module.id',
    selector: 'modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss']
})
export class ModalComponent {
    @Input() image: Image;
    @Output() clearImage = new EventEmitter();

    constructor() {    }

    close() {
        this.image = undefined;
        ModalService.modalActive = false;
        this.clearImage.emit();
    }
}
