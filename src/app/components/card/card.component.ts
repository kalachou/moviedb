import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TvShow } from 'src/app/models/tvshow.interface';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input()item: TvShow|Movie;
  @Output() toggleLibraryEvent = new EventEmitter<TvShow|Movie>();

  constructor() { }

  ngOnInit() {
  }

  toggleLibrary(item: TvShow|Movie) {
    this.toggleLibraryEvent.emit(item);
  }

}
