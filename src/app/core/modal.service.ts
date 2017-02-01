import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    static modalActive: boolean;
    static inquiryFormActive: boolean;

    constructor() {
        ModalService.modalActive = false;
        ModalService.inquiryFormActive = false;
    }
}