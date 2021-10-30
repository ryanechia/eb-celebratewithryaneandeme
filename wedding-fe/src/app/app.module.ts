import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { GALLERY_CONFIG, GalleryModule } from 'ng-gallery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // material modules
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,

    // material flex
    FlexModule,
    FlexLayoutModule,
    MatListModule,

    GalleryModule
  ],
  providers: [{
    provide: GALLERY_CONFIG,
    useValue: {
      dots: true,
      imageSize: 'contain',
      gestures: true,
      loop: true
    }
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
