import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsvpComponent } from './rsvp.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: RsvpComponent },
];


@NgModule({
  declarations: [
    RsvpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RsvpModule { }
