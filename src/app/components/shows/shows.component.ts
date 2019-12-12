import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { TvShow } from '../../models/tvshow.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadPage } from '../../store/actions/shows-page.actions';
import { selectCurrentPage, selectShowsList } from '../../store/selectors/shows-page.selectors';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit, OnDestroy {
  private nextPage: number;
  private searchIsOff = true;
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private search: SearchService) { }
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
    this.store.dispatch(new LoadPage());
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

    this.subscription.add(showsSubscription);
    this.subscription.add(pageSubscription);
    this.subscription.add(filterSearchSubscription);
    this.subscription.add(filterSearchSwitcherSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToShow(id: number) {
    this.showSelected.emit(id);
  }

  loadNextPage() {
    this.store.dispatch(new LoadPage(this.nextPage));
  }


}
