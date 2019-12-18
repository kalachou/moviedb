import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { SearchService } from 'src/app/services/search.service';
import { Movie } from 'src/app/models/movie.interface';
import { TvShow } from 'src/app/models/tvshow.interface';
import { selectLibraryFilteredList } from 'src/app/store/selectors/library.selectors';
import { ToggleItem, FilterLibrarySearch } from 'src/app/store/actions/library.actions';
import { SeeItems } from '../../store/actions/library.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private id: number;
  constructor(private store: Store<AppState>,
              private search: SearchService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.search.setShowedPage('library');
    this.store.dispatch(new FilterLibrarySearch(this.search.getStoredSearchInput()));
    this.subscription.add(activateRoute.params.subscribe(params => this.id = params.id));
   }
  @Input() library$ = this.store.select(selectLibraryFilteredList);

  @Output() selectedItem: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.store.dispatch(new SeeItems());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleLibrary(item: TvShow|Movie) {
    this.store.dispatch(new ToggleItem(item));
  }

  navigateToLibraryItem(item: TvShow|Movie) {
    if (item instanceof Movie) {
      this.router.navigate(['library/movies/info', item['id']]);
    } else if (item instanceof TvShow) {
      this.router.navigate(['library/shows/info', item.id]);
    }
  }

}
