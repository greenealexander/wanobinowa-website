import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArtGalleryComponent } from './components/art-gallery/art-gallery.component';
import { ArchGalleryComponent } from './components/arch-gallery/arch-gallery.component';
import { FabGalleryComponent } from './components/fab-gallery/fab-gallery.component';

export const router: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'gallery-art', component: ArtGalleryComponent },
    { path: 'gallery-houses-rooms', component: ArchGalleryComponent },
    { path: 'gallery-fabrics', component: FabGalleryComponent },
    { path: '**', redirectTo: 'home' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);