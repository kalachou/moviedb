import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadShowInfo } from '../../store/actions/shows-page.actions';
import { TvShow } from '../../models/tvshow.interface';
import { selectSelectedShow } from '../../store/selectors/shows-page.selectors';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.sass']
})
export class ShowInfoComponent implements OnInit {
  id: number;
  @Input() show$ = this.store.select(selectSelectedShow);
  constructor(private activateRoute: ActivatedRoute,
              private store: Store<AppState>) {
    this.id = activateRoute.snapshot.params.id;

  }

  ngOnInit() {
    this.store.dispatch(new LoadShowInfo(this.id));
  }

}
