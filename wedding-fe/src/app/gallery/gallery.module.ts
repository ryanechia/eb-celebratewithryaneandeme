import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryModule as NgGalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: GalleryComponent },
];

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgGalleryModule,
    LightboxModule,
    FlexLayoutModule
  ]
})
export class GalleryModule { }
