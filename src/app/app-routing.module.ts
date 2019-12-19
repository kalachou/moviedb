import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { LibraryComponent } from './components/library/library.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { ShowInfoComponent } from './components/show-info/show-info.component';

const movieRoutes: Routes = [
  { path: 'info/:id', component: MovieInfoComponent }
];

const showRoutes: Routes = [
  { path: 'info/:id', component: ShowInfoComponent }
];

const libraryRoutes: Routes = [
  { path: 'movies/info/:id', component: MovieInfoComponent },
  { path: 'shows/info/:id', component: ShowInfoComponent }
];

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent, children: movieRoutes },
  { path: 'shows', component: ShowsComponent, children: showRoutes },
  { path: 'library', component: LibraryComponent, children: libraryRoutes },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
