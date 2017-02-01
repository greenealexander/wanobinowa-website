import { NgsRevealModule } from 'ng2-scrollreveal';

import { ImagesService } from '../../core/images.service';
import { ModalService } from '../../core/modal.service';

import { Component, OnInit } from '@angular/core';

import { Image } from '../../shared/models/image';

@Component({
    moduleId: 'module.id',
    selector: 'arch-gallery',
    templateUrl: 'arch-gallery.component.html',
    styleUrls: ['arch-gallery.component.scss']
})
export class ArchGalleryComponent implements OnInit {
    private images: Image[] = [];
    private selectedImage: Image;

    constructor(private _img: ImagesService) { }

    ngOnInit() {
        if (this._img.archImages.length == 0) {
            this.getImages();
        } else {
            this.images = this._img.archImages;
        }
    }

    selectImage(img: Image) {
        this.selectedImage = img;
        ModalService.modalActive = true;
    }

    showForm() {
        ModalService.inquiryFormActive = true;
    }

    clearImage() {
        this.selectedImage = undefined;
    }

    getImages() {
        this._img.getArchImages()
            .subscribe(data => {
                this.images = data;
            },
            err => {
                console.log('There was an error retreving the images:' + err);
            });
    }
}
