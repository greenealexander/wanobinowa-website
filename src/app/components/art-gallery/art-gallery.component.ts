import { NgsRevealModule } from 'ng2-scrollreveal';

import { ImagesService } from '../../core/images.service';
import { ModalService } from '../../core/modal.service';

import { Component, OnInit } from '@angular/core';

import { Image } from '../../shared/models/image';

@Component({
    moduleId: 'module.id',
    selector: 'art-gallery',
    templateUrl: 'art-gallery.component.html',
    styleUrls: ['art-gallery.component.scss']
})
export class ArtGalleryComponent implements OnInit {
    private images: Image[] = [];
    private selectedImage: Image;

    constructor(private _img: ImagesService) { }

    ngOnInit() {
        if (this._img.artImages.length == 0) {
            this.getImages();
        } else {
            this.images = this._img.artImages;
        }
    }

    showForm() {
        ModalService.inquiryFormActive = true;
    }

    selectImage(img: Image) {
        this.selectedImage = img;
        ModalService.modalActive = true;
    }

    clearImage() {
        this.selectedImage = undefined;
    }

    getImages() {
        this._img.getArtImages()
            .subscribe(data => {
                this.images = data;
            },
            err => {
                console.log('There was an error retreving the images:' + err);
            });
    }
}
