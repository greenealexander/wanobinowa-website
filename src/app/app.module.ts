import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routing';
import {NgsRevealModule} from 'ng2-scrollreveal';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ArtGalleryComponent } from './components/art-gallery/art-gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ArchGalleryComponent } from './components/arch-gallery/arch-gallery.component';
import { FabGalleryComponent } from './components/fab-gallery/fab-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArtGalleryComponent,
    HomeComponent,
    ArchGalleryComponent,
    FabGalleryComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    routes,
    SharedModule,
    NgsRevealModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
