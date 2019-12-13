import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { SearchService } from 'src/app/services/search.service';
import { Movie } from 'src/app/models/movie.interface';
import { TvShow } from 'src/app/models/tvshow.interface';
import { selectLibraryList } from 'src/app/store/selectors/library.selectors';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>, private search: SearchService) { }
  @Input() library: (Movie | TvShow)[];

  @Output() selectedItem: EventEmitter<number> = new EventEmitter();
  ngOnInit() {
    const librarySubscription = this.store.select(selectLibraryList)
      .subscribe(x => {
        this.library = x;
      });

    this.search.setShowedPage('library');
    const filterSearchSubscription = this.search.onQuickFilterSearch
      .subscribe((x: (Movie | TvShow)[]) => this.library = x);

    this.subscription.add(librarySubscription);
    this.subscription.add(filterSearchSubscription);
    console.log(this.store);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleLibrary(item: TvShow|Movie) {
    this.store.dispatch(new ToggleItem(item));
  }

}
