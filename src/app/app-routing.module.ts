import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './site/films/films.component';
import { AboutComponent } from './site/about/about.component';
import { HomeComponent } from './site/home/home.component';

const routes: Routes = [
    { path: 'films', component : FilmsComponent},
    { path: 'about', component : AboutComponent},
    { path: 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
