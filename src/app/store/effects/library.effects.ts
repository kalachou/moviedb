import { Injectable } from "@angular/core";

@Injectable
export class LibraryEffects {
    @Effect()

    constructor (
        private _libraryService: LibraryService,
        private _actions$: 
    ) {}
}