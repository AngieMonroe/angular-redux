import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { RetrieveDataService } from 'src/app/services/retrieve-data.service';
import {
  apiErrorCharacters,
  apiGetCharacters,
  apiSuccessCharacters,
} from './characters.action';

@Injectable()
export class CharactersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly retrieveData: RetrieveDataService
  ) {}
  /**
   * Function that allows to bind the action with the request for the Characters Data
   */
  getCharactersDataEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(apiGetCharacters),
      mergeMap((action) => {
        return this.retrieveData.getCharacters().pipe(
          map((res) => apiSuccessCharacters({ data: res.results })),
          catchError((error) => of(apiErrorCharacters({ error })))
        );
      })
    );
  });
}
