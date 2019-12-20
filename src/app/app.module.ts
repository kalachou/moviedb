import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { AddFormComponent } from './components/add-form/add-form.component';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesPageEffects } from './store/effects/movies-page.effects';
import { ShowsPageEffects } from './store/effects/shows-page.effects';

import { SearchService } from './services/search.service';
import { ShowsService } from './services/shows.service';
import { MoviesService } from './services/movies.service';


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
    SearchComponent,
    CardComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([MoviesPageEffects, ShowsPageEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MoviesService, ShowsService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
