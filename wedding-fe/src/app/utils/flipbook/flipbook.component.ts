import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
// @ts-ignore vanilla js lib
import { PageFlip } from 'page-flip'
import { FlipBookPage } from './flipbook.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss']
})
export class FlipbookComponent implements OnInit, OnChanges, AfterViewInit {
  private pageflip: any;

  @Input()
  public pages$: Observable<FlipBookPage[]> | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

  ngAfterViewInit(): void {
    this.pages$?.subscribe(
      (pages: FlipBookPage[]) => {
        if (pages.length > 0 && !this.pageflip) {
          this.pageflip = new PageFlip(document.getElementById('book'), {
            width: 500, // base page width
            height: 400, // base page height
            usePortrait: false,
            size: "stretch", // stretch album to screen width
            // set threshold values:
            minWidth: 500,
            maxWidth: 1000,
            minHeight: 400,
            maxHeight: 800,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: false,
            mobileScrollSupport: false // disable content scrolling on mobile devices
          });
          this.pageflip.loadFromHTML(document.querySelectorAll('.book-page'));
        }
      }
    );
  }
}
