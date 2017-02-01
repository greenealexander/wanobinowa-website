import { Inquiry } from './../../models/inquiry';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../core/modal.service';
import { Image } from '../../models/image';
import { InquiryService } from '../../../core/inquiry.service';

@Component({
    moduleId: 'module.id',
    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {
    private name: string;
    private email: string;
    private description: string;

    private charCount: number;

    private art: boolean;
    private arch: boolean;
    private fab: boolean;

    private likedImages: Image[];

    constructor(private _i: InquiryService) {}

    ngOnInit() {
        this.resetValues();
        this.charCount = 0;
    }

    checkCount() {
        this.charCount = this.description.length;
    }

    resetValues() {
        this.charCount = 0;
        this.likedImages = [];
        this.name = '';
        this.email = '';
        this.description = '';
        this.art = false;
        this.arch = false;
        this.fab = false;
    }

    isActive() {
        if (ModalService.inquiryFormActive) {
            return 'flex';
        } else {
            return 'none';
        }
    }

    addImage(img: Image) {
        this.likedImages.push(img);
    }

    hideForm() {
        ModalService.inquiryFormActive = false;
        this.resetValues();
    }

    submit() {
        if (this.name != '' && this.email != '' && this.email.includes('@')) {
            if (this.description == '') {
                this.description = 'No Description';
            }

            var categoryArr = [0,0,0];

            if (this.art) {
                categoryArr[0] = 1;
            }
            if (this.arch) {
                categoryArr[1] = 1;
            }
            if (this.fab) {
                categoryArr[2] = 1;
            }

            this._i.uploadInquiry(
                new Inquiry(new Date().toString(), this.name, this.email, categoryArr, 0, 0, this.description)
            ).then(message => {
                alert(message);
                this.resetValues();
                this.hideForm();
            });
        } else {
            alert('Make sure that all required (*) fields are filled and the email you entered is valid.');
        }
    }
}
