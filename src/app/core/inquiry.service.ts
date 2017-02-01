import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { FirebaseConfigService } from './firebase-config.service';

import { Image } from './../shared/models/image';
import { Inquiry } from './../shared/models/inquiry';

@Injectable()
export class InquiryService {
    private dbRef: firebase.database.Reference;

    constructor(private _fb: FirebaseConfigService) { 
        this.dbRef = firebase.database().ref('inquiries');
    }

    uploadInquiry(inquiry: Inquiry): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dbRef.push(inquiry);
            resolve("Your inquiry is being processed and you will receive a message from us within the next 48 hours. Thank you very much.");
        });
    }
}