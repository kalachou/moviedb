import { Component, OnInit, Input } from '@angular/core';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { selectLibraryListLength, selectLibraryUnseenCount } from '../../store/selectors/library.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  @Input() libraryCount$ = this.store.select(selectLibraryListLength);
  @Input() libraryUnseenCount$ = this.store.select(selectLibraryUnseenCount);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
