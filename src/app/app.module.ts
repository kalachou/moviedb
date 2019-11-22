import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { LibraryComponent } from './components/library/library.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { ShowInfoComponent } from './components/show-info/show-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ShowsComponent,
    LibraryComponent,
    NotFoundComponent,
    MovieInfoComponent,
    ShowInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
