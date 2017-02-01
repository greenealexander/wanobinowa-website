import { NgsRevealModule } from 'ng2-scrollreveal';

import { ImagesService } from '../../core/images.service';
import { ModalService } from '../../core/modal.service';

import { Component, OnInit } from '@angular/core';

import { Image } from '../../shared/models/image';

@Component({
    moduleId: 'module.id',
    selector: 'fab-gallery',
    templateUrl: 'fab-gallery.component.html',
    styleUrls: ['fab-gallery.component.scss']
})
export class FabGalleryComponent implements OnInit {
    private images: Image[] = [];
    private selectedImage: Image;

    constructor(private _img: ImagesService) { }

    ngOnInit() {
        if (this._img.fabImages.length == 0) {
            this.getImages();
        } else {
            this.images = this._img.fabImages;
        }
    }

    selectImage(img: Image) {
        this.selectedImage = img;
        ModalService.modalActive = true;
    }

    clearImage() {
        this.selectedImage = undefined;
    }

    showForm() {
        ModalService.inquiryFormActive = true;
    }

    getImages() {
        this._img.getFabImages()
            .subscribe(data => {
                this.images = data;
            },
            err => {
                console.log('There was an error retreving the images:' + err);
            });
    }
}
