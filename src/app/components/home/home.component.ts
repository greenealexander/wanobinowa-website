import {NgsRevealModule} from 'ng2-scrollreveal';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { Image } from '../../shared/models/image';

import { ModalService } from '../../core/modal.service';

@Component({
    moduleId: 'module.id',
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    private artImages: Image[] = [
        new Image('assets/images/art/art1.jpg', ''),
        new Image('assets/images/art/art2.jpg', ''),
        new Image('assets/images/art/art3.jpg', '')        
    ];
    private archImages: Image[] = [
        new Image('assets/images/arch/arch1.jpg', ''),
        new Image('assets/images/arch/arch2.jpg', ''),
        new Image('assets/images/arch/arch3.jpg', '')        
    ];
    private fabImages: Image[] = [
        new Image('assets/images/fab/fab-bg.jpg', ''),
        new Image('assets/images/fab/fab-bg.jpg', ''),
        new Image('assets/images/fab/fab-bg.jpg', '')        
    ];
    private selectedImage: Image;

    constructor(private router: Router) {}

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

    routeArtGallery() {
        this.router.navigate(['/gallery-art']);
    }

    routeArchGallery() {
        this.router.navigate(['/gallery-houses-rooms']);
    }

    routeFabGallery() {
        this.router.navigate(['/gallery-fabrics']);
    }
}
