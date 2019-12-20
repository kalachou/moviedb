import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AddNewMovieInfo } from '../../store/actions/movies-page.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { SearchService } from '../../services/search.service';
import { TvShow } from '../../models/tvshow.interface';
import { Movie } from '../../models/movie.interface';
import { AddNewShowInfo } from '../../store/actions/shows-page.actions';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass']
})
export class AddFormComponent implements OnInit {
  genres = {
    genres: [
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 12,
        name: 'Adventure'
      },
      {
        id: 16,
        name: 'Animation'
      },
      {
        id: 35,
        name: 'Comedy'
      },
      {
        id: 80,
        name: 'Crime'
      },
      {
        id: 99,
        name: 'Documentary'
      },
      {
        id: 18,
        name: 'Drama'
      },
      {
        id: 10751,
        name: 'Family'
      },
      {
        id: 14,
        name: 'Fantasy'
      },
      {
        id: 36,
        name: 'History'
      },
      {
        id: 27,
        name: 'Horror'
      },
      {
        id: 10402,
        name: 'Music'
      },
      {
        id: 9648,
        name: 'Mystery'
      },
      {
        id: 10749,
        name: 'Romance'
      },
      {
        id: 878,
        name: 'Science Fiction'
      },
      {
        id: 10770,
        name: 'TV Movie'
      },
      {
        id: 53,
        name: 'Thriller'
      },
      {
        id: 10752,
        name: 'War'
      },
      {
        id: 37,
        name: 'Western'
      }
    ]
  };

  lastAddedID = 0;
  showAddForm = false;
  showedPage: string;
  showPage = this.showedPage !== 'library';
  addForm: FormGroup = new FormGroup({
    title: new FormControl('title', [
      Validators.required
    ]),
    description: new FormControl('description', [
      Validators.required
    ]),
    genre: new FormArray(
      this.genres.genres.map(x => new FormControl()),
      [
        Validators.required
      ]),
    adult: new FormControl(),
    poster: new FormControl('', [
      Validators.required
    ]),
    add: new FormControl(),
    close: new FormControl()
  });

  constructor(private store: Store<AppState>,
              private search: SearchService) {
    this.search.showedPageEvent.subscribe((x: string) => this.showedPage = x);
  }

  ngOnInit() {
  }

  submit() {
    let resultInfo: Movie | TvShow;
    const info = this.addForm.value;

    const itemInfo = {
      title: info.title,
      overview: info.description,
      id: this.lastAddedID - 1,
      posterPath: '',
      voteAverage: 0
    };

    this.lastAddedID -= 1;

    if (this.showedPage === 'movies') {
      resultInfo = {
        ...itemInfo,
        type: 'movie'
      };
      this.store.dispatch(new AddNewMovieInfo(resultInfo));
    } else if (this.showedPage === 'shows') {
      resultInfo = {
        ...itemInfo,
        type: 'show'
      };
      this.store.dispatch(new AddNewShowInfo(resultInfo));
    }

  }

  toggle() {
    this.showAddForm = !this.showAddForm;
  }

}
