import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: GalleryItem[];
  constructor(public gallery: Gallery, public lightbox: Lightbox) {
    this.images = [
      new ImageItem({ src: 'assets/photos/IMG_3927.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_3927.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_3984.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_3984.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4116.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4116.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4118.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4118.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4144.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4144.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4153.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4153.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4231.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4231.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4245.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4245.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4251.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4251.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4271.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4271.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4286.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4286.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4386.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4386.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4389.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4389.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4473.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4473.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4487.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4487.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4503.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4503.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4511.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4511.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4594.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4594.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4638.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4638.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4700.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4700.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4716.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4716.jpeg' }),
      new ImageItem({ src: 'assets/photos/IMG_4738.jpg', thumb: 'assets/photos/thumbnails/THUMB_IMG_4738.jpeg' }),
    ];

    this.gallery.ref('lightbox').load(this.images);
  }

  ngOnInit(): void {
  }

}
