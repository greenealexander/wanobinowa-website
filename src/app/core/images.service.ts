import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseConfigService } from './firebase-config.service';

import { Image } from './../shared/models/image';

@Injectable()
export class ImagesService {
    private _artImages: Image[] = [];
    private _archImages: Image[] = [];
    private _fabImages: Image[] = [];

    public get artImages(): Image[] {
        return this._artImages;
    }

    public get archImages(): Image[] {
        return this._archImages;
    }

    public get fabImages(): Image[] {
        return this._fabImages;
    }

    private artRef = this._fb.database.ref().child('art');
    private archRef = this._fb.database.ref().child('arch');
    private fabRef = this._fb.database.ref().child('fab');

    constructor(private _fb: FirebaseConfigService) { }
    
    /*--------------------------------------------------------------------------*/

    getHomePageImages(): Observable<any> {
        return Observable.create({

        });
    }

    /*--------------------------------------------------------------------------*/

    getArtImages(): Observable<any> {
        return Observable.create(obs => {
            this.artRef.once('value', data => {
                data.forEach(img => {
                    var image: Image = img.val() as Image;
                    image.description = '';
                    this.artImages.push(image);
                    if (!img) return true;
                });
                obs.next(this.artImages);
            },
                err => {
                    obs.throw(err);
                });
        });
    }

    getArchImages(): Observable<any> {
        return Observable.create(obs => {
            this.archRef.once('value', data => {
                data.forEach(img => {
                    var image: Image = img.val() as Image;
                    image.description = '';
                    this.archImages.push(image);
                    if (!img) return true;
                });
                obs.next(this.archImages);
            },
                err => {
                    obs.throw(err);
                });
        });
    }

    getFabImages(): Observable<any> {
        return Observable.create(obs => {
            this.fabRef.once('value', data => {
                data.forEach(img => {
                    var image: Image = img.val() as Image;
                    image.description = '';
                    this.fabImages.push(image);
                    if (!img) return true;
                });
                obs.next(this.fabImages);
            },
                err => {
                    obs.throw(err);
                });
        });
    }

    // getUpdatedArtImages(): Observable<any> {
    //     return Observable.create(obs => {
    //         this.artRef.on('child_changed', img => {
    //             const image: Image = img.val() as Image;
    //             obs.next(image);
    //         },
    //         err => {
    //             obs.throw(err);
    //         });
    //     });
    // }

    // getUpdatedArchImages(): Observable<any> {
    //     return Observable.create(obs => {
    //         this.archRef.on('child_changed', img => {
    //             const image: Image = img.val() as Image;
    //             obs.next(image);
    //         },
    //         err => {
    //             obs.throw(err);
    //         });
    //     });
    // }

    // getUpdatedFabImages(): Observable<any> {
    //     return Observable.create(obs => {
    //         this.fabRef.on('child_changed', img => {
    //             const image: Image = img.val() as Image;
    //             obs.next(image);
    //         },
    //         err => {
    //             obs.throw(err);
    //         });
    //     });
    // }

    getAddedArtImages(): Observable<any> {
        return Observable.create(obs => {
            this.artRef.on('child_added', img => {
                const image: Image = img.val() as Image;
                obs.next(image);
            },
            err => {
                obs.throw(err);
            });
        });
    }

    getAddedArchImages(): Observable<any> {
        return Observable.create(obs => {
            this.archRef.on('child_added', img => {
                const image: Image = img.val() as Image;
                obs.next(image);
            },
            err => {
                obs.throw(err);
            });
        });
    }

    getAddedFabImages(): Observable<any> {
        return Observable.create(obs => {
            this.fabRef.on('child_added', img => {
                const image: Image = img.val() as Image;
                obs.next(image);
            },
            err => {
                obs.throw(err);
            });
        });
    }
}