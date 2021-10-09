import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public weddingDateTime = new Date('2022-01-23T12:00:00.000+08:00');

  constructor() { }

  ngOnInit(): void {
  }

  handleComplete(): void {
    console.log('countdown done1');
  }
}
