import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(mod => mod.GalleryModule)
  },
  {
    path: 'rsvp',
    loadChildren: () => import('./rsvp/rsvp.module').then(mod => mod.RsvpModule)
  },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
