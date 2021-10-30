import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SocialPopupComponent } from '../utils/social-popup/social-popup.component';
import { FlipBookPage } from '../utils/flipbook/flipbook.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public weddingDateTime = new Date('2022-01-23T12:00:00.000+08:00');
  public regentHotelSingaporeCoords: google.maps.LatLngLiteral = { lat: 1.3047203, lng: 103.8248939 };
  private apiLoaded: Observable<boolean>;
  public gmapOptions: google.maps.MapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    clickableIcons: false,
    controlSize: 25,
    center: this.regentHotelSingaporeCoords,
    zoom: 16,
    gestureHandling: 'cooperative'
  };

  public flipbookPages: Observable<FlipBookPage[]> | undefined;

  constructor(
    httpClient: HttpClient,
    private dialog: MatDialog
  ) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBw3DC5aYlm7X3c4ZM3wdGL3sqkjqV16nI', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.flipbookPages = of([
      { imageUrl: '/assets/album/page1_part_1.jpg' },
      { imageUrl: '/assets/album/page1_part_2.jpg' },
      { imageUrl: '/assets/album/page2_part_1.jpg' },
      { imageUrl: '/assets/album/page2_part_2.jpg' },
      { imageUrl: '/assets/album/page3_part_1.jpg' },
      { imageUrl: '/assets/album/page3_part_2.jpg' },
      { imageUrl: '/assets/album/page4_part_1.jpg' },
      { imageUrl: '/assets/album/page4_part_2.jpg' },
      { imageUrl: '/assets/album/page5_part_1.jpg' },
      { imageUrl: '/assets/album/page5_part_2.jpg' },
      { imageUrl: '/assets/album/page6_part_1.jpg' },
      { imageUrl: '/assets/album/page6_part_2.jpg' },
      { imageUrl: '/assets/album/page7_part_1.jpg' },
      { imageUrl: '/assets/album/page7_part_2.jpg' },
      { imageUrl: '/assets/album/page8_part_1.jpg' },
      { imageUrl: '/assets/album/page8_part_2.jpg' },
      { imageUrl: '/assets/album/page9_part_1.jpg' },
      { imageUrl: '/assets/album/page9_part_2.jpg' },
      { imageUrl: '/assets/album/page10_part_1.jpg' },
      { imageUrl: '/assets/album/page10_part_2.jpg' }
    ]);
  }

  handleComplete(): void {
    console.log('countdown done1');
  }

  viewHashtags(): void {
    this.dialog.open(SocialPopupComponent, {
      width: '40vw',
      disableClose: false
    });
  }
}
