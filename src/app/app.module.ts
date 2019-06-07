import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './site/home.module';
import { FilmsModule } from './site/films.module';
import { AboutModule } from './site/about.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    FilmsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
