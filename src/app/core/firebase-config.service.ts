import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { FIREBASE_CONFIG } from './constants/constants';

@Injectable()
export class FirebaseConfigService {
    private _database: firebase.database.Database;

    constructor() { 
        this.configureApp();
        this.configureDatabase();
    }

    public get database() {
        return this._database;
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG); 
    }

    configureDatabase() {
        this._database = firebase.database();
    }
}