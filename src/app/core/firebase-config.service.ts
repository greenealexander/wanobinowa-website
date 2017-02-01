import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { FIREBASE_CONFIG } from './constants/constants';

@Injectable()
export class FirebaseConfigService {
    private _database: firebase.database.Database;
    private _storage: firebase.storage.Storage;

    constructor() { 
        this.configureApp();
        this.configureDatabase();
    }

    public get database() {
        return this._database;
    }

    public get storage() {
        return this._storage;
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG); 
    }

    configureDatabase() {
        this._database = firebase.database();
    }

    configureStorage() {
        this._storage = firebase.storage();
    }
}