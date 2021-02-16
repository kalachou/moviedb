import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { NavigationComponent } from './components/navigation/navigation.component';
import { MoviesService } from './services/movies.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesPageEffects } from './store/effects/movies-page.effects';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ShowsComponent,
    LibraryComponent,
    NotFoundComponent,
    MovieInfoComponent,
    ShowInfoComponent,
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([MoviesPageEffects]),
    FormsModule
  ],
  providers: [MoviesService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
