import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  constructor() { }
  @Input()
  movies: Movie[];
  @Output()
  movieSelected: EventEmitter<number> = new EventEmitter();

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
      alert("you're at the bottom of the page");
    }
  }

  ngOnInit() {
  }

  navigateToMovie(id: number) {
    this.movieSelected.emit(id);
  }


}
