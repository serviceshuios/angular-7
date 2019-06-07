import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class FilmsModule { }
