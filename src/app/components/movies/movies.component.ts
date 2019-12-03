import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  constructor() { }
 @Input()
  movies: Movie[];

 

  ngOnInit() {
  }

}
