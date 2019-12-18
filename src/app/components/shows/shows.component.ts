import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { TvShow } from '../../models/tvshow.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadShowsPage } from '../../store/actions/shows-page.actions';
import { selectCurrentPage, selectShowsList } from '../../store/selectors/shows-page.selectors';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Movie } from 'src/app/models/movie.interface';
import { ToggleItem } from 'src/app/store/actions/library.actions';
import { selectLibraryList } from 'src/app/store/selectors/library.selectors';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit, OnDestroy {
  private nextPage: number;
  private searchIsOff = true;
  private subscription: Subscription = new Subscription();
  private libraryList: (TvShow | Movie)[] = [];
  private id: number;

  constructor(private store: Store<AppState>,
              private search: SearchService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    const showsSubscription = this.store.select(selectShowsList)
      .subscribe(x => {
        this.shows = x;
      });
    const pageSubscription = this.store.select(selectCurrentPage)
      .subscribe((res: number) => this.nextPage = res + 1);

    this.search.setShowedPage('shows');
    const filterSearchSubscription = this.search.onQuickFilterSearch
      .subscribe((x: TvShow[]) => this.shows = x);
    const filterSearchSwitcherSubscription = this.search.onSearchTurnOff
      .subscribe((x: boolean) => this.searchIsOff = x);

    const librarySubscription = this.store.select(selectLibraryList)
      .subscribe((list: (TvShow | Movie)[]) => { this.libraryList = list; });

    this.subscription.add(showsSubscription);
    this.subscription.add(pageSubscription);
    this.subscription.add(filterSearchSubscription);
    this.subscription.add(filterSearchSwitcherSubscription);
    this.subscription.add(librarySubscription);
    this.subscription.add(activateRoute.params.subscribe(params => this.id = params['id']));
  }
  @Input() shows: TvShow[];

  @Output() showSelected: EventEmitter<number> = new EventEmitter();

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.searchIsOff
      && ((window.screen.height + window.pageYOffset) >= document.body.scrollHeight)) {
      alert('you\'re at the bottom of the page, do we download next chunk of shows?');
      console.log('first', this.nextPage, this.shows, this.store);
      this.loadNextPage();
      console.log('second', this.nextPage, this.shows, this.store);
    }
  }

  ngOnInit() {
    if (!this.shows.length) {
      this.store.dispatch(new LoadShowsPage());
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToShow(id: number) {
    this.showSelected.emit(id);
    this.router.navigate(['shows/info', id]);
  }

  loadNextPage() {
    this.store.dispatch(new LoadShowsPage(this.nextPage));
  }

  toggleLibrary(item: TvShow | Movie) {
    this.store.dispatch(new ToggleItem(item));
  }

}
